import { test, expect } from '@playwright/test';

/**
 * End-to-end tests for the Donations pages (Givebutter-backed)
 */

test.describe('Donations Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/donate');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveURL(/\/donate/);
    await expect(page).toHaveTitle(/Donate/i);
  });

  test('should display Givebutter donate embed', async ({ page }) => {
    const widgetHost = page.locator('[data-givebutter-widget], .givebutter-widget-host');
    await expect(widgetHost.first()).toBeVisible();
    const iframe = page.locator('iframe.givebutter-embed-iframe, iframe[title*="Donate" i]');
    await expect(iframe.first()).toBeVisible();
    await expect(iframe.first()).toHaveAttribute('src', /givebutter\.com/);
  });

  test('should show trust signals near the form', async ({ page }) => {
    await expect(page.getByText(/501\(c\)\(3\)|EIN|82-0737087/i).first()).toBeVisible();
    await expect(page.getByText(/Givebutter|Secure/i).first()).toBeVisible();
  });

  test('should link to monthly giving', async ({ page }) => {
    const monthlyLink = page.getByRole('link', { name: /monthly/i }).first();
    await expect(monthlyLink).toBeVisible();
    await expect(monthlyLink).toHaveAttribute('href', /monthly-giving/);
  });

  test('should include DonateAction structured data', async ({ page }) => {
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const contents = await jsonLd.allTextContents();
    const joined = contents.join('\n');
    expect(joined).toMatch(/DonateAction|NGO|82-0737087/);
  });
});

test.describe('Monthly Giving Page', () => {
  test('should load Givebutter monthly widget', async ({ page }) => {
    await page.goto('/monthly-giving');
    await expect(page).toHaveTitle(/Monthly/i);
    const widgetHost = page.locator('[data-givebutter-widget], .givebutter-widget-host');
    await expect(widgetHost.first()).toBeVisible();
    const iframe = page.locator('iframe.givebutter-embed-iframe, iframe[src*="givebutter.com"]');
    await expect(iframe.first()).toBeVisible();
  });
});

test.describe('Donation SEO', () => {
  test('should have meta description', async ({ page }) => {
    await page.goto('/donate');
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
  });

  test('should have Open Graph tags', async ({ page }) => {
    await page.goto('/donate');
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toMatch(/Donate|Ladder/i);
  });
});
