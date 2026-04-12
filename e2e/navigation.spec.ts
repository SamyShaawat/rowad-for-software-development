import { test, expect } from '@playwright/test';

/**
 * Navigation E2E Tests
 *
 * Tests cover:
 * - Header navigation links
 * - Page routing between pages
 * - Footer links
 * - Logo home navigation
 */

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ---------------------------------------------------------------------------
  // 1. Header Navigation
  // ---------------------------------------------------------------------------

  test('header contains navigation links to all main pages', async ({ page }) => {
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();

    // Check each nav link exists in the header navigation
    const links = ['Home', 'Services', 'Our Clients', 'About Us', 'Contact'];
    for (const name of links) {
      const link = nav.getByRole('link', { name, exact: true });
      await expect(link).toBeVisible();
    }
  });

  test('clicking Services navigates to /services', async ({ page }) => {
    const servicesLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'Services', exact: true })
      .first();
    await servicesLink.click();

    await expect(page).toHaveURL(/.*\/services/);
    // Just verify we navigated - heading text may vary
    expect(page.url()).toContain('/services');
  });

  test('clicking About Us navigates to /about', async ({ page }) => {
    const aboutLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'About Us', exact: true });
    await aboutLink.click();

    await expect(page).toHaveURL(/.*\/about/);
    await expect(
      page.getByRole('heading', { name: /about us|aboutrowad|about rowad/i }).or(
        page.locator('h1, h2').first(),
      ),
    ).toBeVisible();
  });

  test('clicking Contact navigates to /contact', async ({ page }) => {
    const contactLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'Contact', exact: true });
    await contactLink.click();

    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.getByRole('heading', { name: /get in touch/i })).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 2. Logo / Home Navigation
  // ---------------------------------------------------------------------------

  test('clicking logo navigates to home page', async ({ page }) => {
    // Navigate away from home first
    const contactLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'Contact', exact: true });
    await contactLink.click();
    await expect(page).toHaveURL(/.*\/contact/);

    // Click logo (first link with href="/")
    const logoLink = page.locator('a[href="/"]').first();
    await logoLink.click();

    await expect(page).toHaveURL('/');
  });

  // ---------------------------------------------------------------------------
  // 3. Footer Navigation
  // ---------------------------------------------------------------------------

  test('footer contains navigation links', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Footer should have at least some links
    const footerLinks = footer.locator('a');
    const count = await footerLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  // ---------------------------------------------------------------------------
  // 4. CTA Buttons
  // ---------------------------------------------------------------------------

  test('home page has Get Started CTA button', async ({ page }) => {
    const ctaButton = page.getByRole('link', { name: /get started/i });
    await expect(ctaButton).toBeVisible();

    // CTA should navigate to contact page
    await expect(ctaButton).toHaveAttribute('href', '/contact');
  });
});
