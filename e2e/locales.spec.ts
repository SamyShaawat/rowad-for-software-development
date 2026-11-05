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

  test('English pages do not link to Arabic while it is hidden', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href^="/ar"]')).toHaveCount(0);
  });
});
