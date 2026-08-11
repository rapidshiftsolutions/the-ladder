import { test, expect } from '@playwright/test';

/**
 * End-to-end tests for the Donations page
 * GiveButter is the only donation method.
 */

test.describe('Donations Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/donate');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveURL(/\/donate/);
    await expect(page).toHaveTitle(/Donate/i);
  });

  test('should not show PayPal, Venmo, or Cash App payment CTAs', async ({ page }) => {
    const legacyPayment = page.locator('button, a').filter({
      hasText: /PayPal|Venmo|Cash\s?App/i,
    });
    await expect(legacyPayment).toHaveCount(0);
  });

  test('should show GiveButter embed or configuration state', async ({ page }) => {
    const embed = page.getByTestId('givebutter-embed');
    const notConfigured = page.getByTestId('givebutter-not-configured');

    const embedVisible = await embed.isVisible().catch(() => false);
    const fallbackVisible = await notConfigured.isVisible().catch(() => false);

    expect(embedVisible || fallbackVisible).toBe(true);

    if (embedVisible) {
      const widget = page.locator('givebutter-giving-form, givebutter-widget');
      await expect(widget.first()).toBeAttached();
    }
  });

  test('should mention GiveButter and tax-deductible status', async ({ page }) => {
    await expect(page.getByText(/GiveButter/i).first()).toBeVisible();
    await expect(page.getByText(/82-0737087/)).toBeVisible();
  });
});

test.describe('Monthly Giving Prefill Path', () => {
  test('monthly-giving CTA links to donate with frequency=monthly', async ({ page }) => {
    await page.goto('/monthly-giving');

    const startMonthly = page.getByRole('link', { name: /Start Monthly Giving/i }).first();
    await expect(startMonthly).toBeVisible();
    await expect(startMonthly).toHaveAttribute('href', /\/donate\?frequency=monthly/);
  });

  test('donate?frequency=monthly loads donate page', async ({ page }) => {
    await page.goto('/donate?frequency=monthly');
    await expect(page).toHaveURL(/frequency=monthly/);
    await expect(page).toHaveTitle(/Donate/i);
  });

  test('tier cards link to donate with amount and monthly frequency', async ({ page }) => {
    await page.goto('/monthly-giving');
    const advocate = page.getByRole('link', { name: /Advocate/i }).first();
    await expect(advocate).toHaveAttribute('href', /frequency=monthly/);
    await expect(advocate).toHaveAttribute('href', /amount=50/);
  });
});

test.describe('Accessibility - Donations', () => {
  test('main heading is present', async ({ page }) => {
    await page.goto('/donate');
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });
});

test.describe('Mobile Donations', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('should be usable on mobile', async ({ page }) => {
    await page.goto('/donate');

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasOverflow).toBe(false);

    const embed = page.getByTestId('givebutter-embed');
    const notConfigured = page.getByTestId('givebutter-not-configured');
    const embedVisible = await embed.isVisible().catch(() => false);
    const fallbackVisible = await notConfigured.isVisible().catch(() => false);
    expect(embedVisible || fallbackVisible).toBe(true);
  });
});

test.describe('Impact Display', () => {
  test('should show impact information for donations', async ({ page }) => {
    await page.goto('/donate');
    const impactSection = page.locator('text=/impact|help|provide|support/i').first();
    await expect(impactSection).toBeVisible();
  });
});
