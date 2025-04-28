import { Page } from '@playwright/test';

export class FormLogin {
  constructor(private page: Page) {}

  async fillUsername(username: string) {
    await this.page.fill('#username', username);
  }

  async fillPassword(password: string) {
    await this.page.fill('#password', password);
  }

  async submit() {
    await this.page.click('button[type="submit"]');
  }
}
