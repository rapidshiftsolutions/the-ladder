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

test.describe('Navigation', () => {
  test('should navigate to main pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to About via header nav
    const aboutLink = page.locator('header a[href="/about"]').first();
    await aboutLink.click();
    await expect(page).toHaveURL(/\/about/);
    
    // Navigate to Contact
    const contactLink = page.locator('header a[href="/contact"]').first();
    await contactLink.click();
    await expect(page).toHaveURL(/\/contact/);
    
    // Navigate to Donate
    const donateLink = page.locator('header a[href="/donate"]').first();
    await donateLink.click();
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
    
    // Look for any button in the header that could be a menu toggle
    const menuButton = page.locator('header button').first();
    await expect(menuButton).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    await page.goto('/');
    
    const menuButton = page.locator('header button').first();
    
    // Open menu
    await menuButton.click();
    
    // Wait for menu animation
    await page.waitForTimeout(500);
    
    // Check for expanded state or visible menu links
    const mobileMenu = page.locator('#mobile-menu, [role="menu"]').first();
    const isMenuVisible = await mobileMenu.isVisible().catch(() => false);
    
    // Menu should be visible or button should be expanded
    if (!isMenuVisible) {
      const ariaExpanded = await menuButton.getAttribute('aria-expanded');
      expect(ariaExpanded).toBe('true');
    }
  });

  test('should navigate from mobile menu', async ({ page }) => {
    await page.goto('/');
    
    const menuButton = page.locator('header button').first();
    await menuButton.click();
    
    // Wait for menu animation
    await page.waitForTimeout(500);
    
    // Click on a navigation link (visible in mobile menu)
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
