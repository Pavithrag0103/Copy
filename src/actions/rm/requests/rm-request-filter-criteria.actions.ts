import {expect, Locator, Page} from '@playwright/test';
import { RmRequestsFilterCriteriaComponent } from '../../../components/rm/requests/rm-requests-filter-criteria.component';
import { RmCommonActions } from '../common/rm-common.actions';

export class RmRequestsFilterCriteriaActions extends RmRequestsFilterCriteriaComponent {
  rmCommonActions: RmCommonActions;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }

  async checkEssentialElements(): Promise<void> {
    await this.rmCommonActions.waitForLoadState();
    await this.rmCommonActions.validateRegionLabel("Filter Criteria");
    await expect(this.txtSearch, 'Validate Search here input is visible').toBeVisible();
    await expect(this.btnProjectRole, 'Validate Project Role is visible').toBeVisible();
    await expect(this.btnRegion, 'Validate Region button is visible').toBeVisible();
    await expect(this.btnCountry, 'Validate Country button is visible').toBeVisible();
    await expect(this.btnPCode, 'Validate P-Code button is visible').toBeVisible();
    await expect(this.btnSponsor, 'Validate Sponsor button is visible').toBeVisible();
    await expect(this.switchAward, 'Validate Award Type witch is visible').toBeVisible();
    await expect(this.btnSave, 'Validate Save button is visible').toBeVisible();
    await expect(this.tableReport, 'Validate Request Summary Report table is visible').toBeVisible();
  }

  async searchRequest(searchText: string): Promise<void> {
    await this.txtSearch.fill(searchText);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await expect(this.tableReport, "Check in table").toContainText(searchText);
  }

  async goToRequest(row: number): Promise<void> {
    await this.rmCommonActions.clickTableLink(this.tableReport,row,4)
    await this.rmCommonActions.waitForLoadState();
  }

  async goToPreAwardRequest(row: number): Promise<void> {
    await this.rmCommonActions.clickTableLink(this.tableReport,row,2)
    await this.rmCommonActions.waitForLoadState();
  }
}