import { test, expect } from '@playwright/test';

test.describe('Guest Portal', () => {
  test('login page loads', async ({ page }) => {
    await page.goto('/guest-portal');
    await expect(page.getByRole('heading', { name: /Guest Portal/i })).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
  });

  test('protected apply route redirects when logged out', async ({ page }) => {
    await page.goto('/guest-portal/apply');
    await expect(page).toHaveURL(/\/guest-portal\/?$/);
  });

  test('get-help points to invitation portal', async ({ page }) => {
    await page.goto('/get-help');
    await expect(page.getByRole('link', { name: /Enter Guest Portal/i })).toBeVisible();
    await expect(page.getByText(/Invitation Only|password-protected/i).first()).toBeVisible();
  });
});
