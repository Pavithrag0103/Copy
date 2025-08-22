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
  readonly dataPanelDemand: Locator;
  readonly tableDemand: Locator;
  readonly rowTotal: Locator;
  readonly firstPage: Locator;
  readonly prevPage: Locator;
  readonly pageList: Locator;
  readonly nextPage: Locator;
  readonly lastPage: Locator;
  //Actions menu options
  readonly btnMenuFilter: Locator;
  readonly btnMenuDownload: Locator;
  //Download window
  readonly btnCSV: Locator;
  readonly btnXLS: Locator;
  readonly switchRichText: Locator;
  readonly btnCancel: Locator;
  readonly btnDownload: Locator;

  constructor(page: Page) {
    this.page = page;

    this.imageSearch = page.locator('#demand_summary_column_search_root, #pre_award_intake_ig_toolbar_column_filter_button');
    this.txtSearch = page.locator('#demand_summary_search_field, #pre_award_intake_ig_toolbar_search_field');
    this.btnSearch = page.locator('#demand_summary_search_button, span.a-Button-label', { hasText: 'Go' });//#pre_award_intake_ig_toolbar > div.a-Toolbar-groupContainer.a-Toolbar-groupContainer--start > div.a-Toolbar-group.a-Toolbar-group--search.a-Toolbar-group--together > button:nth-child(3) > span');
    this.dropRows = page.locator('#demand_summary_row_select');
    this.dropActions = page.locator('#demand_summary_actions_button, #pre_award_intake_ig_toolbar_actions_button');
    this.btnUndo = page.locator('#Reset > span.t-Icon.t-Icon--left.fa.fa-undo-arrow');
    this.btnReset = page.locator('#Reset > span.a-Button-label');
    this.dropProjectDuration = page.locator('#P18_YEAR_DROPDOWN');
    this.dataPanelDemand = page.locator('#demand_summary_data_panel, #pre_award_intake_ig_content_container');
    this.tableDemand = this.dataPanelDemand.locator('div.a-IRR-tableContainer > div.t-fht-wrapper' +
      ' > div.t-fht-tbody > table.a-IRR-table, #pre_award_intake_ig_grid_vc > div.a-GV-bdy > div.a-GV-w-scroll > table');
    this.rowTotal = this.dataPanelDemand.locator('div.a-IRR-paginationWrap.a-IRR-paginationWrap--bottom > ul > li:nth-child(1) > span');
    this.firstPage = this.dataPanelDemand.locator('div.a-IRR-paginationWrap.a-IRR-paginationWrap--bottom > ul > li:nth-child(2) > button > span');
    this.prevPage = this.dataPanelDemand.locator('div.a-IRR-paginationWrap.a-IRR-paginationWrap--bottom > ul > li:nth-child(3) > button > span');
    this.pageList = this.dataPanelDemand.locator('div.a-IRR-paginationWrap.a-IRR-paginationWrap--bottom > ul > li:nth-child(3) > select');
    this.nextPage = this.dataPanelDemand.locator('div.a-IRR-paginationWrap.a-IRR-paginationWrap--bottom > ul > li:nth-child(4) > button > span');
    this.lastPage = this.dataPanelDemand.locator('div.a-IRR-paginationWrap.a-IRR-paginationWrap--bottom > ul > li:nth-child(5) > button > span');
    //Actions menu options
    this.btnMenuFilter = page.locator('#demand_summary_actions_menu_2i');
    this.btnMenuDownload = page.locator('#demand_summary_actions_menu_12i');
    //Download window
    this.btnCSV = page.locator('#demand_summary_download_formats > li:nth-child(1)');
    this.btnXLS = page.locator('#demand_summary_download_formats > li:nth-child(2)');
    this.switchRichText = page.locator('#demand_summary_strip_rich_text');
    this.btnCancel = page.locator('#t_PageBody > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.a-IRR-dialog.a-IRR-dialog--download.ui-dialog-buttons.ui-draggable.ui-resizable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(1)');
    this.btnDownload = page.locator('#t_PageBody > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.a-IRR-dialog.a-IRR-dialog--download.ui-dialog-buttons.ui-draggable.ui-resizable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button.ui-button--hot.ui-button.ui-corner-all.ui-widget');
  }
}