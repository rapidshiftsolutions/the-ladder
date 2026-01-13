import { test, expect } from '@playwright/test';

/**
 * Performance tests for The Ladder website
 * Tests Core Web Vitals and general performance metrics
 */

test.describe('Core Web Vitals', () => {
  test('homepage should load within performance budget', async ({ page }) => {
    // Start performance measurement
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Get performance timing
    const performanceMetrics = await page.evaluate(() => {
      const timing = performance.timing;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      return {
        // Time to First Byte
        ttfb: navigation?.responseStart - navigation?.requestStart,
        // DOM Content Loaded
        domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
        // Full page load
        loadComplete: timing.loadEventEnd - timing.navigationStart,
        // First Contentful Paint
        fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
      };
    });
    
    // TTFB should be under 600ms
    expect(performanceMetrics.ttfb).toBeLessThan(600);
    
    // DOM Content Loaded should be under 3s
    expect(performanceMetrics.domContentLoaded).toBeLessThan(3000);
    
    // Full load should be under 5s
    expect(performanceMetrics.loadComplete).toBeLessThan(5000);
  });

  test('LCP element should render quickly', async ({ page }) => {
    await page.goto('/');
    
    // Wait for LCP
    const lcp = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        }).observe({ type: 'largest-contentful-paint', buffered: true });
        
        // Fallback timeout
        setTimeout(() => resolve(2500), 5000);
      });
    });
    
    // LCP should be under 2.5s (good threshold)
    expect(lcp).toBeLessThan(2500);
  });
});

test.describe('Resource Optimization', () => {
  test('should not have excessive JavaScript', async ({ page }) => {
    const resources: { url: string; size: number }[] = [];
    
    page.on('response', async (response) => {
      const url = response.url();
      if (url.endsWith('.js') || url.includes('.js?')) {
        const buffer = await response.body().catch(() => null);
        if (buffer) {
          resources.push({ url, size: buffer.length });
        }
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Calculate total JS size
    const totalJsSize = resources.reduce((sum, r) => sum + r.size, 0);
    const totalJsKb = totalJsSize / 1024;
    
    // Total JS should be under 500KB (reasonable for Next.js app)
    expect(totalJsKb).toBeLessThan(500);
  });

  test('images should be optimized', async ({ page }) => {
    await page.goto('/');
    
    // Check that Next.js Image component is being used
    const nextImages = await page.locator('img[srcset], img[data-nimg]').count();
    const allImages = await page.locator('img').count();
    
    // At least half of images should be using Next.js optimization
    if (allImages > 0) {
      const optimizedRatio = nextImages / allImages;
      expect(optimizedRatio).toBeGreaterThan(0.5);
    }
  });
});

test.describe('Caching', () => {
  test('static assets should have cache headers', async ({ page }) => {
    const cacheableResources: { url: string; cacheControl: string | null }[] = [];
    
    page.on('response', (response) => {
      const url = response.url();
      if (url.includes('/_next/static/') || url.endsWith('.js') || url.endsWith('.css')) {
        cacheableResources.push({
          url,
          cacheControl: response.headers()['cache-control'],
        });
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Check that static resources have cache headers
    for (const resource of cacheableResources) {
      if (resource.url.includes('/_next/static/')) {
        expect(resource.cacheControl).toBeTruthy();
      }
    }
  });
});

test.describe('Mobile Performance', () => {
  test('should load quickly on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const startTime = Date.now();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - startTime;
    
    // Should load within 3s on mobile
    expect(loadTime).toBeLessThan(3000);
  });

  test('should not have horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    
    expect(hasHorizontalScroll).toBe(false);
  });
});
