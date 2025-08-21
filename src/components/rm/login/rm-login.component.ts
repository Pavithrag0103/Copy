import { Locator, Page } from '@playwright/test';

export class RmLoginComponent {
  readonly page: Page;
  readonly txtUser: Locator;
  readonly lblUser: Locator;
  readonly txtPassword: Locator;
  readonly btnContinue: Locator;
  readonly btnSignIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtUser = page.locator('[name="loginfmt"]'); //*[@id="i0116"]
    this.btnContinue = page.locator('#idSIButton9'); //*[@id="idSIButton9"]
    this.lblUser = page.locator('#displayName'); //*[@id="i0116"]
    this.txtPassword = page.locator('[name="passwd"]'); //*[@id="i0116"]
    this.btnSignIn = page.locator('#idSIButton9'); //*[@id="idSIButton9"]
  }
}
