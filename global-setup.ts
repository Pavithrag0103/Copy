import { chromium, FullConfig } from '@playwright/test';
//import { LoginPage } from './pages/login.page';

async function globalSetup(config: FullConfig) {
  //const browser = await chromium.launch();
  //const page = await browser.newPage();

  //const login = new LoginPage(page);
 // await login.login('test.user', 'securePassword123'); //This is just an example.

  //await page.context().storageState({ path: 'tests/storage/storage.json' });
  //await browser.close();
}

export default globalSetup;
