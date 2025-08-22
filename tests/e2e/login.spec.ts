import { test, expect } from '@playwright/test';
import { HeaderPage } from '../../pages/header.page';

test.use({ storageState: 'tests/storage/storage.json' });

test('login session persists and header is visible', async ({ page }) => {
  await page.goto('https://your-app.com/dashboard');

  const header = new HeaderPage(page);
  await header.verifyHeaderIsVisible();
});
