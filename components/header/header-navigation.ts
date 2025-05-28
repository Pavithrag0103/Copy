import { Locator, Page } from '@playwright/test';

export class HeaderNavigationComponent {
  readonly page: Page;
  readonly lnkHome: Locator;
  readonly lnkAllBids: Locator;
  readonly lnkReports: Locator;
  readonly lnkAdmin: Locator;
  readonly btnCreateIntake: Locator;
  readonly txtProjectCode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lnkHome = page.getByTestId('lnk-home');
    this.lnkAllBids = page.getByTestId('lnk-all-bids');
    this.lnkReports = page.getByTestId('lnk-reports');
    this.lnkAdmin = page.getByTestId('lnk-admin');
    this.btnCreateIntake = page.getByTestId('btn-create-intake');
    this.txtProjectCode = page.getByTestId('txt-project-code');
  }
}
