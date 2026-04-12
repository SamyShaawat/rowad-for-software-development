import { test, expect } from '@playwright/test';

/**
 * Theme Toggle E2E Tests
 *
 * Tests cover:
 * - Theme toggle button exists and works
 * - Dark mode is applied (default)
 * - Light mode can be toggled on
 * - Theme preference persists in localStorage across page navigation
 *
 * Note: The app uses next-themes with localStorage persistence.
 */

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ---------------------------------------------------------------------------
  // 1. Default Theme (Dark)
  // ---------------------------------------------------------------------------

  test('loads with dark theme by default', async ({ page }) => {
    // Wait for mounted state
    await page.waitForTimeout(500);

    // The app uses dark mode by default (next-themes)
    const htmlClass = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    expect(htmlClass).toBe(true);
  });

  // ---------------------------------------------------------------------------
  // 2. Theme Toggle Button
  // ---------------------------------------------------------------------------

  test('theme toggle button is visible in header', async ({ page }) => {
    await page.waitForTimeout(500);

    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });
    await expect(themeToggle).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // 3. Theme Switching
  // ---------------------------------------------------------------------------

  test('switches from dark to light mode when toggled', async ({ page }) => {
    await page.waitForTimeout(500);

    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });

    // Get initial theme
    const initialTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
    expect(initialTheme).toBe('dark');

    // Click toggle
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Verify theme changed
    const newTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
    expect(newTheme).toBe('light');
  });

  // ---------------------------------------------------------------------------
  // 4. localStorage Persistence
  // ---------------------------------------------------------------------------

  test('persists theme preference in localStorage across page navigation', async ({ page }) => {
    await page.waitForTimeout(500);

    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });

    // Click toggle to change theme
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Check localStorage for theme preference
    const storedTheme = await page.evaluate(() => {
      return localStorage.getItem('theme');
    });

    expect(storedTheme).toBeTruthy();
    expect(['dark', 'light', 'system']).toContain(storedTheme);

    // Navigate to another page
    const contactLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'Contact', exact: true });
    await contactLink.click();
    await page.waitForURL(/.*\/contact/);
    await page.waitForTimeout(500);

    // Theme should persist on new page
    const persistedTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    expect(persistedTheme).toBe(storedTheme);
  });

  test('respects stored preference on reload', async ({ page }) => {
    await page.waitForTimeout(500);

    // Set theme in localStorage before loading
    await page.evaluate(() => {
      localStorage.setItem('theme', 'light');
    });
    await page.reload();
    await page.waitForTimeout(500);

    // Light theme should be active
    const isLight = await page.evaluate(() => {
      return !document.documentElement.classList.contains('dark');
    });
    expect(isLight).toBe(true);
  });
});
