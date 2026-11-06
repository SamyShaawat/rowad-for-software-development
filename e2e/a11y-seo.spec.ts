import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  '/',
  '/services',
  '/clients',
  '/about',
  '/contact',
  '/ar',
  '/ar/services',
  '/ar/clients',
  '/ar/about',
  '/ar/contact',
];

test.describe('Accessibility (axe: WCAG 2.2 A/AA and best practice)', () => {
  for (const path of pages) {
    test(`${path} has no axe violations`, async ({ page }) => {
      await page.goto(path);
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
        .analyze();
      expect(
        result.violations.map(
          (v) =>
            `${v.id}: ${v.nodes
              .map((n) => n.target.join(' '))
              .slice(0, 2)
              .join(' | ')}`
        )
      ).toEqual([]);
    });
  }

  test('light mode also passes on the pages with the most text', async ({ page }) => {
    for (const path of ['/', '/contact', '/ar/about']) {
      await page.goto(path);
      await page.evaluate(() => {
        document.documentElement.classList.remove('dark');
      });
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
      expect(
        result.violations.map((v) => v.id),
        path
      ).toEqual([]);
    }
  });

  test('a skip link is the first thing keyboard users reach, in both languages', async ({
    page,
  }) => {
    for (const [path, label] of [
      ['/', 'Skip to content'],
      ['/ar', 'انتقل إلى المحتوى'],
    ] as const) {
      await page.goto(path);
      await page.keyboard.press('Tab');
      const skip = page.getByRole('link', { name: label });
      await expect(skip).toBeFocused();
      await expect(skip).toBeVisible();
      await page.keyboard.press('Enter');
      await expect(page).toHaveURL(/#main$/);
    }
  });
});

test.describe('Search snippets fit', () => {
  for (const path of pages) {
    test(`${path}: title up to 60 characters, description up to 160`, async ({ page }) => {
      await page.goto(path);
      const title = await page.title();
      const desc = (await page.locator('meta[name="description"]').getAttribute('content')) ?? '';
      expect(title.length, title).toBeLessThanOrEqual(60);
      expect(desc.length, desc).toBeGreaterThan(70);
      expect(desc.length, desc).toBeLessThanOrEqual(160);
    });
  }
});

test.describe('External links', () => {
  test('client website links use https and Prokem has no dead link', async ({ page }) => {
    await page.goto('/clients');
    for (let n = 1; n <= 3; n++) {
      const hrefs = await page
        .locator('main li[id^="client-"] a[target="_blank"]')
        .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
      for (const h of hrefs) expect(h, h).toMatch(/^https:\/\//);
      const next = page.getByRole('button', { name: String(n + 1), exact: true });
      if (await next.count()) await next.click();
    }
    await page.getByRole('searchbox').fill('Prokem');
    await expect(page.locator('main li[id^="client-"]')).toHaveCount(1);
    await expect(page.locator('main li[id^="client-"] a[target="_blank"]')).toHaveCount(0);
  });

  test('footer has no dead "#" links', async ({ page }) => {
    for (const path of ['/', '/ar']) {
      await page.goto(path);
      await expect(page.locator('footer a[href="#"]')).toHaveCount(0);
    }
  });
});
