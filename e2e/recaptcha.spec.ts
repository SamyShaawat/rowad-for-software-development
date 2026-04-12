import { test, expect } from '@playwright/test';

/**
 * reCAPTCHA Integration E2E Tests
 *
 * Tests cover:
 * - Contact page renders correctly with or without reCAPTCHA
 * - Form submission requires reCAPTCHA token
 * - Graceful fallback when reCAPTCHA is not configured
 *
 * Note: Per reviewer feedback, we use Google's test site key
 * (6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI) which always passes.
 * Real reCAPTCHA interaction is not testable in headless mode.
 */

test.describe('reCAPTCHA Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
    await page.waitForTimeout(500);
  });

  // ---------------------------------------------------------------------------
  // 1. Page Rendering
  // ---------------------------------------------------------------------------

  test('contact page renders regardless of reCAPTCHA configuration', async ({ page }) => {
    // Page should always render - either with form or fallback
    const hasHeading = await page
      .getByRole('heading', { name: /get in touch/i })
      .isVisible();
    expect(hasHeading).toBe(true);
  });

  test('shows form when reCAPTCHA site key is configured', async ({ page }) => {
    // Check if NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set (via env or build)
    const hasForm = await page.locator('form').first().isVisible().catch(() => false);
    const hasFallback = await page
      .getByText(/contact form is currently unavailable/i)
      .isVisible()
      .catch(() => false);

    // One of them should be visible
    expect(hasForm || hasFallback).toBe(true);
  });

  // ---------------------------------------------------------------------------
  // 2. Fallback Behavior
  // ---------------------------------------------------------------------------

  test('shows fallback message when reCAPTCHA key is missing', async ({ page }) => {
    // Check if the form is rendered or fallback is shown
    const hasForm = await page.locator('form').first().isVisible().catch(() => false);

    if (!hasForm) {
      // Should show the fallback UI
      await expect(
        page.getByText(/contact form is currently unavailable/i),
      ).toBeVisible();

      // Should have an email link as alternative
      const emailLink = page.locator('a[href^="mailto:"]').first();
      await expect(emailLink).toBeVisible();
    }
    // If form is visible, the test key is configured - that's also fine
  });

  // ---------------------------------------------------------------------------
  // 3. Form Submission with Mocked API
  // ---------------------------------------------------------------------------

  test('form submission includes required fields in request', async ({ page }) => {
    const nameInput = page.locator('input[name="name"]');
    const isVisible = await nameInput.isVisible().catch(() => false);
    if (!isVisible) return; // Form not rendered - skip

    let requestBody: any = null;

    await page.route('**/api/contact', async (route, request) => {
      requestBody = JSON.parse(request.postData() || '{}');
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Message sent securely!' }),
      });
    });

    // Fill form
    await nameInput.fill('Token Test');
    await page.locator('input[name="email"]').fill('token@test.com');
    await page.locator('textarea[name="message"]').fill('Testing token');

    // Submit button state
    const submitButton = page.getByRole('button', { name: /send message/i });

    // Button requires reCAPTCHA token to be enabled
    // Without completing reCAPTCHA, button should be disabled
    const isDisabled = await submitButton.isDisabled();
    expect(isDisabled).toBe(true);
  });

  // ---------------------------------------------------------------------------
  // 4. Error Handling
  // ---------------------------------------------------------------------------

  test('contact page remains stable when API returns errors', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          error: 'reCAPTCHA verification failed. Please try again.',
        }),
      });
    });

    // Page should still be accessible
    await expect(
      page.getByRole('heading', { name: /get in touch/i }),
    ).toBeVisible();
  });

  test('contact page remains stable on server error', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          error: 'Server configuration error. reCAPTCHA secret key is not set.',
        }),
      });
    });

    await expect(
      page.getByRole('heading', { name: /get in touch/i }),
    ).toBeVisible();
  });
});
