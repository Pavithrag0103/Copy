import {expect, Locator, Page} from '@playwright/test';
import { RmMyRequestsComponent } from '../../../components/rm/home/rm-my-requests.component';
import {RmCommonActions} from "../common/rm-common.actions";

export class RmMyRequestsActions extends RmMyRequestsComponent {
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
    await expect(this.tabMyRequests, 'My Requests tab is visible').toBeVisible();
    await expect(this.tabMyOverdueRequests, 'My Overdue Requests tab is visible').toBeVisible();
    await expect(this.switchAwardType, 'Award Type switch is visible').toBeVisible();
    await expect(this.btnSave, 'Save button is visible').toBeVisible();
    await expect(this.tableRequest, 'My Requests table is visible').toBeVisible();
    await this.tabMyOverdueRequests.click();
    await expect(this.tableRequest, 'My Overdue Requests table is visible').toBeVisible();

  }
}