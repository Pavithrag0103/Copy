import { Locator, Page } from '@playwright/test';

export class RmCommonComponent {
  readonly page: Page;
  readonly breadcrumbLabel: Locator;
  readonly regionHeader: Locator;
  readonly regionLabel: Locator;
  readonly formLabel: Locator;
  readonly breadcrumbHeader: Locator;
  readonly breadcrumbHeaderL1: Locator;
  readonly breadcrumbHeaderL2: Locator;
  readonly breadcrumbHeaderL3: Locator;
  readonly breadcrumbHeaderL4: Locator;
  readonly breadcrumbHeaderL5: Locator;
  readonly breadcrumbHeaderL6: Locator;
  readonly dialogTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.breadcrumbLabel = page.locator('ul > li.t-Breadcrumb-item.is-active > h1');
    this.regionHeader = page.locator('h2#header_heading > span');
    this.regionLabel = page.locator('h2.t-Region-title');
    this.formLabel = page.locator('label.t-Form-label');
    this.breadcrumbHeader = page.locator('#admin_card_breadcrumb > div.rxds-Breadcrump-Region >' +
      ' div.rxds-Breadcrump-Parent > ul.t-Breadcrumb > li.t-Breadcrumb-item');
    this.breadcrumbHeaderL1 = this.breadcrumbHeader.nth(0);
    this.breadcrumbHeaderL2 = this.breadcrumbHeader.nth(1);
    this.breadcrumbHeaderL3 = this.breadcrumbHeader.nth(2);
    this.breadcrumbHeaderL4 = this.breadcrumbHeader.nth(3);
    this.breadcrumbHeaderL5 = this.breadcrumbHeader.nth(4);
    this.breadcrumbHeaderL6 = this.breadcrumbHeader.nth(5);
    this.dialogTitle = page.locator('h1.ui-dialog-title');
  }
}