import { Locator, Page } from '@playwright/test';

export class RmMyRequestsComponent {
  readonly page: Page;
  readonly tabMyRequests: Locator;
  readonly tabMyOverdueRequests: Locator;
  readonly switchAwardType: Locator;
  readonly btnSave: Locator;
  readonly tableRequest: Locator;

  constructor(page: Page) {
    this.page = page;

    this.tabMyRequests = page.locator('.t-Tabs-label:has-text("MY REQUESTS")');
    this.tabMyOverdueRequests = page.locator('.t-Tabs-label:has-text("MY OVERDUE REQUESTS")');
    this.switchAwardType = page.locator('span.a-Switch-toggle');
    this.btnSave = page.locator('#Save');
    this.tableRequest = page.locator('#Request_Report_Grid_ig_grid_vc > div.a-GV-bdy > ' +
      'div.a-GV-w-scroll > table.a-GV-table');
  }

}