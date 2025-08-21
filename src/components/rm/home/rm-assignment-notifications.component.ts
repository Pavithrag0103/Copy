import { Locator, Page } from '@playwright/test';

export class RmAssignmentNotificationsComponent {
  readonly page: Page;
  //Email Acknowledgements
  readonly txtEASearch: Locator;
  readonly imgEASearch: Locator;
  readonly btnEAGo: Locator;
  readonly dropEARows: Locator;
  readonly dropEAActions: Locator;
  readonly btnEAClear: Locator;
  readonly tableEmailAcknowledgements: Locator;
  //Requests Marked Unfulfilled
  readonly txtRUSearch: Locator;
  readonly imgRUSearch: Locator;
  readonly btnRUGo: Locator;
  readonly dropRURows: Locator;
  readonly dropRUActions: Locator;
  readonly btnRUClear: Locator;
  readonly tableRequestsMarkedUnfulfilled: Locator;

  constructor(page: Page) {
    this.page = page;
    //Email Acknowledgements
    this.txtEASearch = this.page.locator('#email_ack_report_search_field');
    this.imgEASearch = this.page.locator('#email_ack_report_column_search_root');
    this.btnEAGo = this.page.locator('#email_ack_report_search_button');
    this.dropEARows = this.page.locator('#email_ack_report_row_select');
    this.dropEAActions = this.page.locator('#email_ack_report_actions_button');
    this.btnEAClear = this.page.locator('#B11697339075384790058');
    //#email_ack_report_content
    this.tableEmailAcknowledgements = this.page.locator('#email_ack_report_data_panel');
    //Requests Marked Unfulfilled
    this.txtRUSearch = this.page.locator('#RMU_search_field');
    this.imgRUSearch = this.page.locator('#RMU_column_search_root');
    this.btnRUGo = this.page.locator('#RMU_search_button');
    this.dropRURows = this.page.locator('#RMU_row_select');
    this.dropRUActions = this.page.locator('#RMU_actions_button');
    this.btnRUClear = this.page.locator('#B11513669484080997153');
    //this.tableRequestsMarkedUnfulfilled = this.page.locator('#RMU_content');
    this.tableRequestsMarkedUnfulfilled = this.page.locator('#RMU_data_panel');
  }
}