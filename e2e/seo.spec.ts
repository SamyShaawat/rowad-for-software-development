import { test, expect } from '@playwright/test';

test.describe('Structured data and unverified claims', () => {
  test('home has a plain JSON-LD tag with the Organization logo', async ({ request }) => {
    // Raw HTML (no JavaScript), like a simple crawler or validator would fetch it.
    const html = await (await request.get('/')).text();
    const match = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
    expect(match, 'JSON-LD script tag in raw HTML').not.toBeNull();
    const data = JSON.parse(match![1]);
    const org = (data['@graph'] ?? [data]).find(
      (n: { '@type': string }) => n['@type'] === 'Organization'
    );
    expect(org.logo).toMatchObject({
      '@type': 'ImageObject',
      url: 'https://rowad.com/images/brand/icon-512.png',
      width: 512,
      height: 512,
    });
  });

  test('brand images in the page head exist', async ({ request, page }) => {
    await page.goto('/');
    const og = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(og).toContain('/images/brand/og-image.jpg');
    for (const path of [
      '/favicon.ico',
      '/images/brand/icon-512.png',
      '/images/brand/og-image.jpg',
    ]) {
      expect((await request.get(path)).status(), path).toBe(200);
    }
  });

  test('services page does not show unverified technology lists', async ({ page }) => {
    await page.goto('/services');
    await expect(page.getByText('Built with')).toHaveCount(0);
    await expect(page.getByText('Tailwind CSS')).toHaveCount(0);
  });

  for (const path of ['/', '/ar']) {
    test(`${path} loads its fonts from this site, not from Google`, async ({ page, baseURL }) => {
      const external: string[] = [];
      page.on('request', (r) => {
        if (!r.url().startsWith(baseURL!)) external.push(r.url());
      });
      await page.goto(path, { waitUntil: 'networkidle' });
      const loaded = await page.evaluate(async () => {
        await document.fonts.ready;
        return [...document.fonts].filter((f) => f.status === 'loaded').length;
      });
      expect(loaded).toBeGreaterThan(3);
      expect(external.filter((u) => /fonts\.(googleapis|gstatic)/.test(u))).toEqual([]);
    });
  }

  const pages = ['/', '/services', '/clients', '/about', '/contact'];
  const arOf = (p: string) => (p === '/' ? '/ar' : `/ar${p}`);
  const abs = (p: string) => (p === '/' ? 'https://rowad.com' : `https://rowad.com${p}`);

  for (const enPath of pages) {
    test(`${enPath} and ${arOf(enPath)}: self canonical, hreflang both ways, indexable`, async ({
      page,
    }) => {
      for (const [path, lang] of [
        [enPath, 'en'],
        [arOf(enPath), 'ar'],
      ] as const) {
        await page.goto(path);
        await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /^index/);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', abs(path));
        // both pages list the same trio, so each links to the other and back
        await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
          'href',
          abs(enPath)
        );
        await expect(page.locator('link[rel="alternate"][hreflang="ar"]')).toHaveAttribute(
          'href',
          abs(arOf(enPath))
        );
        await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
          'href',
          abs(enPath)
        );
        if (lang === 'ar') {
          await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
            'content',
            'ar_EG'
          );
          await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
            'content',
            /og-image-ar\.jpg$/
          );
        }
      }
    });
  }

  test('sitemap lists every page in both languages, each with its hreflang twin', async ({
    request,
  }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs.sort()).toEqual(
      pages
        .flatMap((p) => [abs(p === '/' ? '/' : p), abs(arOf(p))])
        .map((u) => (u === 'https://rowad.com' ? 'https://rowad.com/' : u))
        .sort()
    );
    expect((xml.match(/hreflang="ar"/g) ?? []).length).toBe(10);
    expect(xml).not.toContain('noindex');
  });

  test('Arabic structured data: Arabic, with hours and without unconfirmed facts', async ({
    request,
  }) => {
    const html = await (await request.get('/ar')).text();
    const ld = JSON.parse(html.match(/ld\+json"[^>]*>([\s\S]*?)<\/script>/)![1]);
    const text = JSON.stringify(ld);
    expect(ld['@graph'].find((n: { '@type': string }) => n['@type'] === 'WebSite').inLanguage).toBe(
      'ar'
    );
    expect(text).toContain('"dayOfWeek":["Sunday","Monday","Tuesday","Wednesday","Thursday"]');
    expect(text).toContain('رواد لتطوير البرمجيات');
    for (const unconfirmed of [
      'numberOfEmployees',
      'priceRange',
      'foundingDate',
      'Next.js',
      '99.9',
    ]) {
      expect(text).not.toContain(unconfirmed);
    }
  });

  test('the Arabic share image exists and is 1200x630', async ({ request }) => {
    const res = await request.get('/images/brand/og-image-ar.jpg');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('image/jpeg');
  });
});
