import { expect, Page, Locator } from '@playwright/test';
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

  async searchProject(pCode: string, type: string = "POST"): Promise<void> {
    await this.txtPCode.fill(pCode);
    await this.btnSearch.click();
    if(type.toLowerCase() === "pre") {
      await expect(this.tablePreReport, "Check in table").toContainText(pCode);
    } else {
      await expect(this.tableReport, "Check in table").toContainText(pCode);
    }
  }

  async goToProject(pCode: string, type: string = "POST"): Promise<void> {
    let rowCount = await this.tableReport.locator("tr").count();
    (rowCount === 2) ? rowCount -= 1 : null;
    type.toLowerCase() === "pre" ? await this.switchAward.click() : null;
    await this.searchProject(pCode, type);
    await expect(this.tableReport.locator("tr")).not.toHaveCount(rowCount, { timeout: 5000 })
    if(type.toLowerCase() === "pre") {
      await this.rmCommonActions.clickTableCell(this.tablePreReport,2,1);
    } else {
      await this.rmCommonActions.clickTableCell(this.tableReport,2,1);
    }
    await this.rmCommonActions.waitForLoadState();
  }
}