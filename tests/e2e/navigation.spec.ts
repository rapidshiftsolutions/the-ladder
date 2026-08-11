import { test, expect } from '@playwright/test';

/**
 * End-to-end navigation tests for The Ladder website
 */

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('should have correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/The Ladder/i);
  });

  test('should display header and footer', async ({ page }) => {
    await page.goto('/');
    
    const header = page.locator('header').first();
    await expect(header).toBeVisible();
    
    // Use role-based selector for the main site footer
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
  });
});

test.describe('Page Navigation', () => {
  test('should load About page', async ({ page }) => {
    const response = await page.goto('/about');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/About/i);
  });

  test('should load Contact page', async ({ page }) => {
    const response = await page.goto('/contact');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Contact/i);
  });

  test('should load Donate page', async ({ page }) => {
    const response = await page.goto('/donate');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Donate/i);
  });

  test('should load How We Help page', async ({ page }) => {
    const response = await page.goto('/how-we-help');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/How We Help/i);
  });

  test('logo should link to homepage', async ({ page }) => {
    await page.goto('/about');
    
    // Click on logo/brand link
    const logo = page.locator('header a[href="/"]').first();
    await logo.click();
    
    await expect(page).toHaveURL('/');
  });
});

test.describe('Contact Form', () => {
  // The first form on the page is Netlify's hidden detection stub, so these
  // tests target the visible form the user actually fills in.
  test('should display contact form', async ({ page }) => {
    await page.goto('/contact');
    
    const form = page.locator('form:not([hidden])').first();
    await expect(form).toBeVisible();
  });

  test('should have required form fields', async ({ page }) => {
    await page.goto('/contact');
    
    const form = page.locator('form:not([hidden])').first();
    const nameField = form.locator('input[name*="name" i], input[placeholder*="name" i]').first();
    const emailField = form.locator('input[type="email"], input[name*="email" i]').first();
    
    // At least one of these should exist
    const hasNameField = await nameField.isVisible().catch(() => false);
    const hasEmailField = await emailField.isVisible().catch(() => false);
    
    expect(hasNameField || hasEmailField).toBe(true);
  });
});

test.describe('404 Page', () => {
  test('should display 404 for non-existent pages', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist-12345');
    
    // Should return 404 status
    expect(response?.status()).toBe(404);
    
    // Should have some indication of 404
    const content = await page.textContent('body');
    expect(content?.toLowerCase()).toMatch(/not found|404|page.*exist/i);
  });
});

test.describe('Responsive Design', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1280, height: 720 },
  ];

  for (const viewport of viewports) {
    test(`should render correctly on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      // Page should be visible without horizontal overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasOverflow).toBe(false);
      
      // Header should be visible
      const header = page.locator('header').first();
      await expect(header).toBeVisible();
    });
  }
});

test.describe('External Links', () => {
  test('external links should have proper attributes', async ({ page }) => {
    await page.goto('/');
    
    // Find external links
    const externalLinks = page.locator('a[href^="http"]:not([href*="the-ladder.org"]):not([href*="localhost"])');
    const count = await externalLinks.count();
    
    // Check first few external links
    for (let i = 0; i < Math.min(count, 3); i++) {
      const link = externalLinks.nth(i);
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');
      
      // External links should have security attributes
      if (target === '_blank') {
        expect(rel).toContain('noopener');
      }
    }
  });
});
