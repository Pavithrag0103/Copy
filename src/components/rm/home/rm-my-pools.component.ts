import { Locator, Page } from '@playwright/test';

export class RmMyPoolsComponent {
  readonly page: Page;
  readonly tabOverAssignedResources: Locator;
  readonly tabUnderAssignedResources: Locator;
  readonly tabPendingConversions: Locator;
  readonly tabEmailAcknowledgements: Locator;
  readonly dropOARPool: Locator;
  readonly txtOARSearchPool: Locator;
  readonly tablePool: Locator;
  readonly imageOARSearch: Locator;
  readonly txtOARSearch: Locator;
  readonly dropOARRows: Locator;
  readonly dropOARActions: Locator;
  readonly btnOARSearch: Locator;
  readonly dropUARPool: Locator;
  readonly txtUARSearchPool: Locator;
  //readonly tableUARPool: Locator;
  readonly imageUARSearch: Locator;
  readonly txtUARSearch: Locator;
  readonly dropUARRows: Locator;
  readonly dropUARActions: Locator;
  readonly btnUARSearch: Locator;
  readonly imagePCSearch: Locator;
  readonly txtPCSearch: Locator;
  readonly dropPCRows: Locator;
  readonly dropPCActions: Locator;
  readonly btnPCSearch: Locator;
  readonly imageEASearch: Locator;
  readonly txtEASearch: Locator;
  readonly dropEARows: Locator;
  readonly dropEAActions: Locator;
  readonly btnEASearch: Locator;
  readonly btnUndo: Locator;
  readonly btnReset: Locator;
  readonly tableOARResultPool: Locator;
  readonly tableUARResultPool: Locator;
  readonly tablePCResultPool: Locator;
  readonly tableEAResultPool: Locator;

  constructor(page: Page) {
    this.page = page;

    this.tabOverAssignedResources = page.locator('.t-Tabs-label:has-text("OVER ASSIGNED RESOURCES")');
    this.tabUnderAssignedResources = page.locator('.t-Tabs-label:has-text("UNDER ASSIGNED RESOURCES")');
    this.tabPendingConversions = page.locator('.t-Tabs-label:has-text("PENDING CONVERSIONS")');
    this.tabEmailAcknowledgements = page.locator('.t-Tabs-label:has-text("EMAIL ACKNOWLEDGEMENTS")');
    this.dropOARPool = page.locator('#P130_POOL_CONTAINER');
    this.txtOARSearchPool = page.locator('#P130_POOL');
    this.tablePool = page.locator(' table.a-GV-table').nth(1);
    this.imageOARSearch = page.locator('#OAR_column_search_root');
    this.txtOARSearch = page.locator('#OAR_search_field');
    this.btnOARSearch = page.locator('#OAR_search_button');
    this.dropOARRows = page.locator('#OAR_row_select');
    this.dropOARActions = page.locator('#OAR_actions_button');
    this.dropUARPool = page.locator('#P131_POOL_CONTAINER');
    this.txtUARSearchPool = page.locator('#P131_POOL');
    //this.tablePool = page.locator('.t-Tabs-label:has-text("EMAIL ACKNOWLEDGEMENTS")');
    this.imageUARSearch = page.locator('#UAR_column_search_root');
    this.txtUARSearch = page.locator('#UAR_search_field');
    this.btnUARSearch = page.locator('#UAR_search_button');
    this.dropUARRows = page.locator('#UAR_row_select');
    this.dropUARActions = page.locator('#UAR_actions_button');
    this.imagePCSearch = page.locator('#PC_column_search_root');
    this.txtPCSearch = page.locator('#PC_search_field');
    this.btnPCSearch = page.locator('#PC_search_button');
    this.dropPCRows = page.locator('#PC_row_select');
    this.dropPCActions = page.locator('#PC_actions_button');
    this.imageEASearch = page.locator('#pool_emal_ack_report_column_search_root');
    this.txtEASearch = page.locator('#pool_emal_ack_report_search_field');
    this.btnEASearch = page.locator('#pool_emal_ack_report_search_button');
    this.dropEARows = page.locator('#pool_emal_ack_report_row_select');
    this.dropEAActions = page.locator('#pool_emal_ack_report_actions_button');
    this.btnUndo = page.locator('button.t-Button.t-Button--icon.reset_report_btn >' +
      ' span.t-Icon.t-Icon--left.fa.fa-undo-arrow');
    this.btnReset = page.locator('button.reset_report_btn > span.t-Button-label');
    this.tableOARResultPool = page.locator('#OAR_data_panel > div.a-IRR-tableContainer >' +
      ' div.t-fht-wrapper > div.t-fht-tbody > table.a-IRR-table');
    this.tableUARResultPool = page.locator('#UAR_data_panel > div.a-IRR-tableContainer >' +
      ' div.t-fht-wrapper > div.t-fht-tbody > table.a-IRR-table');
    this.tablePCResultPool = page.locator('#PC_data_panel > div.a-IRR-tableContainer >' +
      ' div.t-fht-wrapper > div.t-fht-tbody > table.a-IRR-table');
    this.tableEAResultPool = page.locator('#pool_emal_ack_report_data_panel >' +
      ' div.a-IRR-tableContainer >' +
      ' div.t-fht-wrapper > div.t-fht-tbody > table.a-IRR-table');
  }
}