import { test, expect } from '@playwright/test';

/**
 * Mobile Visual Tests for The Ladder website
 * 
 * Captures and compares screenshots on mobile viewports
 * to detect visual regressions and ensure mobile design quality.
 */

// Mobile device configurations
const MOBILE_DEVICES = [
  { name: 'iphone-se', width: 375, height: 667 },
  { name: 'iphone-12', width: 390, height: 844 },
  { name: 'pixel-5', width: 393, height: 851 },
  { name: 'galaxy-s21', width: 360, height: 800 },
];

test.describe('Mobile Homepage Visual', () => {
  for (const device of MOBILE_DEVICES) {
    test(`homepage renders correctly on ${device.name}`, async ({ page }) => {
      await page.setViewportSize({ width: device.width, height: device.height });
      await page.goto('/', { waitUntil: 'networkidle' });
      
      // Wait for loading screen and animations
      await page.waitForTimeout(3500);
      
      await expect(page).toHaveScreenshot(`homepage-${device.name}.png`, {
        fullPage: true,
        maxDiffPixels: 200,
        timeout: 10000,
      });
    });
  }
});

test.describe('Mobile Hero Visual', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3500);
  });

  test('hero section above fold - iPhone SE', async ({ page }) => {
    // Screenshot of just the viewport (above the fold)
    await expect(page).toHaveScreenshot('hero-mobile-above-fold.png', {
      maxDiffPixels: 150,
    });
  });

  test('hero headline typography is attractive', async ({ page }) => {
    const headline = page.locator('.hero-headline, h1').first();
    
    await expect(headline).toHaveScreenshot('hero-headline-mobile.png', {
      maxDiffPixels: 50,
    });
  });

  test('hero CTA buttons are visually prominent', async ({ page }) => {
    const ctaContainer = page.locator('section:first-of-type .btn').first().locator('..');
    
    if (await ctaContainer.isVisible().catch(() => false)) {
      await expect(ctaContainer).toHaveScreenshot('hero-cta-mobile.png', {
        maxDiffPixels: 50,
      });
    }
  });
});

test.describe('Mobile Navigation Visual', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
  });

  test('mobile header appearance', async ({ page }) => {
    const header = page.locator('header').first();
    
    await expect(header).toHaveScreenshot('mobile-header.png', {
      maxDiffPixels: 50,
    });
  });

  test('mobile menu open state', async ({ page }) => {
    const menuButton = page.locator(
      'button[aria-label*="menu" i], ' +
      'header button:has(svg)'
    ).first();
    
    if (await menuButton.isVisible().catch(() => false)) {
      await menuButton.click();
      await page.waitForTimeout(500);
      
      await expect(page).toHaveScreenshot('mobile-menu-open.png', {
        maxDiffPixels: 100,
      });
    }
  });

  test('header scrolled state', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(500);
    
    const header = page.locator('header').first();
    
    await expect(header).toHaveScreenshot('mobile-header-scrolled.png', {
      maxDiffPixels: 50,
    });
  });
});

test.describe('Mobile Content Sections Visual', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
  });

  test('stats section on mobile', async ({ page }) => {
    const statsSection = page.locator('.grid.grid-cols-2, [class*="stats"]').first();
    
    if (await statsSection.isVisible().catch(() => false)) {
      await statsSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      
      await expect(statsSection).toHaveScreenshot('mobile-stats-section.png', {
        maxDiffPixels: 100,
      });
    }
  });

  test('footer on mobile', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(footer).toHaveScreenshot('mobile-footer.png', {
      maxDiffPixels: 100,
    });
  });
});

test.describe('Mobile Form Visual', () => {
  test('contact form on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const form = page.locator('form').first();
    
    if (await form.isVisible().catch(() => false)) {
      await expect(form).toHaveScreenshot('mobile-contact-form.png', {
        maxDiffPixels: 100,
      });
    }
  });

  test('form input focused state', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const input = page.locator('input[type="text"], input[type="email"]').first();
    
    if (await input.isVisible().catch(() => false)) {
      await input.focus();
      await page.waitForTimeout(200);
      
      await expect(input).toHaveScreenshot('mobile-input-focused.png', {
        maxDiffPixels: 30,
      });
    }
  });
});

test.describe('Mobile Loading Screen Visual', () => {
  test('loading screen appearance on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Slow down network to capture loading screen
    await page.route('**/*', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 100));
      await route.continue();
    });
    
    await page.goto('/');
    
    // Try to capture loading screen
    const loadingScreen = page.locator('.loading-screen');
    
    if (await loadingScreen.isVisible({ timeout: 1000 }).catch(() => false)) {
      await expect(loadingScreen).toHaveScreenshot('mobile-loading-screen.png', {
        maxDiffPixels: 100,
      });
    }
  });
});

test.describe('Mobile Dark Elements Visual', () => {
  test('dark section rendering on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Find sections with dark backgrounds
    const darkSection = page.locator('section[class*="bg-"], section[class*="dark"]').first();
    
    if (await darkSection.isVisible().catch(() => false)) {
      await darkSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      
      await expect(darkSection).toHaveScreenshot('mobile-dark-section.png', {
        maxDiffPixels: 100,
      });
    }
  });
});

test.describe('Mobile Page Screenshots', () => {
  const pages = [
    { path: '/about', name: 'about' },
    { path: '/donate', name: 'donate' },
    { path: '/how-we-help', name: 'how-we-help' },
  ];

  for (const pageInfo of pages) {
    test(`${pageInfo.name} page on mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2500);
      
      await expect(page).toHaveScreenshot(`mobile-${pageInfo.name}.png`, {
        fullPage: true,
        maxDiffPixels: 250,
      });
    });
  }
});

test.describe('Mobile Touch States Visual', () => {
  test('button hover/active states on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    const button = page.locator('a.btn, button.btn').first();
    
    if (await button.isVisible().catch(() => false)) {
      // Normal state
      await expect(button).toHaveScreenshot('mobile-button-normal.png', {
        maxDiffPixels: 30,
      });
      
      // Hover/focus state
      await button.hover();
      await page.waitForTimeout(200);
      
      await expect(button).toHaveScreenshot('mobile-button-hover.png', {
        maxDiffPixels: 30,
      });
    }
  });
});

test.describe('Mobile Landscape Visual', () => {
  test('homepage in landscape mode', async ({ page }) => {
    // Landscape iPhone
    await page.setViewportSize({ width: 667, height: 375 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    await expect(page).toHaveScreenshot('mobile-landscape-homepage.png', {
      fullPage: false, // Just viewport
      maxDiffPixels: 200,
    });
  });

  test('hero in landscape adapts properly', async ({ page }) => {
    await page.setViewportSize({ width: 667, height: 375 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    const hero = page.locator('section').first();
    const box = await hero.boundingBox();
    
    // Hero should still be visible and reasonable size in landscape
    expect(box).not.toBeNull();
    if (box) {
      expect(box.height).toBeGreaterThan(200);
    }
  });
});

test.describe('Mobile Accessibility Visual', () => {
  test('focus indicators visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Tab to first focusable element
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    
    const focusedElement = page.locator(':focus');
    
    if (await focusedElement.isVisible().catch(() => false)) {
      await expect(focusedElement).toHaveScreenshot('mobile-focus-indicator.png', {
        maxDiffPixels: 50,
      });
    }
  });
});

test.describe('Mobile Small Screen Edge Cases', () => {
  test('very small screen (320px) rendering', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 }); // iPhone 5/SE size
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    // Check for horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    
    expect(hasOverflow).toBe(false);
    
    await expect(page).toHaveScreenshot('mobile-320px-homepage.png', {
      fullPage: false,
      maxDiffPixels: 200,
    });
  });

  test('text remains readable at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    const headline = page.locator('.hero-headline, h1').first();
    
    if (await headline.isVisible().catch(() => false)) {
      const box = await headline.boundingBox();
      
      // Text should fit within viewport
      if (box) {
        expect(box.width).toBeLessThanOrEqual(320);
      }
    }
  });
});
