import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for The Ladder website
 * 
 * These tests capture screenshots and compare them against baselines
 * to detect unintended visual changes.
 */

test.describe('Visual Regression - Homepage', () => {
  test.beforeEach(async ({ page }) => {
    // Wait for fonts and content to load
    await page.goto('/', { waitUntil: 'networkidle' });
    // Give loading screen time to fade out
    await page.waitForTimeout(1000);
  });

  test('homepage full page screenshot - desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.waitForLoadState('networkidle');
    
    // Wait for any animations to complete
    await page.waitForTimeout(500);
    
    await expect(page).toHaveScreenshot('homepage-desktop.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });

  test('homepage full page screenshot - tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    
    await expect(page).toHaveScreenshot('homepage-tablet.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });

  test('homepage full page screenshot - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });
});

test.describe('Visual Regression - Above the Fold', () => {
  test('hero section renders correctly - desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    // Screenshot of just the viewport (above the fold)
    await expect(page).toHaveScreenshot('hero-desktop.png', {
      maxDiffPixels: 100,
    });
  });

  test('hero section renders correctly - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('hero-mobile.png', {
      maxDiffPixels: 100,
    });
  });
});

test.describe('Visual Regression - Navigation', () => {
  test('header navigation - desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    const header = page.locator('header').first();
    await expect(header).toHaveScreenshot('header-desktop.png', {
      maxDiffPixels: 50,
    });
  });

  test('mobile navigation menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    // Find and click mobile menu button
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], [data-testid="mobile-menu"]').first();
    
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(500); // Wait for menu animation
      
      await expect(page).toHaveScreenshot('mobile-menu-open.png', {
        maxDiffPixels: 50,
      });
    }
  });

  test('footer renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    const footer = page.getByRole('contentinfo');
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(footer).toHaveScreenshot('footer-desktop.png', {
      maxDiffPixels: 50,
    });
  });
});

test.describe('Visual Regression - Key Pages', () => {
  const pages = [
    { path: '/about', name: 'about' },
    { path: '/donate', name: 'donate' },
    { path: '/contact', name: 'contact' },
    { path: '/how-we-help', name: 'how-we-help' },
  ];

  for (const { path, name } of pages) {
    test(`${name} page renders correctly`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto(path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      
      await expect(page).toHaveScreenshot(`${name}-page.png`, {
        fullPage: true,
        maxDiffPixels: 150,
      });
    });
  }
});

test.describe('Visual Regression - Interactive Elements', () => {
  test('button hover states', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    // Find primary CTA button
    const ctaButton = page.locator('a[href*="donate"], button:has-text("Donate")').first();
    
    if (await ctaButton.isVisible()) {
      // Screenshot before hover
      await expect(ctaButton).toHaveScreenshot('cta-button-normal.png', {
        maxDiffPixels: 20,
      });
      
      // Hover and screenshot
      await ctaButton.hover();
      await page.waitForTimeout(200);
      
      await expect(ctaButton).toHaveScreenshot('cta-button-hover.png', {
        maxDiffPixels: 20,
      });
    }
  });

  test('form field focus states', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    const firstInput = page.locator('input[type="text"], input[type="email"]').first();
    
    if (await firstInput.isVisible()) {
      // Screenshot before focus
      await expect(firstInput).toHaveScreenshot('input-normal.png', {
        maxDiffPixels: 20,
      });
      
      // Focus and screenshot
      await firstInput.focus();
      await page.waitForTimeout(200);
      
      await expect(firstInput).toHaveScreenshot('input-focused.png', {
        maxDiffPixels: 20,
      });
    }
  });
});

test.describe('Visual Regression - Error States', () => {
  test('404 page renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/non-existent-page-12345', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    
    await expect(page).toHaveScreenshot('404-page.png', {
      maxDiffPixels: 100,
    });
  });
});

test.describe('Visual Regression - Accessibility', () => {
  test('focus indicators are visible', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    // Tab through first few focusable elements
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toHaveScreenshot('focus-indicator.png', {
      maxDiffPixels: 30,
    });
  });

  test('skip to main content link appears on focus', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    // The first tab should reveal skip link
    await page.keyboard.press('Tab');
    
    const skipLink = page.locator('.skip-link, a[href="#main-content"]').first();
    
    if (await skipLink.isVisible()) {
      await expect(skipLink).toHaveScreenshot('skip-link.png', {
        maxDiffPixels: 20,
      });
    }
  });
});
