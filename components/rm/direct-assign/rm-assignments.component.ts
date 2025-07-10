import { Locator, Page } from '@playwright/test';

export class RmAssignmentsComponent {
  readonly page: Page;
  //Assignment
  readonly tabResource: Locator;
  readonly tabProject: Locator;
  //Assignment - Resource tab
  readonly imageRSearch: Locator;
  readonly txtRSearch: Locator;
  readonly btnRSearch: Locator;
  readonly dropRActions: Locator;
  readonly btnRUndo: Locator;
  readonly btnRReset: Locator;
  readonly btnAddResourceToView: Locator;
  readonly dropRPeriod: Locator;
  readonly dropRAssignedCapacity: Locator;
  readonly tableRAssigment: Locator;
  //Assignment - Project tab
  readonly imagePSearch: Locator;
  readonly txtPSearch: Locator;
  readonly btnPSearch: Locator;
  readonly dropPActions: Locator;
  readonly btnPUndo: Locator;
  readonly btnPReset: Locator;
  readonly btnAddProjectToView: Locator;
  readonly dropPPeriod: Locator;
  readonly dropPAssignedCapacity: Locator;
  readonly tablePAssigment: Locator;
  //Request Details
  readonly tableAssignmentDetails: Locator;

  constructor(page: Page) {
    this.page = page;
    //Assignment
    this.tabResource = page.locator('#SR_resourceTab_tab');
    this.tabProject = page.locator('#SR_projectTab_tab');
    //Assignment - Resource tab
    this.imageRSearch = page.locator('#Resource_grid_ig_toolbar_column_filter_button');
    this.txtRSearch = page.locator('#Resource_grid_ig_toolbar_search_field');
    this.btnRSearch = page.locator('#Resource_grid_ig_toolbar > div.a-Toolbar-groupContainer.a-Toolbar-groupContainer--start > div.a-Toolbar-group.a-Toolbar-group--search.a-Toolbar-group--together > button:nth-child(3)');
    this.dropRActions = page.locator('#Resource_grid_ig_toolbar_actions_button');
    this.btnRUndo = page.locator('#reset > span.t-Icon.t-Icon--left.fa.fa-undo-arrow');
    this.btnRReset = page.locator('#reset > span.t-Button-label');
    this.btnAddResourceToView = page.locator('#Addresource');
    this.dropRPeriod = page.locator('#P118_YEAR');
    this.dropRAssignedCapacity = page.locator('#P118_ASSIGNED_CAPACITY');
    this.tableRAssigment = page.locator('#Resource_grid_ig_grid_vc > div.a-GV-bdy > div.a-GV-w-scroll > table.a-GV-table');
    //Assignment - Project tab
    this.imagePSearch = page.locator('#project_grid_ig_toolbar_column_filter_button');
    this.txtPSearch = page.locator('#project_grid_ig_toolbar_search_field');
    this.btnPSearch = page.locator('#project_grid_ig_toolbar > div.a-Toolbar-groupContainer.a-Toolbar-groupContainer--start > div.a-Toolbar-group.a-Toolbar-group--search.a-Toolbar-group--together > button:nth-child(3)');
    this.dropPActions = page.locator('#project_grid_ig_toolbar_actions_button');
    this.btnPUndo = page.locator('#reset_p > span.t-Icon.t-Icon--left.fa.fa-undo-arrow');
    this.btnPReset = page.locator('#reset_p > span.t-Button-label');
    this.btnAddProjectToView = page.locator('#Addproject');
    this.dropPPeriod = page.locator('#P118_YEAR_PROJECT');
    this.dropPAssignedCapacity = page.locator('#P118_ASSIGNED_CAPACITY_PROJECT');
    this.tablePAssigment = page.locator('#project_grid_ig_grid_vc > div.a-GV-bdy > div.a-GV-w-scroll > table.a-GV-table');
    //Request Details
    this.tableAssignmentDetails = page.locator('#assignmentDetails > div.t-Region-bodyWrap');
  }
}