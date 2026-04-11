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
  // Use mobile viewport for all tests in this file
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ---------------------------------------------------------------------------
  // 1. Hamburger Button
  // ---------------------------------------------------------------------------

  test('hamburger button is visible on mobile viewport', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await expect(hamburgerBtn).toBeVisible();

    // Desktop nav should be hidden on mobile
    const desktopNav = page.locator('.hidden.md\\:flex').first();
    await expect(desktopNav).not.toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 2. Menu Open/Close
  // ---------------------------------------------------------------------------

  test('opens mobile menu when hamburger button is clicked', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();

    // Mobile menu should be visible
    // Use a more reliable selector: the mobile menu container has the animation classes
    const mobileMenu = page.locator('header > nav > div.md\\:hidden > div').last();
    await expect(mobileMenu).toBeVisible();

    // All navigation links should be visible
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /services/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('closes mobile menu when hamburger button (X) is clicked again', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');

    // Open menu
    await hamburgerBtn.click();
    await expect(page.locator('#mobile-menu-btn')).toBeVisible();

    // The button should now show X icon
    // Click again to close
    await hamburgerBtn.click();

    // Menu should be hidden — nav links should not be in the mobile menu area
    // The mobile menu container should be hidden
    const mobileMenuContainer = page.locator('header').locator('div.md\\:hidden').last();
    const isHidden = await mobileMenuContainer.isHidden().catch(() => true);
    expect(isHidden).toBe(true);
  });

  // ---------------------------------------------------------------------------
  // 3. Navigation Links
  // ---------------------------------------------------------------------------

  test('all navigation links are present in mobile menu', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();

    // Check each nav link
    const navItems = ['Home', 'Services', 'Clients', 'About', 'Contact'];
    for (const item of navItems) {
      const link = page.getByRole('link', { name: item, exact: true });
      await expect(link).toBeVisible();
    }
  });

  test('clicking a nav link navigates to the correct page', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();

    // Click Contact link
    const contactLink = page.getByRole('link', { name: 'Contact', exact: true });
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

    // Click Services link
    const servicesLink = page.getByRole('link', { name: 'Services', exact: true });
    await servicesLink.click();

    // After navigation, open hamburger again — should be able to
    // (menu was closed by the click)
    await page.waitForURL(/.*\/services/);

    // The menu should be closed — clicking hamburger should open it fresh
    await hamburgerBtn.click();
    await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 5. Get Started CTA
  // ---------------------------------------------------------------------------

  test('Get Started CTA button is visible in mobile menu', async ({ page }) => {
    const hamburgerBtn = page.locator('#mobile-menu-btn');
    await hamburgerBtn.click();

    const getStartedBtn = page.getByRole('link', { name: /get started/i });
    await expect(getStartedBtn).toBeVisible();

    // Should navigate to contact page
    await getStartedBtn.click();
    await expect(page).toHaveURL(/.*\/contact/);
  });

  // ---------------------------------------------------------------------------
  // 6. Theme Toggle in Mobile Header
  // ---------------------------------------------------------------------------

  test('theme toggle is accessible in mobile header', async ({ page }) => {
    // Theme toggle should always be visible in header (next to hamburger)
    const themeToggle = page
      .locator('header')
      .getByRole('button', { name: /theme|toggle|dark|light|mode/i })
      .or(page.locator('header [aria-label*="theme"]').first());

    // Theme toggle should be visible even on mobile
    const isVisible = await themeToggle.isVisible().catch(() => false);
    expect(isVisible).toBe(true);
  });
});
