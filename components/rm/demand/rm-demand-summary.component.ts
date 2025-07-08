import { Locator, Page } from '@playwright/test';

export class RmDemandSummaryComponent {
  readonly page: Page;
  readonly imageSearch: Locator;
  readonly txtSearch: Locator;
  readonly btnSearch: Locator;
  readonly dropRows: Locator;
  readonly dropActions: Locator;
  readonly btnUndo: Locator;
  readonly btnReset: Locator;
  readonly dropProjectDuration: Locator;
  readonly tableDemand: Locator;

  constructor(page: Page) {
    this.page = page;

    this.imageSearch = page.locator('#demand_summary_column_search_root');
    this.txtSearch = page.locator('#demand_summary_search_field');
    this.btnSearch = page.locator('#demand_summary_search_button');
    this.dropRows = page.locator('#demand_summary_row_select');
    this.dropActions = page.locator('#demand_summary_actions_button');
    this.btnUndo = page.locator('#Reset > span.t-Icon.t-Icon--left.fa.fa-undo-arrow');
    this.btnReset = page.locator('#Reset > span.t-Button-label');
    this.dropProjectDuration = page.locator('#P18_YEAR_DROPDOWN');
    this.tableDemand = page.locator('#demand_summary_data_panel > div.a-IRR-tableContainer >' +
      ' div.t-fht-wrapper > div.t-fht-tbody > table.a-IRR-table');
  }
}