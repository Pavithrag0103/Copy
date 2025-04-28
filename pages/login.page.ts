import { Page } from '@playwright/test';
import { FormLogin } from '../components/login/form-login';

export class LoginPage {
  form: FormLogin;

  constructor(private page: Page) {
    this.form = new FormLogin(page);
  }

  async goto() {
    await this.page.goto('https://your-app.com/login');
  }

  async login(username: string, password: string) {
    await this.goto();
    await this.form.fillUsername(username);
    await this.form.fillPassword(password);
    await this.form.submit();
    await this.page.waitForURL('**/dashboard');
  }
}
