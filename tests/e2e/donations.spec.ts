import { test, expect } from '@playwright/test';

/**
 * End-to-end tests for the Donations page
 * GiveButter is the only donation method.
 */

async function gotoReady(page, path: string) {
  await page.goto(path, { waitUntil: 'domcontentloaded' });

  // AppLoadingProvider gates content behind font-loading + a fade. Headless
  // Chromium often never resolves document.fonts.ready, so force the gate open
  // for donation assertions (DOM + GiveButter wiring), not loading-screen UX.
  await page.waitForSelector('.app-content', { state: 'attached', timeout: 15000 });
  await page.evaluate(() => {
    document.querySelectorAll('.loading-screen').forEach((el) => el.remove());
    const content = document.querySelector('.app-content');
    if (content) {
      content.classList.add('app-content--loaded');
      content.classList.remove('app-content--loading');
      content.style.opacity = '1';
      content.style.visibility = 'visible';
    }
  });
}

test.describe('Donations Page', () => {
  test.beforeEach(async ({ page }) => {
    await gotoReady(page, '/donate');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveURL(/\/donate/);
    await expect(page).toHaveTitle(/Donate/i);
  });

  test('should install the GiveButter widgets library site-wide', async ({ page }) => {
    // Step 1 of GiveButter install guide: library script in <head>
    const script = page.locator('script[src*="widgets.givebutter.com/latest.umd.cjs"]');
    await expect(script.first()).toBeAttached();
    const src = await script.first().getAttribute('src');
    expect(src).toMatch(/acct=cj1p7s9MwIXbWFeF/);
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
    await expect(embed.or(notConfigured)).toBeVisible();

    if (await embed.isVisible().catch(() => false)) {
      const widget = page.locator('givebutter-giving-form, givebutter-widget');
      await expect(widget.first()).toBeAttached();
    }
  });

  test('should mention GiveButter and tax-deductible status', async ({ page }) => {
    await expect(page.getByText(/GiveButter/i).first()).toBeVisible();
    await expect(page.getByText(/82-0737087/).first()).toBeVisible();
  });
});

test.describe('Monthly Giving Prefill Path', () => {
  test('monthly-giving CTA links to donate with frequency=monthly', async ({ page }) => {
    await gotoReady(page, '/monthly-giving');

    const startMonthly = page.getByRole('link', { name: /Start Monthly Giving/i }).first();
    await expect(startMonthly).toBeVisible();
    await expect(startMonthly).toHaveAttribute('href', /\/donate\?frequency=monthly/);
  });

  test('donate?frequency=monthly loads donate page', async ({ page }) => {
    await gotoReady(page, '/donate?frequency=monthly');
    await expect(page).toHaveURL(/frequency=monthly/);
    await expect(page).toHaveTitle(/Donate/i);
  });

  test('tier cards link to donate with amount and monthly frequency', async ({ page }) => {
    await gotoReady(page, '/monthly-giving');
    const advocate = page.getByRole('link', { name: /Advocate/i }).first();
    await expect(advocate).toHaveAttribute('href', /frequency=monthly/);
    await expect(advocate).toHaveAttribute('href', /amount=50/);
  });
});

test.describe('Accessibility - Donations', () => {
  test('main heading is present', async ({ page }) => {
    await gotoReady(page, '/donate');
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });
});

test.describe('Mobile Donations', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('should be usable on mobile', async ({ page }) => {
    await gotoReady(page, '/donate');

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasOverflow).toBe(false);

    const embed = page.getByTestId('givebutter-embed');
    const notConfigured = page.getByTestId('givebutter-not-configured');
    await expect(embed.or(notConfigured)).toBeVisible();
  });
});

test.describe('Impact Display', () => {
  test('should show impact information for donations', async ({ page }) => {
    await gotoReady(page, '/donate');
    const impactSection = page.locator('text=/impact|help|provide|support/i').first();
    await expect(impactSection).toBeVisible();
  });
});
