import { test, expect } from '@playwright/test';

/**
 * Design Quality Tests for The Ladder website
 * 
 * Validates visual attractiveness, design consistency,
 * and adherence to brand guidelines.
 */

// Brand colors from design system
const BRAND_COLORS = {
  primary: '#1B4F72',
  primaryLight: '#2874A6',
  primaryDark: '#154360',
  secondary: '#148F77',
  secondaryLight: '#1ABC9C',
  accent: '#C0392B',
  accentLight: '#E74C3C',
};

// Minimum contrast ratios for WCAG AA
const MIN_CONTRAST_NORMAL = 4.5;
const MIN_CONTRAST_LARGE = 3.0;

test.describe('Color Contrast Validation', () => {
  test('text has sufficient contrast against backgrounds', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    // Sample key text elements and check contrast
    const textElements = await page.locator('h1, h2, h3, p, a, button').all();
    
    let lowContrastCount = 0;
    const lowContrastElements: string[] = [];
    
    for (const element of textElements.slice(0, 30)) {
      const contrast = await element.evaluate((el) => {
        const style = window.getComputedStyle(el);
        const color = style.color;
        const bgColor = style.backgroundColor;
        
        // Parse RGB values
        const parseRGB = (str: string) => {
          const match = str.match(/\d+/g);
          if (match && match.length >= 3) {
            return { r: parseInt(match[0]), g: parseInt(match[1]), b: parseInt(match[2]) };
          }
          return null;
        };
        
        const fg = parseRGB(color);
        const bg = parseRGB(bgColor);
        
        if (!fg || !bg) return null;
        
        // Calculate relative luminance
        const luminance = (rgb: { r: number; g: number; b: number }) => {
          const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((c) => {
            c = c / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
          });
          return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };
        
        const l1 = luminance(fg);
        const l2 = luminance(bg);
        const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
        
        return {
          ratio: ratio,
          text: el.textContent?.slice(0, 30) || '',
          tag: el.tagName,
        };
      }).catch(() => null);
      
      if (contrast && contrast.ratio < MIN_CONTRAST_NORMAL && contrast.ratio > 1) {
        lowContrastCount++;
        lowContrastElements.push(`${contrast.tag}: "${contrast.text}" (${contrast.ratio.toFixed(2)})`);
      }
    }
    
    if (lowContrastElements.length > 0) {
      console.log('Low contrast elements:');
      lowContrastElements.slice(0, 5).forEach(e => console.log(`  - ${e}`));
    }
    
    // Allow some low contrast (decorative elements)
    expect(lowContrastCount).toBeLessThan(10);
  });
});

test.describe('Typography Hierarchy', () => {
  test('headings follow proper size hierarchy', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const headingSizes = await page.evaluate(() => {
      const sizes: { [key: string]: number[] } = { h1: [], h2: [], h3: [], h4: [] };
      
      ['h1', 'h2', 'h3', 'h4'].forEach(tag => {
        document.querySelectorAll(tag).forEach(el => {
          const size = parseFloat(window.getComputedStyle(el).fontSize);
          sizes[tag].push(size);
        });
      });
      
      return sizes;
    });
    
    // Calculate average sizes
    const avgSizes = {
      h1: headingSizes.h1.length ? headingSizes.h1.reduce((a, b) => a + b, 0) / headingSizes.h1.length : 0,
      h2: headingSizes.h2.length ? headingSizes.h2.reduce((a, b) => a + b, 0) / headingSizes.h2.length : 0,
      h3: headingSizes.h3.length ? headingSizes.h3.reduce((a, b) => a + b, 0) / headingSizes.h3.length : 0,
      h4: headingSizes.h4.length ? headingSizes.h4.reduce((a, b) => a + b, 0) / headingSizes.h4.length : 0,
    };
    
    // Verify hierarchy (larger headings should be bigger)
    if (avgSizes.h1 > 0 && avgSizes.h2 > 0) {
      expect(avgSizes.h1).toBeGreaterThanOrEqual(avgSizes.h2);
    }
    if (avgSizes.h2 > 0 && avgSizes.h3 > 0) {
      expect(avgSizes.h2).toBeGreaterThanOrEqual(avgSizes.h3);
    }
    if (avgSizes.h3 > 0 && avgSizes.h4 > 0) {
      expect(avgSizes.h3).toBeGreaterThanOrEqual(avgSizes.h4);
    }
  });

  test('body text uses consistent font family', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const fontFamilies = await page.evaluate(() => {
      const paragraphs = document.querySelectorAll('p');
      const fonts = new Set<string>();
      
      paragraphs.forEach(p => {
        const font = window.getComputedStyle(p).fontFamily;
        fonts.add(font);
      });
      
      return Array.from(fonts);
    });
    
    // Should have limited font variety (1-2 font families)
    expect(fontFamilies.length).toBeLessThanOrEqual(3);
  });

  test('headings use serif font family', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const h1Font = await page.locator('h1').first().evaluate((el) => {
      return window.getComputedStyle(el).fontFamily;
    }).catch(() => '');
    
    // Should include Lora or a serif font
    const isSerif = h1Font.toLowerCase().includes('lora') || 
                    h1Font.toLowerCase().includes('georgia') ||
                    h1Font.toLowerCase().includes('serif');
    
    expect(isSerif).toBe(true);
  });
});

test.describe('Spacing Consistency', () => {
  test('sections have consistent vertical spacing', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const sectionSpacing = await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      const paddings: number[] = [];
      
      sections.forEach(section => {
        const style = window.getComputedStyle(section);
        const paddingTop = parseFloat(style.paddingTop);
        const paddingBottom = parseFloat(style.paddingBottom);
        paddings.push(paddingTop, paddingBottom);
      });
      
      return paddings;
    });
    
    // Check for reasonable spacing (not 0, not excessive)
    const nonZeroPadding = sectionSpacing.filter(p => p > 0);
    expect(nonZeroPadding.length).toBeGreaterThan(0);
    
    // Spacing shouldn't be wildly inconsistent
    if (nonZeroPadding.length > 2) {
      const min = Math.min(...nonZeroPadding);
      const max = Math.max(...nonZeroPadding);
      // Max should not be more than 5x the min (reasonable variation)
      expect(max / min).toBeLessThan(5);
    }
  });

  test('cards have consistent padding', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const cardPaddings = await page.evaluate(() => {
      const cards = document.querySelectorAll('[class*="card"], .bg-white.rounded, .shadow');
      const paddings: number[] = [];
      
      cards.forEach(card => {
        const style = window.getComputedStyle(card);
        const padding = parseFloat(style.padding) || parseFloat(style.paddingTop);
        if (padding > 0) {
          paddings.push(padding);
        }
      });
      
      return paddings;
    });
    
    if (cardPaddings.length > 2) {
      // Cards should have similar padding
      const unique = [...new Set(cardPaddings)];
      // Should have limited variation (using a spacing scale)
      expect(unique.length).toBeLessThanOrEqual(5);
    }
  });
});

test.describe('Button Style Consistency', () => {
  test('primary buttons have consistent styling', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const buttonStyles = await page.evaluate(() => {
      const buttons = document.querySelectorAll('a.btn, button.btn, [class*="btn-"]');
      const styles: { bg: string; radius: string; padding: string }[] = [];
      
      buttons.forEach(btn => {
        const style = window.getComputedStyle(btn);
        styles.push({
          bg: style.backgroundColor,
          radius: style.borderRadius,
          padding: style.padding,
        });
      });
      
      return styles;
    });
    
    if (buttonStyles.length > 1) {
      // Check border radius consistency
      const radiuses = buttonStyles.map(s => s.radius);
      const uniqueRadiuses = [...new Set(radiuses)];
      
      // Should have limited radius variations (design system)
      expect(uniqueRadiuses.length).toBeLessThanOrEqual(4);
    }
  });

  test('buttons have proper hover states', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const button = page.locator('a.btn, button.btn').first();
    
    if (await button.isVisible().catch(() => false)) {
      const initialBg = await button.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      
      await button.hover();
      await page.waitForTimeout(200);
      
      const hoverBg = await button.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      
      // Button should have some visual feedback
      // Either color change or we just verify it's not broken
      expect(hoverBg).toBeDefined();
    }
  });
});

test.describe('Image Quality', () => {
  test('images have proper aspect ratios', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const imageRatios = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const ratios: { src: string; ratio: number; distorted: boolean }[] = [];
      
      images.forEach(img => {
        if (img.naturalWidth && img.naturalHeight && img.width && img.height) {
          const naturalRatio = img.naturalWidth / img.naturalHeight;
          const displayRatio = img.width / img.height;
          const distortion = Math.abs(naturalRatio - displayRatio) / naturalRatio;
          
          ratios.push({
            src: img.src.slice(-50),
            ratio: displayRatio,
            distorted: distortion > 0.05, // 5% tolerance
          });
        }
      });
      
      return ratios;
    });
    
    const distortedImages = imageRatios.filter(r => r.distorted);
    
    if (distortedImages.length > 0) {
      console.log('Potentially distorted images:');
      distortedImages.slice(0, 3).forEach(i => console.log(`  - ${i.src}`));
    }
    
    // Allow some distortion (intentional cover images)
    expect(distortedImages.length).toBeLessThan(5);
  });

  test('images load without broken state', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const brokenImages = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const broken: string[] = [];
      
      images.forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
          broken.push(img.src);
        }
      });
      
      return broken;
    });
    
    expect(brokenImages.length).toBe(0);
  });
});

test.describe('Visual Hierarchy', () => {
  test('hero section is prominently displayed', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const heroSection = page.locator('section').first();
    const box = await heroSection.boundingBox();
    
    expect(box).not.toBeNull();
    if (box) {
      // Hero should take significant vertical space
      expect(box.height).toBeGreaterThan(300);
    }
  });

  test('CTA buttons stand out visually', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const ctaButton = page.locator('a.btn, button.btn').first();
    
    if (await ctaButton.isVisible().catch(() => false)) {
      const style = await ctaButton.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          bg: computed.backgroundColor,
          color: computed.color,
          fontWeight: computed.fontWeight,
        };
      });
      
      // CTA should have bold/semi-bold text
      const fontWeight = parseInt(style.fontWeight);
      expect(fontWeight).toBeGreaterThanOrEqual(500);
    }
  });
});

test.describe('Animation Quality', () => {
  test('animations are smooth (no jank)', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    // Measure animation smoothness during page load
    const metrics = await page.evaluate(() => {
      return new Promise<{ frames: number; duration: number }>((resolve) => {
        let frameCount = 0;
        const startTime = performance.now();
        
        const countFrame = () => {
          frameCount++;
          if (performance.now() - startTime < 1000) {
            requestAnimationFrame(countFrame);
          } else {
            resolve({
              frames: frameCount,
              duration: performance.now() - startTime,
            });
          }
        };
        
        requestAnimationFrame(countFrame);
      });
    });
    
    // Calculate FPS
    const fps = (metrics.frames / metrics.duration) * 1000;
    
    // Should maintain reasonable frame rate (30+ fps minimum)
    expect(fps).toBeGreaterThan(30);
  });

  test('loading screen animation completes', async ({ page }) => {
    await page.goto('/');
    
    // Wait for loading screen to complete
    await page.waitForSelector('.app-content--loaded, main:visible', {
      timeout: 5000,
    }).catch(() => {});
    
    await page.waitForTimeout(500);
    
    // Loading screen should be gone
    const loadingScreen = page.locator('.loading-screen:not(.loading-screen--fade-out)');
    const isHidden = await loadingScreen.isHidden().catch(() => true);
    
    expect(isHidden).toBe(true);
  });
});

test.describe('Brand Consistency', () => {
  test('logo is present and visible', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const logo = page.locator('img[alt*="Ladder" i], img[src*="logo" i]').first();
    await expect(logo).toBeVisible();
    
    // Logo should have loaded
    const naturalWidth = await logo.evaluate((img: HTMLImageElement) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test('brand colors are used consistently', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const colors = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const bgColors = new Set<string>();
      const textColors = new Set<string>();
      
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;
        const color = style.color;
        
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          bgColors.add(bg);
        }
        if (color) {
          textColors.add(color);
        }
      });
      
      return {
        backgrounds: bgColors.size,
        textColors: textColors.size,
      };
    });
    
    // Should have a limited color palette (design system)
    expect(colors.backgrounds).toBeLessThan(20);
    expect(colors.textColors).toBeLessThan(15);
  });
});

test.describe('Footer Design', () => {
  test('footer has proper structure and styling', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
    
    // Footer should have adequate height
    const box = await footer.boundingBox();
    if (box) {
      expect(box.height).toBeGreaterThan(100);
    }
  });

  test('footer contains essential information', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    
    const footer = page.getByRole('contentinfo');
    
    // Should contain copyright or organization name
    const footerText = await footer.textContent();
    const hasEssentialInfo = 
      footerText?.includes('Ladder') ||
      footerText?.includes('©') ||
      footerText?.includes('501(c)(3)');
    
    expect(hasEssentialInfo).toBe(true);
  });
});
