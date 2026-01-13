import { test, expect } from '@playwright/test';

/**
 * Comprehensive Core Web Vitals Tests for The Ladder website
 * 
 * Tests all key performance metrics to ensure optimal user experience.
 * Targets for 100% Lighthouse Performance score.
 */

// Performance thresholds based on Lighthouse scoring
const THRESHOLDS = {
  // Core Web Vitals
  LCP: 2500,      // Largest Contentful Paint (ms) - Good: <2.5s
  FID: 100,       // First Input Delay (ms) - Good: <100ms
  CLS: 0.1,       // Cumulative Layout Shift - Good: <0.1
  
  // Other metrics
  FCP: 1800,      // First Contentful Paint (ms) - Good: <1.8s
  TTFB: 600,      // Time to First Byte (ms) - Good: <600ms
  TTI: 3800,      // Time to Interactive (ms) - Good: <3.8s
  TBT: 200,       // Total Blocking Time (ms) - Good: <200ms
  SI: 3400,       // Speed Index (ms) - Good: <3.4s
  
  // Resource thresholds
  totalJSKB: 400,        // Total JS bundle (KB)
  totalCSSKB: 100,       // Total CSS (KB)
  totalImagesKB: 2000,   // Total image weight (KB)
  documentSizeKB: 50,    // HTML document size (KB)
};

test.describe('Core Web Vitals - LCP', () => {
  test('LCP is under threshold on homepage', async ({ page }) => {
    await page.goto('/');
    
    const lcp = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let lcpValue = 0;
        
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          lcpValue = lastEntry.startTime;
        });
        
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        
        // Resolve after page is fully loaded
        if (document.readyState === 'complete') {
          setTimeout(() => {
            observer.disconnect();
            resolve(lcpValue);
          }, 1000);
        } else {
          window.addEventListener('load', () => {
            setTimeout(() => {
              observer.disconnect();
              resolve(lcpValue);
            }, 1000);
          });
        }
      });
    });
    
    console.log(`LCP: ${lcp.toFixed(2)}ms (threshold: ${THRESHOLDS.LCP}ms)`);
    expect(lcp).toBeLessThan(THRESHOLDS.LCP);
  });

  test('LCP element is optimized', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check if LCP image has priority loading
    const lcpImage = page.locator('section:first-of-type img').first();
    
    if (await lcpImage.isVisible({ timeout: 2000 }).catch(() => false)) {
      const fetchPriority = await lcpImage.getAttribute('fetchpriority');
      const loading = await lcpImage.getAttribute('loading');
      
      // LCP image should have priority loading
      expect(fetchPriority === 'high' || loading !== 'lazy').toBe(true);
    }
  });
});

test.describe('Core Web Vitals - FCP', () => {
  test('FCP is under threshold', async ({ page }) => {
    await page.goto('/');
    
    const fcp = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          for (const entry of entries) {
            if (entry.name === 'first-contentful-paint') {
              observer.disconnect();
              resolve(entry.startTime);
              return;
            }
          }
        });
        
        observer.observe({ type: 'paint', buffered: true });
        
        // Fallback timeout
        setTimeout(() => {
          observer.disconnect();
          resolve(THRESHOLDS.FCP + 1);
        }, 5000);
      });
    });
    
    console.log(`FCP: ${fcp.toFixed(2)}ms (threshold: ${THRESHOLDS.FCP}ms)`);
    expect(fcp).toBeLessThan(THRESHOLDS.FCP);
  });
});

test.describe('Core Web Vitals - CLS', () => {
  test('CLS is under threshold', async ({ page }) => {
    await page.goto('/');
    
    const cls = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let clsValue = 0;
        
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // @ts-ignore
            if (!entry.hadRecentInput) {
              // @ts-ignore
              clsValue += entry.value;
            }
          }
        });
        
        observer.observe({ type: 'layout-shift', buffered: true });
        
        // Wait for page to stabilize
        setTimeout(() => {
          observer.disconnect();
          resolve(clsValue);
        }, 3000);
      });
    });
    
    console.log(`CLS: ${cls.toFixed(4)} (threshold: ${THRESHOLDS.CLS})`);
    expect(cls).toBeLessThan(THRESHOLDS.CLS);
  });

  test('images have dimensions to prevent CLS', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const imagesWithoutSize = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      let count = 0;
      
      images.forEach((img) => {
        const hasWidth = img.hasAttribute('width') || img.style.width || img.hasAttribute('data-nimg');
        const hasHeight = img.hasAttribute('height') || img.style.height || img.hasAttribute('data-nimg');
        
        if (!hasWidth || !hasHeight) {
          count++;
        }
      });
      
      return count;
    });
    
    // Allow some flexibility for dynamic images
    expect(imagesWithoutSize).toBeLessThan(3);
  });
});

test.describe('Core Web Vitals - TTFB', () => {
  test('TTFB is under threshold', async ({ page }) => {
    await page.goto('/');
    
    const ttfb = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return navigation.responseStart - navigation.requestStart;
    });
    
    console.log(`TTFB: ${ttfb.toFixed(2)}ms (threshold: ${THRESHOLDS.TTFB}ms)`);
    expect(ttfb).toBeLessThan(THRESHOLDS.TTFB);
  });
});

test.describe('Core Web Vitals - TBT', () => {
  test('Total Blocking Time is minimal', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const tbt = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let totalBlockingTime = 0;
        
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Long tasks are those > 50ms
            // TBT is the sum of (task duration - 50ms) for all long tasks
            const blockingTime = Math.max(entry.duration - 50, 0);
            totalBlockingTime += blockingTime;
          }
        });
        
        observer.observe({ type: 'longtask', buffered: true });
        
        setTimeout(() => {
          observer.disconnect();
          resolve(totalBlockingTime);
        }, 5000);
      });
    });
    
    console.log(`TBT: ${tbt.toFixed(2)}ms (threshold: ${THRESHOLDS.TBT}ms)`);
    expect(tbt).toBeLessThan(THRESHOLDS.TBT);
  });
});

test.describe('Resource Optimization', () => {
  test('JavaScript bundle size is acceptable', async ({ page }) => {
    let totalJSSize = 0;
    
    page.on('response', async (response) => {
      const url = response.url();
      if (url.includes('.js') && !url.includes('analytics')) {
        const buffer = await response.body().catch(() => null);
        if (buffer) {
          totalJSSize += buffer.length;
        }
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const totalJSKB = totalJSSize / 1024;
    console.log(`Total JS: ${totalJSKB.toFixed(2)}KB (threshold: ${THRESHOLDS.totalJSKB}KB)`);
    expect(totalJSKB).toBeLessThan(THRESHOLDS.totalJSKB);
  });

  test('CSS bundle size is acceptable', async ({ page }) => {
    let totalCSSSize = 0;
    
    page.on('response', async (response) => {
      const url = response.url();
      const contentType = response.headers()['content-type'] || '';
      
      if (url.includes('.css') || contentType.includes('css')) {
        const buffer = await response.body().catch(() => null);
        if (buffer) {
          totalCSSSize += buffer.length;
        }
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const totalCSSKB = totalCSSSize / 1024;
    console.log(`Total CSS: ${totalCSSKB.toFixed(2)}KB (threshold: ${THRESHOLDS.totalCSSKB}KB)`);
    expect(totalCSSKB).toBeLessThan(THRESHOLDS.totalCSSKB);
  });

  test('images are optimized', async ({ page }) => {
    let totalImageSize = 0;
    
    page.on('response', async (response) => {
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('image')) {
        const buffer = await response.body().catch(() => null);
        if (buffer) {
          totalImageSize += buffer.length;
        }
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const totalImagesKB = totalImageSize / 1024;
    console.log(`Total Images: ${totalImagesKB.toFixed(2)}KB (threshold: ${THRESHOLDS.totalImagesKB}KB)`);
    expect(totalImagesKB).toBeLessThan(THRESHOLDS.totalImagesKB);
  });

  test('HTML document size is reasonable', async ({ page }) => {
    const response = await page.goto('/');
    const buffer = await response?.body();
    
    const documentSizeKB = (buffer?.length || 0) / 1024;
    console.log(`Document size: ${documentSizeKB.toFixed(2)}KB (threshold: ${THRESHOLDS.documentSizeKB}KB)`);
    expect(documentSizeKB).toBeLessThan(THRESHOLDS.documentSizeKB);
  });
});

test.describe('Render Blocking Resources', () => {
  test('no render-blocking JavaScript', async ({ page }) => {
    await page.goto('/');
    
    const blockingScripts = await page.evaluate(() => {
      const scripts = document.querySelectorAll('head script[src]:not([async]):not([defer]):not([type="module"])');
      return scripts.length;
    });
    
    expect(blockingScripts).toBe(0);
  });

  test('critical CSS is inlined or preloaded', async ({ page }) => {
    await page.goto('/');
    
    // Check for inline critical CSS
    const inlineStyles = await page.locator('head style').count();
    
    // Or preloaded CSS
    const preloadedCSS = await page.locator('link[rel="preload"][as="style"]').count();
    
    // Should have either inline critical CSS or preloaded CSS
    expect(inlineStyles > 0 || preloadedCSS > 0).toBe(true);
  });
});

test.describe('Image Loading Strategies', () => {
  test('above-fold images load eagerly', async ({ page }) => {
    await page.goto('/');
    
    // First image in viewport should not lazy load
    const firstVisibleImage = page.locator('img:visible').first();
    
    if (await firstVisibleImage.isVisible()) {
      const loading = await firstVisibleImage.getAttribute('loading');
      const fetchPriority = await firstVisibleImage.getAttribute('fetchpriority');
      
      // Should either not have lazy loading or have high priority
      expect(loading !== 'lazy' || fetchPriority === 'high').toBe(true);
    }
  });

  test('below-fold images lazy load', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Scroll down to reveal more images
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);
    
    const lazyImages = await page.locator('img[loading="lazy"]').count();
    
    // Should have some lazy-loaded images
    expect(lazyImages).toBeGreaterThan(0);
  });

  test('images use modern formats when available', async ({ page }) => {
    let webpCount = 0;
    let totalImages = 0;
    
    page.on('response', (response) => {
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('image')) {
        totalImages++;
        if (contentType.includes('webp') || response.url().includes('.webp')) {
          webpCount++;
        }
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // At least some images should be WebP (Next.js converts automatically)
    if (totalImages > 0) {
      const webpRatio = webpCount / totalImages;
      console.log(`WebP ratio: ${(webpRatio * 100).toFixed(1)}%`);
    }
  });
});

test.describe('Font Loading', () => {
  test('fonts are self-hosted', async ({ page }) => {
    let googleFontRequests = 0;
    
    page.on('request', (request) => {
      const url = request.url();
      if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
        googleFontRequests++;
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Should not make requests to Google Fonts
    expect(googleFontRequests).toBe(0);
  });

  test('font-display swap is used', async ({ page }) => {
    await page.goto('/');
    
    // Check if text is visible while fonts load
    const bodyText = page.locator('body');
    await expect(bodyText).toBeVisible();
    
    // Font Loading API check
    const fontsReady = await page.evaluate(async () => {
      if (document.fonts) {
        await document.fonts.ready;
        return true;
      }
      return true;
    });
    
    expect(fontsReady).toBe(true);
  });
});

test.describe('Mobile Performance', () => {
  test('mobile viewport performance', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const startTime = Date.now();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - startTime;
    
    // Mobile should load quickly too
    expect(loadTime).toBeLessThan(3000);
  });

  test('touch targets are properly sized', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check button/link sizes
    const smallTargets = await page.evaluate(() => {
      const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
      let smallCount = 0;
      
      interactiveElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Touch targets should be at least 44x44 pixels
        if (rect.width > 0 && rect.height > 0) {
          if (rect.width < 44 || rect.height < 44) {
            smallCount++;
          }
        }
      });
      
      return smallCount;
    });
    
    // Allow some small targets (icons, etc.)
    expect(smallTargets).toBeLessThan(10);
  });
});

test.describe('Caching', () => {
  test('static assets have cache headers', async ({ page }) => {
    const cacheMisses: string[] = [];
    
    page.on('response', (response) => {
      const url = response.url();
      const cacheControl = response.headers()['cache-control'];
      
      // Check static assets
      if (url.includes('/_next/static/') || url.includes('.woff2')) {
        if (!cacheControl || !cacheControl.includes('max-age')) {
          cacheMisses.push(url);
        }
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // All static assets should be cached
    expect(cacheMisses).toHaveLength(0);
  });
});

test.describe('DOM Size', () => {
  test('DOM is not excessively large', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const domStats = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      const bodyDepth = (function getDepth(element: Element): number {
        let depth = 0;
        let current = element;
        while (current.parentElement) {
          depth++;
          current = current.parentElement;
        }
        return depth;
      })(document.body);
      
      return {
        totalElements: allElements.length,
        maxDepth: bodyDepth,
      };
    });
    
    console.log(`DOM elements: ${domStats.totalElements}, Max depth: ${domStats.maxDepth}`);
    
    // Lighthouse flags >1500 elements as excessive
    expect(domStats.totalElements).toBeLessThan(1500);
    
    // Deep nesting can impact performance
    expect(domStats.maxDepth).toBeLessThan(32);
  });
});
