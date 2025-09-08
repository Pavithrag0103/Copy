import { Locator, Page } from '@playwright/test';

export class RmMyProjectsComponent {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}