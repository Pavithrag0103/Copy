import { Page } from '@playwright/test';

export class NavHeader {
  constructor(private page: Page) {}

  async isVisible() {
    return await this.page.locator('header.navbar').isVisible();
  }

  async clickProfile() {
    await this.page.click('button#profile-menu');
  }
}
