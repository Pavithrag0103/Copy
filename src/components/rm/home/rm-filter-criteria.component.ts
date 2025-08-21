import { Locator, Page } from '@playwright/test';

export class RmFilterCriteriaComponent {
  readonly page: Page;
  readonly txtPCode: Locator;
  readonly txtSponsorName: Locator;
  readonly btnClearSearch: Locator;
  readonly btnSearch: Locator;
  readonly switchAward: Locator;
  readonly txtSearchReport: Locator;
  readonly btnSearchReport: Locator;
  readonly tableReport: Locator;
  readonly tablePreReport: Locator;


  constructor(page: Page) {
    this.page = page;
    this.txtPCode = page.locator('#P10_UPC_input');
    this.txtSponsorName = page.locator('#P10_SPONSOR_NAME');
    this.btnClearSearch = page.locator('#CLEAR');
    this.btnSearch = page.locator('#SEARCH');
    this.switchAward = page.locator('#P10_SWITCH_CONTAINER > div >  div > span.a-Switch' +
      ' > span.a-Switch-toggle'); //#P10_SWITCH_PRE >

    this.txtSearchReport = page.locator('#REPORT_search_field');
    this.btnSearchReport = page.locator('#REPORT_search_button');
    this.tableReport = page.locator('#REPORT_data_panel > div.a-IRR-tableContainer >' +
      ' table.a-IRR-table');
    this.tablePreReport = page.locator('#REPORT_PRE_data_panel > div.a-IRR-tableContainer >' +
      ' table.a-IRR-table');
  }
}