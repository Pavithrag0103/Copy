import { Locator, Page } from '@playwright/test';

export class RmProjectHeaderComponent {
  readonly page: Page;
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
  readonly container: Locator;
  readonly btnViewMore: Locator;
  readonly btnViewLess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.containerProjectStatus = page.locator('span.Child_Items_class.fixed-width');
    this.containerStartDate = page.locator('span.Child_Items_class.sdate_con');
    this.containerEndDate = page.locator('span.Child_Items_class.edate_con');
    this.containerEstimatedEndDate = page.locator('span.Child_Items_class.eedate_con');
    this.containerLOB = page.locator('span.Child_Items_class.LOBSB');
    this.containerTA = page.locator('span.Child_Items_class.TISI');
    this.containerStudyPhase = page.locator('span.Child_Items_class.SP');
    this.containerStudyPopulation = page.locator('span.Child_Items_class.S_POP');
    this.containerOpsVP = page.locator('span.Child_Items_class_1.last_item_width');
    this.containerResourcingNeeds = page.locator('span.Child_Items_class_1.half_result');
    this.container = page.locator('span.Child_Items_class_1.full_result');
    this.btnViewMore = page.locator('div.overall_con > button.view_more');
    this.btnViewLess = page.locator('button.view_less');
  }
}