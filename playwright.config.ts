import * as dotenv from 'dotenv';
import * as path from 'path';
import { defineConfig, devices } from '@playwright/test';

const env = process.env.ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

export default defineConfig({
  testDir: './tests',
  globalSetup: require.resolve('./global-setup'),
  timeout: 30 * 1000,
  expect: { timeout: 30000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    storageState: 'storageState.json',
    headless: false,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Microsoft Edge', use: { channel: 'msedge' } },
  ],
  outputDir: 'test-results/',
});
