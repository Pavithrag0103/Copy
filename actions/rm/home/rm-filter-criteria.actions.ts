import { expect, Page } from '@playwright/test';
import { RmFilterCriteriaComponent } from '../../../components/rm/home/rm-filter-criteria.component';
import { RmCommonActions } from '../common/rm-common.actions';

export class RmFilterCriteriaActions extends RmFilterCriteriaComponent {
  rmCommonActions: RmCommonActions;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }

  async checkEssentialElements(): Promise<void> {
    await this.rmCommonActions.waitForLoadState();
    await this.rmCommonActions.validateRegionLabel("Filter Criteria");
    await this.rmCommonActions.validateFormLabel("P-Code");
    await expect(this.txtPCode, 'Validate P-Code input is visible').toBeVisible();
    await this.rmCommonActions.validateFormLabel("Sponsor Name");
    await expect(this.txtSponsorName, 'Validate Sponsor Name input is visible').toBeVisible();
    await expect(this.btnSearch, 'Validate Search button is visible').toBeVisible();
    await expect(this.txtSearchReport, 'Validate Report Filter input is visible').toBeVisible();
    await expect(this.btnSearchReport, 'Validate Go button is visible').toBeVisible();
    await expect(this.tableReport, 'Validate Report table is visible').toBeVisible();
  }

  async searchProject(pCode: string): Promise<void> {
    await this.txtPCode.fill(pCode);
    await this.btnSearch.click();
    await expect(this.tableReport, "Check in table").toContainText(pCode);
  }

  async goToProject(pCode: string): Promise<void> {
    await this.searchProject(pCode);
    await this.rmCommonActions.clickTableCell(this.tableReport,2,1)
    await this.rmCommonActions.waitForLoadState();
  }
}