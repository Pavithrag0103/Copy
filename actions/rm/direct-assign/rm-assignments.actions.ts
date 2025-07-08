import {expect, Locator, Page} from '@playwright/test';
import { RmAssignmentsComponent } from '../../../components/rm/direct-assign/rm-assignments.component';
import {RmCommonActions} from "../common/rm-common.actions";

export class RmAssignmentsActions extends RmAssignmentsComponent {
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
    //Assignment
    await expect(this.tabResource, 'Validate Resource tab is visible').toBeVisible();
    await expect(this.tabProject, 'Validate Project tab is visible').toBeVisible();
    //Assignment - Resource tab
    await this.tabResource.click();
    await expect(this.imageRSearch, 'Validate Search image is visible in Resource Tab').toBeVisible();
    await expect(this.txtRSearch, 'Validate Search input is visible in Resource Tab').toBeVisible();
    await expect(this.btnRSearch, 'Validate Go button is visible in Resource Tab').toBeVisible();
    await expect(this.dropRActions, 'Validate Actions dropdown is visible in Resource Tab').toBeVisible();
    await expect(this.btnRUndo, 'Validate Undo button is visible in Resource Tab').toBeVisible();
    await expect(this.btnRReset, 'Validate Reset button is visible in Resource Tab').toBeVisible();
    await expect(this.btnAddResourceToView, 'Validate Add Resource to View button is visible in Resource Tab').toBeVisible();
    await expect(this.dropRPeriod, 'Validate Select Period dropdown is visible in Resource Tab').toBeVisible();
    await expect(this.dropRAssignedCapacity, 'Validate Assigned/Capacity dropdown is visible in Resource Tab').toBeVisible();
    if (await this.tableRAssigment.isVisible()) {
      await expect(this.tableRAssigment, 'Validate Assignment table is visible in Resource Tab').toBeVisible();
    }
    //Assignment - Project tab
    await this.tabProject.click();
    await expect(this.imagePSearch, 'Validate Search image is visible in Project Tab').toBeVisible();
    await expect(this.txtPSearch, 'Validate Search input is visible in Project Tab').toBeVisible();
    await expect(this.btnPSearch, 'Validate Go button is visible in Project Tab').toBeVisible();
    await expect(this.dropPActions, 'Validate Actions dropdown is visible in Project Tab').toBeVisible();
    await expect(this.btnPUndo, 'Validate Undo button is visible in Project Tab').toBeVisible();
    await expect(this.btnPReset, 'Validate Reset button is visible in Project Tab').toBeVisible();
    await expect(this.btnAddProjectToView, 'Validate Add Project to View button is visible in Project Tab').toBeVisible();
    await expect(this.dropPPeriod, 'Validate Select Period dropdown is visible in Project Tab').toBeVisible();
    await expect(this.dropPAssignedCapacity, 'Validate Assigned/Capacity dropdown is visible in Project Tab').toBeVisible();
    if (await this.tablePAssigment.isVisible()) {
      await expect(this.tablePAssigment, 'Validate Assignment table is visible in Project Tab').toBeVisible();
    }
    //Request Details
    if (await this.tableAssignmentDetails.isVisible()) {
      await expect(this.tableAssignmentDetails, 'Validate Assignment Details table is visible').toBeVisible();
    }
  }

  async goToAssignment(row: number, column: number): Promise<void> {

  }
}