import { Locator, Page } from '@playwright/test';

export class RmAssignmentNotificationsComponent {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}