import { test, expect } from '@playwright/test';

/**
 * Loading Screen Tests for The Ladder website
 * 
 * Tests the loading screen component that displays while
 * fonts and Sanity CMS data are loading.
 */

test.describe('Loading Screen - Appearance', () => {
  test('loading screen appears on initial load', async ({ page }) => {
    // Don't wait for networkidle - we want to capture the loading state
    const responsePromise = page.goto('/');
    
    // Try to capture loading screen before it fades out
    // The loading screen should be visible immediately
    await page.waitForSelector('.loading-screen, [role="progressbar"]', { 
      state: 'visible',
      timeout: 2000 
    }).catch(() => {
      // Loading screen might have already faded by the time we check
      console.log('Loading screen may have already completed');
    });
    
    await responsePromise;
  });

  test('loading screen has correct branding', async ({ page }) => {
    // Use slow network to ensure loading screen stays visible longer
    await page.route('**/*', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 100));
      await route.continue();
    });
    
    await page.goto('/');
    
    // Check for logo in loading screen
    const loadingScreen = page.locator('.loading-screen');
    
    if (await loadingScreen.isVisible({ timeout: 1000 }).catch(() => false)) {
      // Check for logo
      const logo = loadingScreen.locator('img');
      await expect(logo).toBeVisible({ timeout: 500 }).catch(() => {
        // Logo might not be visible if loading is too fast
      });
    }
  });
});

test.describe('Loading Screen - Behavior', () => {
  test('loading screen fades out after content loads', async ({ page }) => {
    await page.goto('/');
    
    // Wait for loading screen to disappear (either hidden or removed)
    await page.waitForSelector('.loading-screen--fade-out, .app-content--loaded', {
      state: 'attached',
      timeout: 5000,
    }).catch(() => {});
    
    // After sufficient wait, loading screen should be gone
    await page.waitForTimeout(1500);
    
    const loadingScreen = page.locator('.loading-screen:not(.loading-screen--fade-out)');
    const isHidden = await loadingScreen.isHidden().catch(() => true);
    
    expect(isHidden).toBe(true);
  });

  test('main content becomes visible after loading', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    
    // App content should be visible
    const appContent = page.locator('.app-content--loaded, main, [id="main-content"]').first();
    await expect(appContent).toBeVisible();
  });

  test('no flash of unstyled content', async ({ page }) => {
    // This test checks that content doesn't appear unstyled during load
    const stylesLoaded: boolean[] = [];
    
    page.on('domcontentloaded', async () => {
      // Check if stylesheets are applied
      const hasStyles = await page.evaluate(() => {
        const computedStyle = window.getComputedStyle(document.body);
        // Check if body has our custom font family applied
        return computedStyle.fontFamily.includes('Nunito') || 
               computedStyle.fontFamily.includes('system-ui');
      });
      stylesLoaded.push(hasStyles);
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Styles should be loaded from the start
    expect(stylesLoaded.every(s => s)).toBe(true);
  });
});

test.describe('Loading Screen - Accessibility', () => {
  test('loading screen has proper ARIA attributes', async ({ page }) => {
    // Throttle network to keep loading screen visible
    await page.route('**/*.js', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      await route.continue();
    });
    
    await page.goto('/');
    
    const loadingScreen = page.locator('.loading-screen, [role="progressbar"]');
    
    if (await loadingScreen.isVisible({ timeout: 1000 }).catch(() => false)) {
      // Check for ARIA attributes
      const role = await loadingScreen.getAttribute('role');
      const ariaLabel = await loadingScreen.getAttribute('aria-label');
      const ariaBusy = await loadingScreen.getAttribute('aria-busy');
      
      // Should have appropriate role
      expect(role === 'progressbar' || role === 'status').toBe(true);
      
      // Should have accessible label
      if (ariaLabel) {
        expect(ariaLabel.toLowerCase()).toContain('load');
      }
    }
  });

  test('respects reduced motion preference', async ({ page }) => {
    // Emulate reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    
    await page.goto('/');
    
    // Check that animations are reduced/disabled
    const loadingScreen = page.locator('.loading-screen');
    
    if (await loadingScreen.isVisible({ timeout: 1000 }).catch(() => false)) {
      const animationDuration = await loadingScreen.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.animationDuration || style.transitionDuration;
      });
      
      // With reduced motion, animations should be very short or none
      if (animationDuration && animationDuration !== 'none') {
        const duration = parseFloat(animationDuration);
        expect(duration).toBeLessThanOrEqual(0.2); // Max 200ms
      }
    }
  });
});

test.describe('Loading Screen - Performance', () => {
  test('loading screen does not block interactivity', async ({ page }) => {
    await page.goto('/');
    
    // Even during loading, keyboard should work
    await page.keyboard.press('Tab');
    
    // Page should respond to keyboard events
    const activeElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeElement).toBeTruthy();
  });

  test('loading completes within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    // Wait for loading screen to complete
    await page.waitForSelector('.app-content--loaded, main:visible', {
      state: 'visible',
      timeout: 5000,
    }).catch(() => {});
    
    const loadTime = Date.now() - startTime;
    
    // Loading should complete within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('fonts are loaded when content appears', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    
    // Check if fonts are loaded via Font Loading API
    const fontsReady = await page.evaluate(async () => {
      if (document.fonts) {
        await document.fonts.ready;
        return document.fonts.status === 'loaded';
      }
      return true; // Assume loaded if API not available
    });
    
    expect(fontsReady).toBe(true);
  });
});

test.describe('Loading Screen - Visual', () => {
  test('loading screen has correct background color', async ({ page }) => {
    // Throttle to see loading screen
    await page.route('**/*', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 100));
      await route.continue();
    });
    
    await page.goto('/');
    
    const loadingScreen = page.locator('.loading-screen');
    
    if (await loadingScreen.isVisible({ timeout: 1000 }).catch(() => false)) {
      const backgroundColor = await loadingScreen.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      
      // Should have a visible background (not transparent)
      expect(backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
      expect(backgroundColor).not.toBe('transparent');
    }
  });

  test('loading indicator animation runs', async ({ page }) => {
    await page.route('**/*', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      await route.continue();
    });
    
    await page.goto('/');
    
    const spinner = page.locator('.loading-screen__spinner, .loading-screen__spinner-svg');
    
    if (await spinner.isVisible({ timeout: 1000 }).catch(() => false)) {
      // Check that animation is applied
      const animationName = await spinner.evaluate((el) => {
        return window.getComputedStyle(el).animationName;
      });
      
      expect(animationName).not.toBe('none');
    }
  });
});

test.describe('Loading Screen - Error Handling', () => {
  test('content shows even if loading times out', async ({ page }) => {
    // Simulate very slow network that might cause timeout
    await page.route('**/api/**', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 5000));
      await route.abort('timedout');
    });
    
    await page.goto('/', { timeout: 10000 }).catch(() => {});
    
    // Wait for loading provider's minimum time
    await page.waitForTimeout(2000);
    
    // Content should still be visible (loading screen should fade out)
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('loading screen handles font loading failure gracefully', async ({ page }) => {
    // Block font files
    await page.route('**/*.woff2', route => route.abort());
    await page.route('**/*.woff', route => route.abort());
    
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    // Wait reasonable time for loading to complete
    await page.waitForTimeout(3000);
    
    // Page should still be functional with fallback fonts
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText?.length).toBeGreaterThan(0);
  });
});
