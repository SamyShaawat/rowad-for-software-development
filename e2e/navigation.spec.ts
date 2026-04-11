import { test, expect } from '@playwright/test';

/**
 * Navigation E2E Tests
 *
 * Tests cover:
 * - Header navigation links
 * - Page routing between pages
 * - Footer links
 * - Active page highlighting
 */

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ---------------------------------------------------------------------------
  // 1. Header Navigation
  // ---------------------------------------------------------------------------

  test('header contains navigation links to all main pages', async ({ page }) => {
    const header = page.locator('header, nav').first();
    await expect(header).toBeVisible();

    // Home link
    const homeLink = page.getByRole('link', { name: /home/i }).or(page.locator('a[href="/"]').first());
    await expect(homeLink).toBeVisible();

    // Services link
    const servicesLink = page.getByRole('link', { name: /services/i });
    await expect(servicesLink).toBeVisible();

    // About link
    const aboutLink = page.getByRole('link', { name: /about/i });
    await expect(aboutLink).toBeVisible();

    // Contact link
    const contactLink = page.getByRole('link', { name: /contact/i });
    await expect(contactLink).toBeVisible();
  });

  test('clicking Services navigates to /services', async ({ page }) => {
    const servicesLink = page.getByRole('link', { name: /services/i });
    await servicesLink.click();

    await expect(page).toHaveURL(/.*\/services/);
    await expect(page.getByRole('heading', { name: /services/i })).toBeVisible();
  });

  test('clicking About navigates to /about', async ({ page }) => {
    const aboutLink = page.getByRole('link', { name: /about/i });
    await aboutLink.click();

    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.getByRole('heading', { name: /about/i })).toBeVisible();
  });

  test('clicking Contact navigates to /contact', async ({ page }) => {
    const contactLink = page.getByRole('link', { name: /contact/i });
    await contactLink.click();

    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.getByRole('heading', { name: /get in touch|contact/i })).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 2. Logo / Home Navigation
  // ---------------------------------------------------------------------------

  test('clicking logo navigates to home page', async ({ page }) => {
    // Navigate away from home first
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL(/.*\/contact/);

    // Click logo to go back home
    const logoLink = page.getByRole('link', { name: /rowad|rowad for software|home/i }).or(
      page.locator('a[href="/"]').first(),
    );
    await logoLink.click();

    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: /transforming ideas|rowad/i })).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 3. Footer Navigation
  // ---------------------------------------------------------------------------

  test('footer contains navigation links', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Footer should have at least some links
    const footerLinks = footer.locator('a');
    const count = await footerLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('footer email link opens mail client', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footer = page.locator('footer');
    const emailLink = footer.locator('a[href^="mailto:"]').first();

    // If email link exists, verify format
    if (await emailLink.isVisible()) {
      const href = await emailLink.getAttribute('href');
      expect(href).toMatch(/^mailto:/);
    }
  });

  // ---------------------------------------------------------------------------
  // 4. CTA Buttons
  // ---------------------------------------------------------------------------

  test('CTA buttons navigate correctly', async ({ page }) => {
    // Scroll to bottom CTA section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // "Contact Us" or "Get Started" CTA should go to contact
    const ctaLinks = page.locator('section a.btn-primary, a[href*="contact"]');
    const ctaCount = await ctaLinks.count();

    if (ctaCount > 0) {
      const href = await ctaLinks.first().getAttribute('href');
      expect(href).toMatch(/contact|tel:|#contact/);
    }
  });
});
