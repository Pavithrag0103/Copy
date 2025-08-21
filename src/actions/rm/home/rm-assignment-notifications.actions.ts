import {expect, Locator, Page} from '@playwright/test';
import { RmAssignmentNotificationsComponent } from '../../../components/rm/home/rm-assignment-notifications.component';
import {RmCommonActions} from "../common/rm-common.actions";

export class RmAssignmentNotificationsActions extends RmAssignmentNotificationsComponent {
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
    //Email Acknowledgements
    await expect(this.txtEASearch, 'Email Acknowledgements Search input is visible').toBeVisible();
    await expect(this.imgEASearch, 'Email Acknowledgements Search icon is visible').toBeVisible();
    await expect(this.btnEAGo, 'Email Acknowledgements Go button is visible').toBeVisible();
    await expect(this.dropEARows, 'Email Acknowledgements Rows dropdown is visible').toBeVisible();
    await expect(this.dropEAActions, 'Email Acknowledgements Actions dropdown is visible').toBeVisible();
    await expect(this.btnEAClear, 'Email Acknowledgements Clear button is visible').toBeVisible();
    await expect(this.tableEmailAcknowledgements, 'Email Acknowledgements table is visible').toBeVisible();
    //Requests Marked Unfulfilled
    await expect(this.txtRUSearch, 'Requests Marked Unfulfilled Search input is visible').toBeVisible();
    await expect(this.imgRUSearch, 'Requests Marked Unfulfilled Search icon is visible').toBeVisible();
    await expect(this.btnRUGo, 'Requests Marked Unfulfilled Go button is visible').toBeVisible();
    await expect(this.dropRURows, 'Requests Marked Unfulfilled Rows dropdown is visible').toBeVisible();
    await expect(this.dropRUActions, 'Requests Marked Unfulfilled Actions dropdown is visible').toBeVisible();
    await expect(this.btnRUClear, 'Requests Marked Unfulfilled Clear button is visible').toBeVisible();
    await expect(this.tableRequestsMarkedUnfulfilled, 'Requests Marked Unfulfilled table is visible').toBeVisible();
  }
}