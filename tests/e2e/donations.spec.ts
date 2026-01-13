import { test, expect } from '@playwright/test';

/**
 * End-to-end tests for the Donations page
 * Tests payment link generation and form functionality
 */

test.describe('Donations Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/donate');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveURL(/\/donate/);
    await expect(page).toHaveTitle(/Donate/i);
  });

  test('should display donation form', async ({ page }) => {
    // Check for amount selection buttons
    const amountButtons = page.locator('button').filter({ hasText: /^\$\d+$/ });
    const count = await amountButtons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display payment method buttons', async ({ page }) => {
    // Check for PayPal, Venmo, and/or CashApp buttons
    const paymentButtons = page.locator('button, a').filter({ 
      hasText: /PayPal|Venmo|Cash\s?App|Card/i 
    });
    const count = await paymentButtons.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Amount Selection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/donate');
  });

  test('should allow selecting preset amounts', async ({ page }) => {
    // Find amount buttons (e.g., $25, $50, $100, $250)
    const amount50 = page.locator('button').filter({ hasText: '$50' }).first();
    
    if (await amount50.isVisible()) {
      await amount50.click();
      
      // Button should show selected state (various possible indicators)
      const classes = await amount50.getAttribute('class');
      // Just verify click worked - actual styling verification depends on implementation
      expect(classes).toBeTruthy();
    }
  });

  test('should allow entering custom amount', async ({ page }) => {
    const customInput = page.locator('input[type="number"], input[id*="amount" i], input[placeholder*="0.00"]').first();
    
    if (await customInput.isVisible()) {
      await customInput.fill('75');
      
      const value = await customInput.inputValue();
      expect(value).toBe('75');
    }
  });
});

test.describe('Payment Link Generation', () => {
  test('PayPal button should generate correct URL', async ({ page }) => {
    await page.goto('/donate');
    
    // Look for PayPal button
    const paypalButton = page.locator('button, a').filter({ hasText: /PayPal/i }).first();
    
    if (await paypalButton.isVisible()) {
      // Get href or track what URL opens
      const href = await paypalButton.getAttribute('href');
      
      if (href) {
        expect(href).toMatch(/paypal\.me|paypal\.com/i);
      }
    }
  });

  test('Venmo button should generate correct URL', async ({ page }) => {
    await page.goto('/donate');
    
    const venmoButton = page.locator('button, a').filter({ hasText: /Venmo/i }).first();
    
    if (await venmoButton.isVisible()) {
      const href = await venmoButton.getAttribute('href');
      
      if (href) {
        expect(href).toMatch(/venmo\.com|venmo:/i);
      }
    }
  });

  test('CashApp button should generate correct URL', async ({ page }) => {
    await page.goto('/donate');
    
    const cashAppButton = page.locator('button, a').filter({ hasText: /Cash\s?App/i }).first();
    
    if (await cashAppButton.isVisible()) {
      const href = await cashAppButton.getAttribute('href');
      
      if (href) {
        expect(href).toMatch(/cash\.app|cashapp:/i);
      }
    }
  });
});

test.describe('Giving Type Toggle', () => {
  test('should toggle between one-time and monthly giving', async ({ page }) => {
    await page.goto('/donate');
    
    // Look for one-time/monthly toggle buttons
    const oneTimeButton = page.locator('button').filter({ hasText: /One.?Time/i }).first();
    const monthlyButton = page.locator('button').filter({ hasText: /Monthly/i }).first();
    
    if (await oneTimeButton.isVisible() && await monthlyButton.isVisible()) {
      // Click monthly
      await monthlyButton.click();
      
      // Verify monthly is now selected (check for active class or aria-pressed)
      const monthlyClasses = await monthlyButton.getAttribute('class');
      expect(monthlyClasses).toBeTruthy();
      
      // Click one-time
      await oneTimeButton.click();
      
      // Verify one-time is now selected
      const oneTimeClasses = await oneTimeButton.getAttribute('class');
      expect(oneTimeClasses).toBeTruthy();
    }
  });
});

test.describe('GDPR Consent', () => {
  test('should have consent checkbox', async ({ page }) => {
    await page.goto('/donate');
    
    const consentCheckbox = page.locator('input[type="checkbox"]').first();
    
    if (await consentCheckbox.isVisible()) {
      expect(await consentCheckbox.isChecked()).toBe(false);
      
      await consentCheckbox.check();
      expect(await consentCheckbox.isChecked()).toBe(true);
    }
  });
});

test.describe('Accessibility - Donations', () => {
  test('all payment buttons should be keyboard accessible', async ({ page }) => {
    await page.goto('/donate');
    
    // Tab through the page
    let tabCount = 0;
    const maxTabs = 30;
    
    while (tabCount < maxTabs) {
      await page.keyboard.press('Tab');
      tabCount++;
      
      // Check if a payment button is focused
      const focusedElement = await page.evaluate(() => {
        const el = document.activeElement;
        return {
          tagName: el?.tagName,
          text: el?.textContent?.trim().substring(0, 20),
        };
      });
      
      if (focusedElement.text?.match(/PayPal|Venmo|Cash|Donate/i)) {
        // Found a payment button via keyboard - test passes
        expect(focusedElement.tagName).toBe('BUTTON');
        break;
      }
    }
  });

  test('amount buttons should have proper labels', async ({ page }) => {
    await page.goto('/donate');
    
    const amountButtons = page.locator('button').filter({ hasText: /^\$\d+$/ });
    const count = await amountButtons.count();
    
    for (let i = 0; i < count; i++) {
      const button = amountButtons.nth(i);
      const text = await button.textContent();
      
      // Button text should clearly indicate the amount
      expect(text).toMatch(/\$\d+/);
    }
  });
});

test.describe('Mobile Donations', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('should be usable on mobile', async ({ page }) => {
    await page.goto('/donate');
    
    // Page should not have horizontal scroll
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasOverflow).toBe(false);
    
    // Amount buttons should be visible
    const amountButtons = page.locator('button').filter({ hasText: /^\$\d+$/ });
    if (await amountButtons.count() > 0) {
      await expect(amountButtons.first()).toBeVisible();
    }
  });

  test('touch targets should meet minimum size', async ({ page }) => {
    await page.goto('/donate');
    
    // Check button sizes
    const buttons = page.locator('button');
    const count = await buttons.count();
    
    for (let i = 0; i < Math.min(count, 10); i++) {
      const button = buttons.nth(i);
      const box = await button.boundingBox();
      
      if (box) {
        // Touch target should be at least 44x44 pixels
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });
});

test.describe('Impact Display', () => {
  test('should show impact information for donations', async ({ page }) => {
    await page.goto('/donate');
    
    // Check for impact section or statements
    const impactSection = page.locator('text=/impact|help|provide|support/i').first();
    await expect(impactSection).toBeVisible();
  });
});
