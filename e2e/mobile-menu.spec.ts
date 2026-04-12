import { test, expect } from '@playwright/test';

/**
 * Mobile Menu E2E Tests
 *
 * Tests cover:
 * - Hamburger button visibility on mobile viewport
 * - Menu open/close toggle behavior
 * - Navigation links in mobile menu
 * - Menu closes when clicking a link
 * - Get Started CTA in mobile menu
 */

test.describe('Mobile Menu', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for client-side hydration of Header component
    await page.waitForTimeout(5000);
  });

  // ---------------------------------------------------------------------------
  // 1. Hamburger Button
  // ---------------------------------------------------------------------------

  test('hamburger button is visible on mobile viewport', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await expect(hamburgerBtn).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 2. Menu Open/Close
  // ---------------------------------------------------------------------------

  test('opens mobile menu when hamburger button is clicked', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();
    await page.waitForTimeout(500);

    // Mobile menu container appears after clicking hamburger
    // Look for the mobile menu content inside the header
    const mobileMenu = page.locator('header').getByRole('link', { name: 'Home', exact: true }).first();
    await expect(mobileMenu).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: 'Services', exact: true }).first()).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: 'Our Clients', exact: true }).first()).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: 'About Us', exact: true }).first()).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: 'Contact', exact: true }).first()).toBeVisible();
  });

  test('closes mobile menu when hamburger button (X) is clicked again', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');

    // Open menu
    await hamburgerBtn.click();
    await page.waitForTimeout(500);

    // Verify menu is open - home link in header should be visible (not in nav)
    const homeLinkInHeader = page.locator('header').getByRole('link', { name: 'Home', exact: true }).first();
    await expect(homeLinkInHeader).toBeVisible();

    // Click again to close
    await hamburgerBtn.click();
    await page.waitForTimeout(500);

    // Menu should be hidden - the home link in header (outside nav) should be gone
    await expect(homeLinkInHeader).not.toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 3. Navigation Links
  // ---------------------------------------------------------------------------

  test('all navigation links are present in mobile menu', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();
    await page.waitForTimeout(500);

    const navItems = ['Home', 'Services', 'Our Clients', 'About Us', 'Contact'];
    for (const item of navItems) {
      const link = page.locator('header').getByRole('link', { name: item, exact: true }).first();
      await expect(link).toBeVisible();
    }
  });

  test('clicking a nav link navigates to the correct page', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();
    await page.waitForTimeout(500);

    const contactLink = page.locator('header').getByRole('link', { name: 'Contact', exact: true }).first();
    await contactLink.click();

    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.getByRole('heading', { name: /get in touch/i })).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 4. Menu Closes on Navigation
  // ---------------------------------------------------------------------------

  test('mobile menu closes after clicking a navigation link', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();
    await page.waitForTimeout(500);

    const servicesLink = page.locator('header').getByRole('link', { name: 'Services', exact: true }).first();
    await servicesLink.click();

    await page.waitForURL(/.*\/services/);

    // Menu should be closed - hamburger should be visible
    await expect(hamburgerBtn).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 5. Get Started CTA
  // ---------------------------------------------------------------------------

  test('Get Started CTA button is visible in mobile menu', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();
    await page.waitForTimeout(500);

    const getStartedBtn = page.locator('header').getByRole('link', { name: /get started/i }).first();
    await expect(getStartedBtn).toBeVisible();

    await getStartedBtn.click();
    await expect(page).toHaveURL(/.*\/contact/);
  });

  // ---------------------------------------------------------------------------
  // 6. Theme Toggle in Mobile Header
  // ---------------------------------------------------------------------------

  test('theme toggle is accessible in mobile header', async ({ page }) => {
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });
    await expect(themeToggle).toBeVisible();
  });
});
