import { Page, expect } from '@playwright/test';
import { LoginActions } from '../actions/login/login.actions';
import { env_config } from '../utils/config';
import { setSessionData } from '../utils/session-data';

export class LoginPage {
  form: LoginActions;

  constructor(private page: Page) {
    this.form = new LoginActions(page);
  }

  async goto() {
    await this.page.goto(env_config.loginUrl);
  }

  async login(username: string, password: string) {
    await this.goto();
    await this.form.fillUsername(username);
    await this.form.fillPassword(password);
    await this.form.submit();
    await this.page.waitForLoadState('networkidle');
    await expect(this.page).toHaveTitle('Home');
    setSessionData(this.page.url());
  }
}
