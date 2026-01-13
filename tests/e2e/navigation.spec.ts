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
    
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to About
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL(/\/about/);
    
    // Navigate to Services
    await page.click('a[href="/services"]');
    await expect(page).toHaveURL(/\/services/);
    
    // Navigate to Contact
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL(/\/contact/);
    
    // Navigate to Donate
    await page.click('a[href="/donate"]');
    await expect(page).toHaveURL(/\/donate/);
  });

  test('logo should link to homepage', async ({ page }) => {
    await page.goto('/about');
    
    // Click on logo/brand link
    const logo = page.locator('header a[href="/"]').first();
    await logo.click();
    
    await expect(page).toHaveURL('/');
  });
});

test.describe('Mobile Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('should show mobile menu button', async ({ page }) => {
    await page.goto('/');
    
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-expanded]');
    await expect(menuButton).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    await page.goto('/');
    
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-expanded]');
    
    // Open menu
    await menuButton.click();
    
    // Check menu is expanded
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Close menu
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('should navigate from mobile menu', async ({ page }) => {
    await page.goto('/');
    
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-expanded]');
    await menuButton.click();
    
    // Wait for menu animation
    await page.waitForTimeout(300);
    
    // Click on a navigation link
    const aboutLink = page.locator('a[href="/about"]').first();
    await aboutLink.click();
    
    await expect(page).toHaveURL(/\/about/);
  });
});

test.describe('Contact Form', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/contact');
    
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('should show validation errors for empty submission', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"]');
    if (await submitButton.isVisible()) {
      await submitButton.click();
      
      // Check for validation (browser native or custom)
      const invalidInputs = page.locator('input:invalid, textarea:invalid');
      const count = await invalidInputs.count();
      expect(count).toBeGreaterThan(0);
    }
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

test.describe('External Links', () => {
  test('external links should open in new tab', async ({ page }) => {
    await page.goto('/');
    
    // Find external links
    const externalLinks = page.locator('a[href^="http"]:not([href*="the-ladder.org"])');
    const count = await externalLinks.count();
    
    for (let i = 0; i < Math.min(count, 5); i++) {
      const link = externalLinks.nth(i);
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');
      
      // External links should open in new tab and have security attributes
      expect(target).toBe('_blank');
      expect(rel).toContain('noopener');
    }
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
      const header = page.locator('header');
      await expect(header).toBeVisible();
    });
  }
});
