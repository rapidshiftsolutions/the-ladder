import { defineConfig, devices } from '@playwright/test';

/**
 * QA config: runs the suite against an already-running server
 * (BASE_URL) instead of spawning a dev server.
 */
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  workers: 2,
  timeout: 45 * 1000,
  expect: { timeout: 10 * 1000 },
  reporter: [['list']],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3100',
    trace: 'off',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 720 } },
    },
  ],
});
