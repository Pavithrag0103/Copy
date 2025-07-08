import {expect, Locator, Page} from '@playwright/test';
import { RmDemandSummaryComponent } from '../../../components/rm/demand/rm-demand-summary.component';
import {RmCommonActions} from "../common/rm-common.actions";

export class RmDemandSummaryActions extends RmDemandSummaryComponent {
  rmCommonActions: RmCommonActions;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }

  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.page.goto(dynamicUrl);
    await this.page.waitForLoadState('networkidle');
  }

  async checkEssentialElements(): Promise<void> {
    await this.rmCommonActions.waitForLoadState();
    await expect(this.imageSearch, 'Column search is visible').toBeVisible();
    await expect(this.txtSearch, 'Search input is visible').toBeVisible();
    await expect(this.btnSearch, 'Search button is visible').toBeVisible();
    await expect(this.dropRows, 'Rows dropdown is visible').toBeVisible();
    await expect(this.dropActions, 'Actions dropdown is visible').toBeVisible();
    await expect(this.btnUndo, 'Undo button is visible').toBeVisible();
    await expect(this.btnReset, 'RESET button is visible').toBeVisible();
    await expect(this.tableDemand, 'Demand Summary table is visible').toBeVisible();
  }

  async goToDemand(row: number, column: number): Promise<void> {
    await this.rmCommonActions.clickTableLink(this.tableDemand, row, column);
    await this.page.waitForLoadState('networkidle');
  }
}