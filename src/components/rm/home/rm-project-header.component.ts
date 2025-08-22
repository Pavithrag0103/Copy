import { Locator, Page } from '@playwright/test';

export class RmProjectHeaderComponent {
  readonly page: Page;
  readonly filterSelectProject: Locator;
  readonly btnProjectHeaderShowHide: Locator;
  readonly containerProjectStatus: Locator;
  readonly containerStartDate: Locator;
  readonly containerEndDate: Locator;
  readonly containerEstimatedEndDate: Locator;
  readonly containerLOB: Locator;
  readonly containerTA: Locator;
  readonly containerStudyPhase: Locator;
  readonly containerStudyPopulation: Locator;
  readonly containerOpsVP: Locator;
  readonly containerResourcingNeeds: Locator;
  //readonly container: Locator;
  readonly btnViewMore: Locator;
  readonly btnViewLess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterSelectProject = page.locator('#P0_RM_PROJECT_ID_1');
    this.btnProjectHeaderShowHide = page.locator('#pro_header_btn > span');
    this.containerProjectStatus = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div > span >' +
      ' span#border_style.Child_Items_class.fixed-width');
    this.containerStartDate = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div > span > span.Child_Items_class.sdate_con.pdate_con');
    this.containerEndDate = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div > span > span.Child_Items_class.edate_con.pdate_con');
    this.containerEstimatedEndDate = page.locator('span#border_style.Child_Items_class.eedate_con.pdate_con');
    this.containerLOB = page.locator('span#border_style.Child_Items_class.LOBSB');
    this.containerTA = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div > span > span.Child_Items_class.TISI');
    this.containerStudyPhase = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div > span > span.Child_Items_class.SP');
    this.containerStudyPopulation = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div > span > span.Child_Items_class.S_POP');
    this.containerOpsVP = page.locator('span#border_style.Child_Items_class_1.last_item_width');
    this.containerResourcingNeeds = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div > div > span > span.Child_Items_class_1.half_result');
    //this.container = page.locator('span.Child_Items_class_1.full_result');
    this.btnViewMore = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div.overall_con > button.view_more');
    this.btnViewLess = page.locator('#BRD_PROJECT_HEADER > a-dynamic-content > div > div > button.view_less');
  }
}