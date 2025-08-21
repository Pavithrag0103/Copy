import { Locator, Page } from '@playwright/test';

export class RmHomeComponent {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}