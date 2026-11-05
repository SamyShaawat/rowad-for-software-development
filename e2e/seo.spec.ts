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
});
