import {expect, Locator, Page} from '@playwright/test';
import { RmHrActionsComponent } from '../../../components/rm/home/rm-hr-actions.component';
import {RmCommonActions} from "../common/rm-common.actions";

export class RmHrActionsActions extends RmHrActionsComponent {
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

    await expect(this.tabUpcomingTerminations, 'Upcoming Terminations tab is visible').toBeVisible();
    await expect(this.tabUpcomingLOAS, 'Upcoming LOAS tab is visible').toBeVisible();
    await expect(this.tabUpcomingNewHires, 'Upcoming New Hires tab is visible').toBeVisible();
    await expect(this.tabUpcomingTransfers, 'Upcoming Transfers tab is visible').toBeVisible();
    await expect(this.imageSearch, 'Column search is visible').toBeVisible();
    await expect(this.txtSearch, 'Search input is visible').toBeVisible();
    await expect(this.btnSearch, 'Search button is visible').toBeVisible();
    await expect(this.dropRows, 'Rows dropdown is visible').toBeVisible();
    await expect(this.dropActions, 'Actions dropdown is visible').toBeVisible();
    await expect(this.btnUndo, 'Undo button is visible').toBeVisible();
    await expect(this.btnReset, 'RESET button is visible').toBeVisible();
    await expect(this.tableRequest, 'Upcoming Terminations table is visible').toBeVisible();
    await this.tabUpcomingLOAS.click();
    await this.rmCommonActions.waitForLoadState();
        await expect(this.tableRequest, 'Upcoming LOAS table is visible').toBeVisible();
    await this.tabUpcomingNewHires.click();
    await this.rmCommonActions.waitForLoadState();
    await expect(this.tableRequest, 'Upcoming New Hires table is visible').toBeVisible();
    await this.tabUpcomingTransfers.click();
    await this.rmCommonActions.waitForLoadState();
    await expect(this.tableRequest, 'Upcoming Transfers table is visible').toBeVisible();

  }
}