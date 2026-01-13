import { test, expect } from '@playwright/test';

/**
 * Production Readiness Tests for The Ladder website
 * 
 * Comprehensive tests to verify the site is ready for production deployment.
 * These tests check critical functionality, SEO, PWA features, and more.
 */

// Critical pages that must work in production
const CRITICAL_PAGES = [
  { path: '/', title: 'The Ladder' },
  { path: '/about', title: 'About' },
  { path: '/contact', title: 'Contact' },
  { path: '/donate', title: 'Donate' },
  { path: '/how-we-help', title: 'How We Help' },
  { path: '/success-stories', title: 'Success Stories' },
  { path: '/leadership-team', title: 'Leadership' },
  { path: '/events', title: 'Events' },
  { path: '/partners', title: 'Partners' },
];

test.describe('Page Availability', () => {
  for (const { path, title } of CRITICAL_PAGES) {
    test(`${path} returns 200 status`, async ({ request }) => {
      const response = await request.get(path);
      expect(response.status()).toBe(200);
    });

    test(`${path} has correct title`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(new RegExp(title, 'i'));
    });
  }
});

test.describe('Console Error Detection', () => {
  test('homepage loads without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Filter out known acceptable errors (like third-party scripts)
    const criticalErrors = consoleErrors.filter(error => 
      !error.includes('third-party') &&
      !error.includes('analytics') &&
      !error.includes('favicon')
    );
    
    expect(criticalErrors).toHaveLength(0);
  });

  test('navigation does not cause console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Navigate to a few pages
    const navLinks = page.locator('header a[href^="/"]');
    const linkCount = await navLinks.count();
    
    for (let i = 0; i < Math.min(linkCount, 3); i++) {
      const link = navLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && !href.includes('#')) {
        await link.click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);
      }
    }
    
    // Check for RSC-specific errors
    const rscErrors = consoleErrors.filter(error => 
      error.includes('RSC') || error.includes('fetch')
    );
    
    expect(rscErrors).toHaveLength(0);
  });
});

test.describe('Critical Assets', () => {
  test('logo image loads', async ({ page }) => {
    await page.goto('/');
    
    const logo = page.locator('img[alt*="Ladder" i], img[src*="logo" i]').first();
    await expect(logo).toBeVisible({ timeout: 5000 });
    
    // Verify image actually loaded
    const naturalWidth = await logo.evaluate((img: HTMLImageElement) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test('hero image loads', async ({ page }) => {
    await page.goto('/');
    
    const heroImage = page.locator('section img[src*="Jamil"], img[alt*="success" i]').first();
    
    if (await heroImage.isVisible({ timeout: 3000 }).catch(() => false)) {
      const naturalWidth = await heroImage.evaluate((img: HTMLImageElement) => img.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });

  test('CSS stylesheets load', async ({ page }) => {
    const cssResponses: number[] = [];
    
    page.on('response', (response) => {
      if (response.url().includes('.css') || response.headers()['content-type']?.includes('css')) {
        cssResponses.push(response.status());
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // All CSS should load successfully
    expect(cssResponses.every(status => status === 200)).toBe(true);
  });

  test('JavaScript bundles load', async ({ page }) => {
    const jsResponses: { url: string; status: number }[] = [];
    
    page.on('response', (response) => {
      if (response.url().includes('.js')) {
        jsResponses.push({ url: response.url(), status: response.status() });
      }
    });
    
    await page.goto('/', { waitUntil: 'networkidle' });
    
    const failedJs = jsResponses.filter(r => r.status !== 200);
    expect(failedJs).toHaveLength(0);
  });
});

test.describe('Service Worker', () => {
  test('service worker registers', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const swRegistered = await page.evaluate(async () => {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        return registrations.length > 0;
      }
      return false;
    });
    
    expect(swRegistered).toBe(true);
  });

  test('service worker is active', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    const swState = await page.evaluate(async () => {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        return registration.active?.state;
      }
      return null;
    });
    
    expect(swState).toBe('activated');
  });
});

test.describe('Web App Manifest', () => {
  test('manifest is accessible', async ({ request }) => {
    const response = await request.get('/site.webmanifest');
    expect(response.status()).toBe(200);
  });

  test('manifest has required fields', async ({ request }) => {
    const response = await request.get('/site.webmanifest');
    const manifest = await response.json();
    
    expect(manifest.name).toBeTruthy();
    expect(manifest.short_name).toBeTruthy();
    expect(manifest.start_url).toBeTruthy();
    expect(manifest.display).toBeTruthy();
    expect(manifest.icons).toBeTruthy();
    expect(manifest.icons.length).toBeGreaterThan(0);
  });

  test('manifest has maskable icon', async ({ request }) => {
    const response = await request.get('/site.webmanifest');
    const manifest = await response.json();
    
    const hasMaskable = manifest.icons.some((icon: { purpose?: string }) => 
      icon.purpose?.includes('maskable')
    );
    
    expect(hasMaskable).toBe(true);
  });
});

test.describe('Meta Tags & SEO', () => {
  test('has essential meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Viewport
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
    
    // Description
    const description = page.locator('meta[name="description"]');
    const descContent = await description.getAttribute('content');
    expect(descContent?.length).toBeGreaterThan(50);
    
    // Theme color
    const themeColor = page.locator('meta[name="theme-color"]');
    await expect(themeColor).toHaveAttribute('content', /.+/);
  });

  test('has Open Graph tags', async ({ page }) => {
    await page.goto('/');
    
    const ogTitle = page.locator('meta[property="og:title"]');
    const ogDescription = page.locator('meta[property="og:description"]');
    const ogImage = page.locator('meta[property="og:image"]');
    
    await expect(ogTitle).toHaveAttribute('content', /.+/);
    await expect(ogDescription).toHaveAttribute('content', /.+/);
    await expect(ogImage).toHaveAttribute('content', /.+/);
  });

  test('has Twitter Card tags', async ({ page }) => {
    await page.goto('/');
    
    const twitterCard = page.locator('meta[name="twitter:card"]');
    const twitterTitle = page.locator('meta[name="twitter:title"]');
    
    await expect(twitterCard).toHaveAttribute('content', /.+/);
    await expect(twitterTitle).toHaveAttribute('content', /.+/);
  });

  test('has structured data', async ({ page }) => {
    await page.goto('/');
    
    const structuredData = page.locator('script[type="application/ld+json"]');
    const count = await structuredData.count();
    
    expect(count).toBeGreaterThan(0);
    
    // Verify it's valid JSON
    const jsonContent = await structuredData.first().textContent();
    expect(() => JSON.parse(jsonContent || '')).not.toThrow();
  });
});

test.describe('Images Optimization', () => {
  test('images have srcset for responsive loading', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const images = page.locator('img[srcset], img[data-nimg]');
    const count = await images.count();
    
    // Most images should be optimized
    expect(count).toBeGreaterThan(0);
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const imagesWithoutAlt = page.locator('img:not([alt]), img[alt=""]');
    const count = await imagesWithoutAlt.count();
    
    // Should have very few or no images without alt text
    expect(count).toBeLessThan(3);
  });

  test('images use lazy loading where appropriate', async ({ page }) => {
    await page.goto('/');
    
    const lazyImages = page.locator('img[loading="lazy"]');
    const count = await lazyImages.count();
    
    // Below-the-fold images should lazy load
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Forms', () => {
  test('contact form is accessible', async ({ page }) => {
    await page.goto('/contact');
    
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    // Check for form fields
    const inputs = form.locator('input, textarea');
    const inputCount = await inputs.count();
    
    expect(inputCount).toBeGreaterThan(0);
  });

  test('form fields have labels', async ({ page }) => {
    await page.goto('/contact');
    
    const inputs = page.locator('form input[type="text"], form input[type="email"], form textarea');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const placeholder = await input.getAttribute('placeholder');
      
      // Input should have either a label, aria-label, or placeholder
      const hasLabel = id ? await page.locator(`label[for="${id}"]`).count() > 0 : false;
      expect(hasLabel || ariaLabel || placeholder).toBeTruthy();
    }
  });
});

test.describe('External Links', () => {
  test('external links have noopener', async ({ page }) => {
    await page.goto('/');
    
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const rel = await link.getAttribute('rel');
      
      expect(rel).toContain('noopener');
    }
  });
});

test.describe('Robots & Sitemap', () => {
  test('robots.txt is accessible', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
    
    const content = await response.text();
    expect(content).toContain('User-agent');
  });

  test('sitemap is accessible', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect([200, 301, 302]).toContain(response.status());
  });
});

test.describe('Security', () => {
  test('HTTPS redirect works (if configured)', async ({ page }) => {
    // This test is primarily for production
    const url = page.url();
    
    if (url.includes('localhost')) {
      // Skip for local development
      test.skip();
    }
    
    expect(url.startsWith('https://')).toBe(true);
  });

  test('no sensitive data in HTML source', async ({ page }) => {
    await page.goto('/');
    const content = await page.content();
    
    // Check for common sensitive patterns
    expect(content).not.toMatch(/api[_-]?key\s*[:=]\s*["'][^"']+["']/i);
    expect(content).not.toMatch(/password\s*[:=]\s*["'][^"']+["']/i);
    expect(content).not.toMatch(/secret\s*[:=]\s*["'][^"']+["']/i);
  });
});

test.describe('Performance Basics', () => {
  test('page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - startTime;
    
    // DOM should be ready within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('no render-blocking resources in critical path', async ({ page }) => {
    const renderBlockingResources: string[] = [];
    
    page.on('response', (response) => {
      const headers = response.headers();
      const url = response.url();
      
      // Check for non-async scripts in head
      if (url.endsWith('.js') && !headers['cache-control']?.includes('immutable')) {
        // This is a simplified check
      }
    });
    
    await page.goto('/');
    
    // Check for render-blocking scripts in HTML
    const blockingScripts = page.locator('head script:not([async]):not([defer]):not([type="application/ld+json"])');
    const count = await blockingScripts.count();
    
    // Should have minimal blocking scripts
    expect(count).toBeLessThan(3);
  });
});
