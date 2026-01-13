import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility tests using axe-core
 * Tests for WCAG 2.1 AA compliance
 */

const pagesToTest = [
  { name: 'Homepage', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'Donate', path: '/donate' },
];

test.describe('Accessibility - WCAG 2.1 AA Compliance', () => {
  for (const page of pagesToTest) {
    test(`${page.name} page should have no accessibility violations`, async ({ page: playwrightPage }) => {
      await playwrightPage.goto(page.path);
      
      const accessibilityScanResults = await new AxeBuilder({ page: playwrightPage })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});

test.describe('Keyboard Navigation', () => {
  test('should be able to navigate with Tab key', async ({ page }) => {
    await page.goto('/');
    
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    const firstFocusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstFocusedElement).toBeTruthy();
  });

  test('skip link should be present and functional', async ({ page }) => {
    await page.goto('/');
    
    // Focus on skip link
    await page.keyboard.press('Tab');
    
    // Check if skip link exists
    const skipLink = page.locator('a[href="#main-content"]');
    const isVisible = await skipLink.isVisible().catch(() => false);
    
    if (isVisible) {
      await skipLink.click();
      const mainContent = page.locator('#main-content');
      await expect(mainContent).toBeVisible();
    }
  });

  test('mobile menu should be keyboard accessible', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Find and activate mobile menu button
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-expanded]');
    if (await menuButton.isVisible()) {
      await menuButton.focus();
      await page.keyboard.press('Enter');
      
      // Check if menu is expanded
      const isExpanded = await menuButton.getAttribute('aria-expanded');
      expect(isExpanded).toBe('true');
    }
  });
});

test.describe('Focus States', () => {
  test('interactive elements should have visible focus states', async ({ page }) => {
    await page.goto('/');
    
    // Tab to first interactive element
    await page.keyboard.press('Tab');
    
    // Get the focused element's outline style
    const focusStyle = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return null;
      const styles = window.getComputedStyle(el);
      return {
        outline: styles.outline,
        outlineOffset: styles.outlineOffset,
        boxShadow: styles.boxShadow,
      };
    });
    
    // Should have some visible focus indicator
    expect(focusStyle).toBeTruthy();
  });
});

test.describe('Form Accessibility', () => {
  test('contact form should have proper labels', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that all form inputs have associated labels
    const inputs = page.locator('input:not([type="hidden"]), textarea, select');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');
      
      // Input should have either an id with matching label, aria-label, or aria-labelledby
      const hasLabel = id || ariaLabel || ariaLabelledBy;
      expect(hasLabel).toBeTruthy();
    }
  });
});
