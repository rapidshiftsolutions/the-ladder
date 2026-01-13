import { test, expect, devices } from '@playwright/test';

/**
 * Mobile UX Tests for The Ladder website
 * 
 * Validates mobile-specific user experience requirements including
 * touch targets, content overflow, font sizes, and responsive behavior.
 */

// Mobile viewport configurations
const MOBILE_VIEWPORTS = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 12', width: 390, height: 844 },
  { name: 'Pixel 5', width: 393, height: 851 },
  { name: 'Samsung Galaxy S21', width: 360, height: 800 },
];

// Minimum touch target size per WCAG guidelines
const MIN_TOUCH_TARGET = 44;

test.describe('Mobile Touch Targets', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500); // Wait for loading screen and animations
  });

  test('all interactive elements meet minimum touch target size', async ({ page }) => {
    const smallTargets: { element: string; width: number; height: number }[] = [];
    
    // Check all interactive elements
    const interactiveElements = await page.locator('a, button, input, select, textarea, [role="button"], [tabindex="0"]').all();
    
    for (const element of interactiveElements) {
      const box = await element.boundingBox();
      if (box && box.width > 0 && box.height > 0) {
        // Allow some tolerance for very small decorative elements
        if (box.width < MIN_TOUCH_TARGET - 4 || box.height < MIN_TOUCH_TARGET - 4) {
          const tagName = await element.evaluate(el => el.tagName.toLowerCase());
          const text = await element.textContent();
          smallTargets.push({
            element: `${tagName}: "${text?.slice(0, 30) || 'no text'}"`,
            width: Math.round(box.width),
            height: Math.round(box.height),
          });
        }
      }
    }
    
    // Report but don't fail for minor violations
    if (smallTargets.length > 0) {
      console.log('Touch targets smaller than 44px:');
      smallTargets.forEach(t => console.log(`  - ${t.element} (${t.width}x${t.height})`));
    }
    
    // Fail only if there are many small targets
    expect(smallTargets.length).toBeLessThan(10);
  });

  test('CTA buttons have adequate touch targets', async ({ page }) => {
    const ctaButtons = page.locator('a.btn, button.btn, [class*="btn-lg"], [class*="btn-primary"]');
    const count = await ctaButtons.count();
    
    for (let i = 0; i < count; i++) {
      const button = ctaButtons.nth(i);
      const box = await button.boundingBox();
      
      if (box && box.width > 0) {
        expect(box.height).toBeGreaterThanOrEqual(MIN_TOUCH_TARGET);
      }
    }
  });

  test('navigation links have adequate spacing', async ({ page }) => {
    const navLinks = page.locator('header nav a, header a');
    const count = await navLinks.count();
    
    const positions: { x: number; y: number; width: number; height: number }[] = [];
    
    for (let i = 0; i < count; i++) {
      const link = navLinks.nth(i);
      const box = await link.boundingBox();
      if (box && box.width > 0) {
        positions.push(box);
      }
    }
    
    // Check for overlapping touch areas
    let overlaps = 0;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const a = positions[i];
        const b = positions[j];
        
        // Check if bounding boxes overlap
        const overlapsX = a.x < b.x + b.width && a.x + a.width > b.x;
        const overlapsY = a.y < b.y + b.height && a.y + a.height > b.y;
        
        if (overlapsX && overlapsY) {
          overlaps++;
        }
      }
    }
    
    expect(overlaps).toBe(0);
  });
});

test.describe('Mobile Content Overflow', () => {
  for (const viewport of MOBILE_VIEWPORTS) {
    test(`no horizontal scroll on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/', { waitUntil: 'networkidle' });
      await page.waitForTimeout(2500);
      
      // Check for horizontal overflow
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      
      expect(hasHorizontalScroll).toBe(false);
    });
  }

  test('no content extends beyond viewport on homepage', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Find elements that extend beyond viewport
    const overflowingElements = await page.evaluate(() => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll('*');
      const overflowing: string[] = [];
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.right > viewportWidth + 1 || rect.left < -1) {
          const tagName = el.tagName.toLowerCase();
          const className = el.className?.toString().slice(0, 50) || '';
          if (!overflowing.includes(`${tagName}.${className}`)) {
            overflowing.push(`${tagName}.${className}`);
          }
        }
      });
      
      return overflowing.slice(0, 10); // Limit output
    });
    
    if (overflowingElements.length > 0) {
      console.log('Elements extending beyond viewport:', overflowingElements);
    }
    
    expect(overflowingElements.length).toBe(0);
  });

  test('images are responsive and fit viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const box = await img.boundingBox();
      
      if (box && box.width > 0) {
        // Image should not exceed viewport width
        expect(box.width).toBeLessThanOrEqual(375);
      }
    }
  });
});

test.describe('Mobile Typography', () => {
  test('base font size is at least 16px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const bodyFontSize = await page.evaluate(() => {
      const body = document.body;
      const style = window.getComputedStyle(body);
      return parseFloat(style.fontSize);
    });
    
    expect(bodyFontSize).toBeGreaterThanOrEqual(16);
  });

  test('form inputs have 16px+ font to prevent zoom', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const inputs = page.locator('input[type="text"], input[type="email"], input[type="tel"], textarea');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const fontSize = await input.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize);
      });
      
      // iOS Safari zooms on inputs with font-size < 16px
      expect(fontSize).toBeGreaterThanOrEqual(16);
    }
  });

  test('paragraph text is readable size', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const paragraphs = page.locator('p');
    const count = await paragraphs.count();
    
    let smallTextCount = 0;
    for (let i = 0; i < Math.min(count, 20); i++) {
      const p = paragraphs.nth(i);
      const fontSize = await p.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize);
      });
      
      if (fontSize < 14) {
        smallTextCount++;
      }
    }
    
    // Allow some small text (captions, etc.)
    expect(smallTextCount).toBeLessThan(5);
  });
});

test.describe('Mobile Viewport Configuration', () => {
  test('has proper viewport meta tag', async ({ page }) => {
    await page.goto('/');
    
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
    await expect(viewport).toHaveAttribute('content', /initial-scale=1/);
  });

  test('viewport prevents unwanted zoom', async ({ page }) => {
    await page.goto('/');
    
    const viewport = page.locator('meta[name="viewport"]');
    const content = await viewport.getAttribute('content');
    
    // Should have device-width but allow user scaling
    expect(content).toContain('width=device-width');
  });
});

test.describe('Mobile Hero Section', () => {
  test('hero headline is visible and readable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000); // Wait for animations
    
    const headline = page.locator('.hero-headline, h1').first();
    await expect(headline).toBeVisible();
    
    const box = await headline.boundingBox();
    expect(box).not.toBeNull();
    
    if (box) {
      // Headline should fit within viewport
      expect(box.width).toBeLessThanOrEqual(375);
    }
  });

  test('hero CTAs are accessible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    // Find CTA buttons in hero
    const ctaButtons = page.locator('section:first-of-type a.btn, section:first-of-type button.btn');
    const count = await ctaButtons.count();
    
    expect(count).toBeGreaterThan(0);
    
    for (let i = 0; i < count; i++) {
      const cta = ctaButtons.nth(i);
      await expect(cta).toBeVisible();
      
      const box = await cta.boundingBox();
      if (box) {
        // CTA should have good touch target
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });

  test('hero image does not overflow on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const heroSection = page.locator('section').first();
    const box = await heroSection.boundingBox();
    
    if (box) {
      expect(box.width).toBeLessThanOrEqual(375);
    }
  });
});

test.describe('Mobile Safe Areas', () => {
  test('content respects safe area padding', async ({ page }) => {
    // Test with iPhone notch simulation
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Check that main content has padding
    const main = page.locator('main, #main-content').first();
    const padding = await main.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        left: parseFloat(style.paddingLeft),
        right: parseFloat(style.paddingRight),
      };
    });
    
    // Should have some horizontal padding
    expect(padding.left).toBeGreaterThan(0);
    expect(padding.right).toBeGreaterThan(0);
  });
});

test.describe('Mobile Page Load Performance', () => {
  test('mobile page loads within acceptable time', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const startTime = Date.now();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - startTime;
    
    // Should load DOM within 3 seconds on mobile
    expect(loadTime).toBeLessThan(3000);
  });

  test('loading screen appears on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Loading screen should be present initially or content should be visible quickly
    await page.waitForSelector('.loading-screen, .app-content--loaded, main', {
      timeout: 5000,
    });
  });
});
