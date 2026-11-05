import { test, expect } from '@playwright/test';

const routes = ['/', '/services', '/clients', '/about', '/contact'];
const arPath = (r: string) => (r === '/' ? '/ar' : `/ar${r}`);

test.describe('Languages', () => {
  for (const route of routes) {
    test(`English ${route} keeps its URL, lang=en and is indexable`, async ({ page }) => {
      const res = await page.goto(route);
      expect(res?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /^index/);
    });

    test(`Arabic ${arPath(route)} is rtl and hidden from search`, async ({ page }) => {
      const res = await page.goto(arPath(route));
      expect(res?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
      await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    });
  }

  test('Arabic header uses Arabic labels and /ar links', async ({ page }) => {
    await page.goto('/ar');
    const nav = page.locator('header nav');
    await expect(nav.getByRole('link', { name: 'الرئيسية' }).first()).toHaveAttribute(
      'href',
      '/ar'
    );
    await expect(nav.getByRole('link', { name: 'تواصل معنا' }).first()).toHaveAttribute(
      'href',
      '/ar/contact'
    );
  });

  test('Arabic footer is fully Arabic, English footer unchanged', async ({ page }) => {
    await page.goto('/ar');
    const footer = page.locator('footer');
    for (const text of ['استكشف', 'المقر الرئيسي', 'الاستفسارات', 'الخصوصية']) {
      await expect(footer).toContainText(text);
    }
    await expect(footer).not.toContainText('Main Office');
    await page.goto('/');
    await expect(page.locator('footer')).toContainText('Main Office');
  });

  test('Footer has no fake newsletter form', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer form')).toHaveCount(0);
  });

  test('Error pages are bilingual', async ({ page }) => {
    for (const code of ['404', '500', '403']) {
      await page.goto(`/${code}.html`);
      await expect(page.locator('[lang="ar"][dir="rtl"]').first()).toBeVisible();
    }
  });

  test('Arabic home is fully translated and stays inside /ar', async ({ page }) => {
    await page.goto('/ar');
    await expect(page.locator('h1')).toHaveText('فريق واحد لكل برمجياتك.');
    const main = page.locator('main');
    for (const english of [
      'One team for every',
      'Book a free consultation',
      'Explore services',
      'How we work',
    ]) {
      await expect(main).not.toContainText(english);
    }
    const hrefs = await main
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
    expect(hrefs.length).toBeGreaterThan(5);
    expect(hrefs.filter((h) => !h.startsWith('/ar'))).toEqual([]);
  });

  test('English home keeps its text and links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveText('One team for every piece of your software.');
    await expect(page.getByRole('link', { name: 'Explore services' })).toHaveAttribute(
      'href',
      '/services'
    );
  });

  test('English pages do not link to Arabic while it is hidden', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href^="/ar"]')).toHaveCount(0);
  });
});
