import { Locator, Page } from '@playwright/test';

export class CreateIntakeComponent {
  readonly page: Page;
  readonly projectCodeInput: Locator;
  readonly opportunityNameInput: Locator;
  readonly sponsorNameInput: Locator;
  readonly searchButton: Locator;
  readonly clearButton: Locator;
  readonly searchResultsNumber: Locator;
  readonly resultProjectCode: Locator;
  readonly resultOpportunityName: Locator;
  readonly resultSponsorName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.projectCodeInput = page.locator('[placeholder="Enter Project Code"]');
    this.opportunityNameInput = page.locator('[placeholder="Enter Opportunity Name"]');
    this.sponsorNameInput = page.locator('[placeholder="Enter Sponsor"]');
    this.searchButton = page.locator('#search_btn_old > span');
    this.clearButton = page.locator('#clear_btn_old > span');
    this.searchResultsNumber = page.locator('#no_result_data_panel > div > table > tbody > tr');
    this.resultProjectCode = page.locator('#no_result_data_panel > div > table > tbody > tr:nth-child(2) > td:nth-child(2)');
    this.resultOpportunityName = page.locator('#no_result_data_panel > div > table > tbody > tr:nth-child(2) > td:nth-child(3)');
    this.resultSponsorName = page.locator('#no_result_data_panel > div > table > tbody > tr:nth-child(2) > td:nth-child(4)');
  }
}
