import { test, expect } from '@playwright/test';

/**
 * SEO tests for The Ladder website
 * Tests meta tags, structured data, sitemap, and heading hierarchy
 */

const pagesToTest = [
  { name: 'Homepage', path: '/', expectedTitle: /The Ladder/i },
  { name: 'About', path: '/about', expectedTitle: /About/i },
  { name: 'Services', path: '/services', expectedTitle: /Services/i },
  { name: 'Contact', path: '/contact', expectedTitle: /Contact/i },
  { name: 'Donate', path: '/donate', expectedTitle: /Donate/i },
];

test.describe('Meta Tags', () => {
  for (const pageInfo of pagesToTest) {
    test(`${pageInfo.name} page should have proper meta tags`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Check title
      const title = await page.title();
      expect(title).toMatch(pageInfo.expectedTitle);
      
      // Check meta description
      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(50);
      expect(description!.length).toBeLessThan(160);
      
      // Check viewport
      const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
      expect(viewport).toContain('width=device-width');
    });
  }
});

test.describe('Open Graph Tags', () => {
  for (const pageInfo of pagesToTest) {
    test(`${pageInfo.name} page should have Open Graph tags`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Check og:title
      const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
      expect(ogTitle).toBeTruthy();
      
      // Check og:description
      const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
      expect(ogDescription).toBeTruthy();
      
      // Check og:type
      const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');
      expect(ogType).toBeTruthy();
      
      // Check og:url
      const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
      expect(ogUrl).toBeTruthy();
    });
  }
});

test.describe('Heading Hierarchy', () => {
  for (const pageInfo of pagesToTest) {
    test(`${pageInfo.name} page should have proper heading hierarchy`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Should have exactly one h1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
      
      // Get all headings
      const headings = await page.evaluate(() => {
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        return Array.from(elements).map(el => ({
          level: parseInt(el.tagName[1]),
          text: el.textContent?.trim().substring(0, 50),
        }));
      });
      
      // Check that heading levels don't skip (e.g., h1 -> h3)
      for (let i = 1; i < headings.length; i++) {
        const diff = headings[i].level - headings[i - 1].level;
        expect(diff).toBeLessThanOrEqual(1);
      }
    });
  }
});

test.describe('Sitemap', () => {
  test('sitemap.xml should be accessible and valid', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    
    const content = await page.content();
    expect(content).toContain('<urlset');
    expect(content).toContain('<url>');
    expect(content).toContain('<loc>');
  });
});

test.describe('Robots.txt', () => {
  test('robots.txt should be accessible and properly configured', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    
    const content = await page.textContent('body');
    expect(content).toContain('User-agent');
    expect(content).toContain('Sitemap');
  });
});

test.describe('Structured Data', () => {
  test('homepage should have JSON-LD structured data', async ({ page }) => {
    await page.goto('/');
    
    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(jsonLd.length).toBeGreaterThan(0);
    
    // Parse and validate JSON-LD
    for (const ld of jsonLd) {
      const parsed = JSON.parse(ld);
      expect(parsed['@context']).toContain('schema.org');
    }
  });
});

test.describe('Canonical URLs', () => {
  for (const pageInfo of pagesToTest) {
    test(`${pageInfo.name} page should have canonical URL`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBeTruthy();
      expect(canonical).toContain('the-ladder');
    });
  }
});

test.describe('Image Optimization', () => {
  test('images should have alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const role = await img.getAttribute('role');
      
      // Image should have alt text or be decorative (role="presentation")
      const isAccessible = alt !== null || role === 'presentation';
      expect(isAccessible).toBe(true);
    }
  });
});
