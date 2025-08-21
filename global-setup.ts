import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { env_config, env_configRM, envParams } from './src/utils/config';
import { reportUtils } from '@helpers/utils.helper';

async function globalSetup(config: FullConfig) {
 /*
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const login = new LoginPage(page);
  await login.login(env_config.credentials.username, env_config.credentials.password);

  await page.context().storageState({ path: 'tests/storage/storage.json' });
  await browser.close();

  */
  if(envParams.cleanReportHistory === "true")
  {
    await reportUtils.cleanReports();
  }
}

export default globalSetup;