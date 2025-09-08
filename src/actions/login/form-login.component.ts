import { Page, Locator } from '@playwright/test';

export class FormLogin {
  readonly textUsername: Locator;
  readonly textPassword: Locator;
  readonly btnSignin: Locator;

  constructor(page: Page) {
    this.textUsername = page.locator('[placeholder="Username"]');
    this.textPassword = page.locator('[placeholder="Password"]');
    this.btnSignin = page.locator('.t-Login-buttons>button');
  }

}
