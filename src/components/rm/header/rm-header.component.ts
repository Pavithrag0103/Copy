import { Locator, Page } from '@playwright/test';

export class RmHeaderComponent {
  readonly page: Page;
  readonly imgLogo: Locator;
  readonly lblHeader: Locator;
  readonly lblSubHeader: Locator;
  readonly tabResourcing: Locator;
  readonly btnEnvironment: Locator;
  readonly btnAppSelector: Locator;
  readonly btnNotification: Locator;
  readonly btnUser: Locator;
  readonly lnkHome: Locator;
  readonly lnkAdmin: Locator;
  readonly btnSignInAgain: Locator;

  constructor(page: Page) {
    this.page = page;
    this.imgLogo = page.locator('img.apex-logo-img');
    this.lblHeader = page.locator('div.app_name').locator('div.Header_text');
    this.lblSubHeader = page.locator('div.app_name').locator('div.sub_text');
    this.tabResourcing = page.locator('#RM_TAB');
    this.btnEnvironment = page.locator('.Envir_item_class');
    this.btnAppSelector = page.locator('#dropdownButton.RXDS_APP_NAV');
    this.btnNotification = page.locator('li.appNotification').locator('.t-Button');
    this.btnUser = page.locator('li.User_Icon_Class').locator('.t-Button');
    this.lnkHome = page.locator('.t-Tabs-label:has-text("Home")');
    this.lnkAdmin = page.locator('.t-Tabs-label:has-text("Admin")');
    this.btnSignInAgain = page.locator('.js-confirmBtn.ui-button:has-text("Home")');
  }
}
