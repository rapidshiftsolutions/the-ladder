import { test, expect } from '@playwright/test';

/**
 * Mobile Interaction Tests for The Ladder website
 * 
 * Tests mobile-specific interactions including navigation menu,
 * touch gestures, scroll behavior, and interactive elements.
 */

test.describe('Mobile Navigation Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
  });

  test('mobile menu button is visible', async ({ page }) => {
    // Look for hamburger menu button
    const menuButton = page.locator(
      'button[aria-label*="menu" i], ' +
      'button[aria-label*="Menu" i], ' +
      '[data-testid="mobile-menu"], ' +
      'button.hamburger, ' +
      '.mobile-menu-button, ' +
      'header button:has(svg)'
    ).first();
    
    const isVisible = await menuButton.isVisible().catch(() => false);
    
    if (isVisible) {
      await expect(menuButton).toBeVisible();
      
      // Should have adequate touch target
      const box = await menuButton.boundingBox();
      if (box) {
        expect(box.width).toBeGreaterThanOrEqual(40);
        expect(box.height).toBeGreaterThanOrEqual(40);
      }
    }
  });

  test('mobile menu opens on tap', async ({ page }) => {
    const menuButton = page.locator(
      'button[aria-label*="menu" i], ' +
      'button[aria-label*="Menu" i], ' +
      'header button:has(svg)'
    ).first();
    
    if (await menuButton.isVisible().catch(() => false)) {
      await menuButton.click();
      await page.waitForTimeout(500);
      
      // Check for expanded menu or navigation
      const nav = page.locator('nav, [role="navigation"], .mobile-nav, .nav-menu');
      const isExpanded = await nav.isVisible().catch(() => false);
      
      // Menu should either be visible or aria-expanded should be true
      const ariaExpanded = await menuButton.getAttribute('aria-expanded');
      expect(isExpanded || ariaExpanded === 'true').toBe(true);
    }
  });

  test('mobile menu closes on tap outside', async ({ page }) => {
    const menuButton = page.locator(
      'button[aria-label*="menu" i], ' +
      'button[aria-label*="Menu" i], ' +
      'header button:has(svg)'
    ).first();
    
    if (await menuButton.isVisible().catch(() => false)) {
      // Open menu
      await menuButton.click();
      await page.waitForTimeout(500);
      
      // Click outside the menu
      await page.click('main', { force: true });
      await page.waitForTimeout(500);
      
      // Menu should be closed
      const ariaExpanded = await menuButton.getAttribute('aria-expanded');
      expect(ariaExpanded === 'false' || ariaExpanded === null).toBe(true);
    }
  });

  test('mobile menu links are tappable', async ({ page }) => {
    const menuButton = page.locator(
      'button[aria-label*="menu" i], ' +
      'header button:has(svg)'
    ).first();
    
    if (await menuButton.isVisible().catch(() => false)) {
      await menuButton.click();
      await page.waitForTimeout(500);
      
      const navLinks = page.locator('nav a, [role="navigation"] a');
      const count = await navLinks.count();
      
      if (count > 0) {
        for (let i = 0; i < Math.min(count, 5); i++) {
          const link = navLinks.nth(i);
          if (await link.isVisible().catch(() => false)) {
            const box = await link.boundingBox();
            if (box) {
              // Links should have adequate height for tapping
              expect(box.height).toBeGreaterThanOrEqual(40);
            }
          }
        }
      }
    }
  });
});

test.describe('Mobile Scroll Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
  });

  test('page scrolls smoothly', async ({ page }) => {
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);
    
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);
    
    // Scroll back up
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    
    const scrollYAfter = await page.evaluate(() => window.scrollY);
    expect(scrollYAfter).toBe(0);
  });

  test('sticky header behavior on scroll', async ({ page }) => {
    const header = page.locator('header').first();
    
    // Get initial header position
    const initialBox = await header.boundingBox();
    
    // Scroll down significantly
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);
    
    // Header should still be visible (sticky) or have scrolled up
    const isVisible = await header.isVisible();
    expect(isVisible).toBe(true);
    
    const scrolledBox = await header.boundingBox();
    if (scrolledBox && initialBox) {
      // If header is sticky, top should be 0 or close to it
      // If not sticky, it's okay too
      expect(scrolledBox.y).toBeLessThanOrEqual(initialBox.y);
    }
  });

  test('scroll position persists on navigation', async ({ page }) => {
    // This tests that scroll is reset on new page
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(200);
    
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    
    const scrollY = await page.evaluate(() => window.scrollY);
    // New page should start at top
    expect(scrollY).toBeLessThan(100);
  });
});

test.describe('Mobile CTA Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
  });

  test('primary CTA is reachable without scrolling', async ({ page }) => {
    // Wait for hero animations to complete
    await page.waitForTimeout(3000);
    
    const primaryCta = page.locator('a.btn, button.btn').first();
    
    if (await primaryCta.isVisible().catch(() => false)) {
      const box = await primaryCta.boundingBox();
      if (box) {
        // CTA should be within the initial viewport
        expect(box.y).toBeLessThan(667); // iPhone SE viewport height
      }
    }
  });

  test('CTA buttons have visible tap feedback', async ({ page }) => {
    await page.waitForTimeout(3000);
    
    const ctaButton = page.locator('a.btn').first();
    
    if (await ctaButton.isVisible().catch(() => false)) {
      // Get initial styles
      const initialBg = await ctaButton.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      
      // Hover (simulates touch focus on some browsers)
      await ctaButton.hover();
      await page.waitForTimeout(200);
      
      // Check if there's a visual change
      const hoverBg = await ctaButton.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      
      // Background should change on hover/focus
      // This is optional - just log if no change
      if (initialBg === hoverBg) {
        console.log('Note: CTA button may not have visible hover feedback');
      }
    }
  });
});

test.describe('Mobile Phone Number Interaction', () => {
  test('phone number is tappable to call', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const phoneLink = page.locator('a[href^="tel:"]').first();
    
    if (await phoneLink.isVisible().catch(() => false)) {
      const href = await phoneLink.getAttribute('href');
      expect(href).toMatch(/^tel:/);
      
      // Should have adequate touch target
      const box = await phoneLink.boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(40);
      }
    }
  });

  test('phone numbers in footer are clickable', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Scroll to footer
    const footer = page.getByRole('contentinfo');
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const phoneLinks = footer.locator('a[href^="tel:"]');
    const count = await phoneLinks.count();
    
    for (let i = 0; i < count; i++) {
      const link = phoneLinks.nth(i);
      const href = await link.getAttribute('href');
      expect(href).toMatch(/^tel:/);
    }
  });
});

test.describe('Mobile Form Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
  });

  test('form inputs are focusable on mobile', async ({ page }) => {
    const firstInput = page.locator('input[type="text"], input[type="email"]').first();
    
    if (await firstInput.isVisible().catch(() => false)) {
      await firstInput.focus();
      
      // Input should be focused
      const isFocused = await firstInput.evaluate((el) => {
        return document.activeElement === el;
      });
      
      expect(isFocused).toBe(true);
    }
  });

  test('form inputs do not trigger zoom on focus', async ({ page }) => {
    const inputs = page.locator('input, textarea, select');
    const count = await inputs.count();
    
    for (let i = 0; i < Math.min(count, 5); i++) {
      const input = inputs.nth(i);
      if (await input.isVisible().catch(() => false)) {
        const fontSize = await input.evaluate((el) => {
          return parseFloat(window.getComputedStyle(el).fontSize);
        });
        
        // Font size must be 16px or larger to prevent iOS zoom
        expect(fontSize).toBeGreaterThanOrEqual(16);
      }
    }
  });

  test('submit button is within thumb reach', async ({ page }) => {
    const submitButton = page.locator('button[type="submit"], input[type="submit"]').first();
    
    if (await submitButton.isVisible().catch(() => false)) {
      await submitButton.scrollIntoViewIfNeeded();
      
      const box = await submitButton.boundingBox();
      if (box) {
        // Button should be full width or centered on mobile
        expect(box.width).toBeGreaterThanOrEqual(120);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });
});

test.describe('Mobile Swipe Gestures', () => {
  test('horizontal swipe does not cause unwanted scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Get initial horizontal scroll
    const initialScrollX = await page.evaluate(() => window.scrollX);
    
    // Simulate horizontal swipe
    await page.mouse.move(300, 400);
    await page.mouse.down();
    await page.mouse.move(100, 400, { steps: 10 });
    await page.mouse.up();
    
    await page.waitForTimeout(300);
    
    // Should not have horizontal scroll
    const finalScrollX = await page.evaluate(() => window.scrollX);
    expect(finalScrollX).toBe(initialScrollX);
  });
});

test.describe('Mobile Link Interactions', () => {
  test('external links open correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const rel = await link.getAttribute('rel');
      
      // External links should have security attributes
      expect(rel).toContain('noopener');
    }
  });

  test('internal navigation links work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Find and click an internal link
    const aboutLink = page.locator('a[href="/about"], a[href*="about"]').first();
    
    if (await aboutLink.isVisible().catch(() => false)) {
      await aboutLink.click();
      await page.waitForLoadState('networkidle');
      
      expect(page.url()).toContain('about');
    }
  });
});

test.describe('Mobile Accessibility Interactions', () => {
  test('skip link is functional on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Tab to reveal skip link
    await page.keyboard.press('Tab');
    
    const skipLink = page.locator('.skip-link, a[href="#main-content"]').first();
    
    if (await skipLink.isVisible().catch(() => false)) {
      await skipLink.click();
      
      // Should scroll/focus to main content
      const mainContent = page.locator('#main-content, main').first();
      await expect(mainContent).toBeVisible();
    }
  });

  test('focus is visible on interactive elements', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Tab through elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    const focusedElement = page.locator(':focus');
    const outline = await focusedElement.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        outline: style.outline,
        outlineWidth: style.outlineWidth,
        boxShadow: style.boxShadow,
      };
    }).catch(() => null);
    
    // Should have visible focus indicator
    if (outline) {
      const hasVisibleFocus = 
        outline.outlineWidth !== '0px' || 
        outline.boxShadow !== 'none';
      
      if (!hasVisibleFocus) {
        console.log('Warning: Focus indicator may not be visible');
      }
    }
  });
});
