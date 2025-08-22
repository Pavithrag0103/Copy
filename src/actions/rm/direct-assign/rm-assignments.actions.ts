import {expect, Locator, Page} from '@playwright/test';
import { RmAssignmentsComponent } from '@components/rm/direct-assign/rm-assignments.component';
import {RmCommonActions} from "../common/rm-common.actions";
import {rmDatabaseData} from "@helpers/data.helper";
import {playwrightExtension} from "@helpers/utils.helper";

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
    if (await this.tableAssignmentDetails.isVisible({ timeout: 3000 })) {
      await expect(this.tableAssignmentDetails, 'Validate Assignment Details table is visible').toBeVisible();
    }
    if (await this.tableProjectAssignmentDetails.isVisible({ timeout: 3000 })) {
      await expect(this.tableProjectAssignmentDetails, 'Validate Assignment Details table is visible').toBeVisible();
    }
  }

  async clickProjectTab(): Promise<void> {
    await this.tabProject.click();
    await this.rmCommonActions.waitForLoadState();
  }

  async selectAllResourcesPool(pool: string): Promise<void> {
    const resourceCount = await this.tableRAssigment.locator('tr').count();
    await this.btnAddResourceToView.click();
    await this.txtSRSearchPool.fill(pool);
    await expect(this.listSROptions.locator('ul > li')).toHaveCount(1, { timeout: 5000 });
    await this.listSROptions.locator('ul > li').first().click();
    //await playwrightExtension.longClick(this.listSROptions.locator('ul > li').first());
    await expect(this.containerSRAvailableResources.locator('option')).not.toHaveCount(0, { timeout: 5000 });
    await this.btnSRMoveAll.click();
    //await playwrightExtension.longClick(this.btnSRMoveAll);
    await expect(this.containerSRAddToGrid.locator('option')).not.toHaveCount(0, { timeout: 5000 });
    await this.btnSRConfirm.click();
    //await playwrightExtension.longClick(this.btnSRConfirm);
    //await this.page.waitForTimeout(10000);
    await this.rmCommonActions.waitForLoadState();
    await expect(this.tableRAssigment.locator('tr')).not.toHaveCount(resourceCount, { timeout: 5000 });
  }

  async checkResourceAssignmentTable(rolePool: string): Promise<void> {
    const dataResourceAssignmentRole = JSON.parse(await rmDatabaseData.getPoolResourcesInfo(rolePool));
    await this.rmCommonActions.waitForLoadState();
    for (const row of dataResourceAssignmentRole) {
      await this.rmCommonActions.validateTableCellTextValue(this.tableRAssigment, `${row['RESOURCE_NAME'] ?? ''}`, `${row['ROLE_NAME'] ?? ''}`)
    }
  }

  async selectEmployeeInAssignmentTable(employeeName: string): Promise<void> {
    const assignmentCount = await this.tableAssignmentDetails.locator('tr').count();
    await this.rmCommonActions.clickTableControlTextValue(this.tableRAssigment, employeeName, "td > .apex-item-single-checkbox > input");
    await expect(this.tableAssignmentDetails.locator('tr')).not.toHaveCount(assignmentCount, { timeout: 5000 });
  }

  async checkAssignmentDetailTableFromAssigment(employeeID: string): Promise<void> {
    const dataDetailAssignmentRole = JSON.parse(await rmDatabaseData.getResourceAssignmentsInfo(employeeID));
    for (const row of dataDetailAssignmentRole) {
      const values: string[] = Object.values(row);
      await this.rmCommonActions.validateTableRowTextValue(this.tableAssignmentDetails, `${row['UPC'] ?? ''}`, values, 3)
    }
  }

  async checkAssignResourceDialog(employeeName: string, fromAssignment:boolean = true): Promise<void> {
    if(fromAssignment){
      await this.rmCommonActions.clickTableControlTextValue(this.tableRAssigment, employeeName, "td > a");
    } else {
      await this.rmCommonActions.clickTableControlTextValue(this.tablePAssigment, employeeName, "td > a");
    }
    //Assignment - Project tab
    await this.rmCommonActions.validateDialogTitle('Assign Resource');
    await expect(this.txtADResource, 'Resource input is visible in Assign Resource Dialog').toBeVisible();
    //await expect(this.txtADResource, `Resource input has name:
    // ${employeeName}`).toHaveText(`${employeeName}`);
    //await expect(this.txtADResource, `Resource input has resource ID:
    // ${employeeID}`).toHaveText(`${employeeID}`);
    await expect(this.selectADPCode, 'P-Code dropdown is visible in Assign Resource Dialog').toBeVisible();
    await expect(this.txtADAssignmentType, 'Assigment Type is visible in Assign Resource Dialog').toBeVisible();
    await expect(this.selectADProjectCode, 'Project Code dropdown is visible in Assign Resource' +
      ' Dialog').toBeVisible();
    await expect(this.switchADLead, 'Lead switch is visible in Assign Resource Dialog').toBeVisible();
    await expect(this.txtADNotes, 'Notes input is visible in Assign Resource Dialog').toBeVisible();
    await expect(this.selectADAssignedCountry, 'Assigned Country dropdown is visible in Assign' +
      ' Resource Dialog').toBeVisible();
    await expect(this.txtADAssignmentStartDate, 'Assignment Start Date input is visible in Assign' +
      ' Resource Dialog').toBeVisible();
    await expect(this.selectorADAssignmentStartDate, 'Assignment Start Date icon is visible in' +
      ' Assign Resource Dialog').toBeVisible();
    await expect(this.txtADAssignmentEndDate, 'Assignment End Date input is visible in Assign' +
      ' Resource Dialog').toBeVisible();
    await expect(this.selectorADAssignmentEndDate, 'Assignment End Date icon is visible in' +
      ' Assign Resource Dialog').toBeVisible();
    await expect(this.txtADAssignmentMonthlyHours, 'Assignment Monthly Hours input is visible in' +
      ' Assign Resource Dialog').toBeVisible();
    await expect(this.btnADCancel, 'Cancel button is visible in Assign Resource Dialog').toBeVisible();
    await expect(this.btnADSaveAndNew, 'Save and New button is visible in Assign Resource Dialog').toBeVisible();
    await expect(this.btnADSave, 'Save button is visible in Assign Resource Dialog').toBeVisible();
    await this.btnADClose.click();
  }

  async checkUnassignResourceDialog(employeeName: string, fromAssignment:boolean = true): Promise<void> {
    //Select resource name
    /*
    const assignmentCount = await this.tableAssignmentDetails.locator('tr').count();
    await this.rmCommonActions.clickTableControlTextValue(this.tableRAssigment, employeeName, "td > .apex-item-single-checkbox > input");
    await expect(this.tableAssignmentDetails.locator('tr')).not.toHaveCount(assignmentCount, { timeout: 5000 });
    //Click first line Unassing icon
     */
    if(fromAssignment){
      await this.tableAssignmentDetails.scrollIntoViewIfNeeded();
      await this.rmCommonActions.clickTableControlTextValue(this.tableAssignmentDetails, employeeName, "td > a > img.da-unassign");
       } else {
      await this.tableProjectAssignmentDetails.scrollIntoViewIfNeeded();
      await this.rmCommonActions.clickTableControlTextValue(this.tableProjectAssignmentDetails, employeeName, "td > a > img.da-unassign");
    }
    //Unassing Dialog [tabindex="0"]
    await this.rmCommonActions.validateDialogTitle('Unassign');
    await expect(this.txtUDResource, 'Resource input is visible in Unassign Resource Dialog').toBeVisible();
    //await expect(this.txtUDResource, `Resource input has name:
    // ${employeeName}`).toHaveText(`${employeeName}`);
    //await expect(this.txtUDResource, `Resource input has resource ID:
    // ${employeeID}`).toHaveText(`${employeeID}`);
    await expect(this.txtUDPCode, 'P-Code input is visible in Unassign Resource Dialog').toBeVisible();
    await expect(this.radioUDRemoveAll, 'Remove all radio is visible in Unassign Resource Dialog').toBeVisible();
    await expect(this.radioUDRemovePeriod, 'Remove from period radio is visible in Unassign' +
      ' Resource Dialog').toBeVisible();
    await expect(this.txtUDEffectiveDate, 'Effective Date input is visible in Unassign Resource' +
      ' Dialog').toBeVisible();
    await expect(this.selectorUDEffectiveDate, 'Effective Date icon is visible in Unassign Resource' +
      ' Dialog').toBeVisible();
    await expect(this.txtUDFrom, 'From input is visible in Unassign Resource Dialog').toBeVisible();
    await expect(this.selectorUDFrom, 'From icon is visible in Unassign Resource Dialog').toBeVisible();
    await expect(this.selectUDTurnoverReason, 'Turnover Reason input is visible in Unassign' +
      ' Resource Dialog').toBeVisible();
    await expect(this.txtUDTo, 'To input is visible in Unassign Resource Dialog').toBeVisible();
    await expect(this.selectorUDTo, 'To icon is visible in Unassign Resource Dialog').toBeVisible();
    await expect(this.btnUDCancel, 'Cancel button is visible in Unassign Resource Dialog').toBeVisible();
    await expect(this.btnUDUnassign, 'Unassign button is visible in Unassign Resource Dialog').toBeVisible();
    await this.btnUDCancel.click();
    await this.rmCommonActions.waitForLoadState();
  }

  async checkReplaceResourceDialog(employeeName: string, fromAssignment:boolean = true): Promise<void> {
    //Select resource name
    /*
    const assignmentCount = await this.tableAssignmentDetails.locator('tr').count();
    if (assignmentCount <= 1) {
      await this.rmCommonActions.clickTableControlTextValue(this.tableRAssigment, employeeName, "td > .apex-item-single-checkbox > input");
      await expect(this.tableAssignmentDetails.locator('tr')).not.toHaveCount(assignmentCount, { timeout: 5000 });
    }
    */
    if(fromAssignment){
      await this.tableAssignmentDetails.scrollIntoViewIfNeeded();
      await this.rmCommonActions.clickTableControlTextValue(this.tableAssignmentDetails, employeeName, "td > a > img.da-replace");
    } else {
      await this.tableProjectAssignmentDetails.scrollIntoViewIfNeeded();
      await this.rmCommonActions.clickTableControlTextValue(this.tableProjectAssignmentDetails, employeeName, "td > a > img.da-replace");
    }
    //Click first line Unassing icon [tabindex="0"]
    //Assignment - Project tab
    await this.rmCommonActions.validateDialogTitle('Replace Resource');
    await expect(this.txtRDPCode, 'P-Code input is visible in Replace Resource Dialog').toBeVisible();
    await expect(this.txtRDOutgoingResource, 'Outgoing Resource input is visible in Replace' +
      ' Resource Dialog').toBeVisible();
    //await expect(this.txtRDOutgoingResource, `Outgoing Resource input has name:
    // ${employeeName}`).toHaveText(`${employeeName}`);
    //await expect(this.txtRDOutgoingResource, `Outgoing Resource input has resource ID:
    // ${employeeID}`).toHaveText(`${employeeID}`);
    await expect(this.txtRDIncomingResource, 'Incoming Resource input is visible in Replace' +
      ' Resource Dialog').toBeVisible();
    await expect(this.selectRDTurnoverReason, 'Turnover Reason input is visible in Replace' +
      ' Resource Dialog').toBeVisible();
    await expect(this.selectorRDEffectiveDate, 'Effective Date input is visible in Replace' +
      ' Resource Dialog').toBeVisible();
    await expect(this.btnRDCancel, 'Cancel button is visible in Replace Resource Dialog').toBeVisible();
    await expect(this.btnRDReplaceResource, 'Replace button is visible in Replace Resource' +
      ' Dialog').toBeVisible();
    await this.btnRDCancel.click();
    await this.rmCommonActions.waitForLoadState();
  }

  async selectProject(pCode: string): Promise<void> {
    const resourceCount = await this.tablePAssigment.locator('tr').count();
    const projectCount = await this.containerSPAvailableProject.locator('option').count();
    //console.log(projectCount);
    await this.btnAddProjectToView.click();
    await this.txtSPPCode.fill(pCode);
    await this.page.keyboard.press('Tab');
    /*
    await expect(this.containerSPAvailableProject.locator('option')).not.toHaveCount(projectCount, { timeout: 5000 });
    console.log(await this.containerSPAvailableProject.locator('option').count());
    */
    await expect(this.containerSPAvailableProject.locator('option')).toHaveCount(1, { timeout: 5000 });
    await this.rmCommonActions.waitForLoadState();
    await this.btnSPMoveAll.click();
    await expect(this.containerSPAddToGrid.locator('option')).not.toHaveCount(0, { timeout: 5000 });
    await this.btnSPConfirm.click();
    //await this.page.waitForTimeout(10000);
    await this.rmCommonActions.waitForLoadState();
    await expect(this.tablePAssigment.locator('tr')).not.toHaveCount(resourceCount, { timeout: 5000 });
  }

  async checkProjectAssignmentTable(projectRole: string): Promise<void> {
    const dataProjectPool = JSON.parse(await rmDatabaseData.getProjectPoolInfo(projectRole));
    await this.rmCommonActions.waitForLoadState();
    for (const row of dataProjectPool) {
      await this.rmCommonActions.validateTableCellTextValue(this.tablePAssigment, `${row['PROJECT_ROLE'] ?? ''}`)
    }
  }

  async selectProjectRoleInProjectTable(projectRole: string): Promise<void> {
    const assignmentCount = await this.tableProjectAssignmentDetails.locator('tr').count();
    await this.rmCommonActions.clickTableControlTextValue(this.tablePAssigment, projectRole, "td > .apex-item-single-checkbox > input");
    await expect(this.tableProjectAssignmentDetails.locator('tr')).not.toHaveCount(assignmentCount, { timeout: 5000 });
  }

  async checkAssignmentDetailTableFromProject(pCode: string, projectRole: string): Promise<void> {
    const dataDetailAssignmentRole = JSON.parse(await rmDatabaseData.getProjectAssignmentsInfo(pCode, projectRole));
    //console.log(dataDetailAssignmentRole);
    for (const row of dataDetailAssignmentRole) {
      const values: string[] = Object.values(row);
      await this.rmCommonActions.validateTableRowTextValue(this.tableProjectAssignmentDetails, `${row['RESOURCE_NAME'] ?? ''}`, values, 3)
    }
  }
}