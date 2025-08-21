import { Locator, Page } from '@playwright/test';

export class RmHrActionsComponent {
  readonly page: Page;
  readonly tabUpcomingTerminations: Locator;
  readonly tabUpcomingLOAS: Locator;
  readonly tabUpcomingNewHires: Locator;
  readonly tabUpcomingTransfers: Locator;
  readonly imageSearch: Locator;
  readonly txtSearch: Locator;
  readonly dropRows: Locator;
  readonly dropActions: Locator;
  readonly btnSearch: Locator;
  readonly btnUndo: Locator;
  readonly btnReset: Locator;
  readonly tableRequest: Locator;

  constructor(page: Page) {
    this.page = page;

    this.tabUpcomingTerminations = page.locator('.t-Tabs-label:has-text("UPCOMING TERMINATIONS")');
    this.tabUpcomingLOAS = page.locator('.t-Tabs-label:has-text("UPCOMING LOAS")');
    this.tabUpcomingNewHires = page.locator('.t-Tabs-label:has-text("UPCOMING NEW HIRES")');
    this.tabUpcomingTransfers = page.locator('.t-Tabs-label:has-text("UPCOMING TRANSFERS")');
    this.imageSearch = page.locator('#REPORT_column_search_root');
    this.txtSearch = page.locator('#REPORT_search_field');
    this.btnSearch = page.locator('#REPORT_search_button');
    this.dropRows = page.locator('#REPORT_row_select');
    this.dropActions = page.locator('#REPORT_actions_button');
    this.btnUndo = page.locator('#Reset > span.t-Icon.t-Icon--left.fa.fa-undo-arrow');
    this.btnReset = page.locator('#Reset > span.t-Button-label');
    this.tableRequest = page.locator('#REPORT_data_panel > div.a-IRR-tableContainer >' +
      ' div.t-fht-wrapper > div.t-fht-tbody > table.a-IRR-table');
  }
}