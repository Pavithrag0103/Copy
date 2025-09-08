import * as dotenv from 'dotenv';
import * as path from 'path';
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import { env_configRM } from './src/utils/config'

const env = process.env.ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

export default defineConfig({
  testDir: './src/tests',
  outputDir: 'artifact/test-results',
  globalSetup: require.resolve('./global-setup'),
  timeout: 30 * 1000,
  expect: { timeout: 30000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [
    ['html', { outputFolder: 'artifact/report/playwright-results', open: 'on-end' }],
    ['allure-playwright', { resultsDir: 'artifact/report/allure-results', detail: true }],
  ],
  use: {
    baseURL: env_configRM.baseUrl, //process.env.BASE_URL,
    storageState: env_configRM.storage ?? '' + 'storageState.json',
    headless: false,
    //viewport: { width: 1920, height: 1080 },
    viewport: { width: 1500, height: 700 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'on',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'Microsoft Edge', use: { channel: 'msedge' } },
    //{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    //{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    //{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  outputDir: 'test-results/',
});
