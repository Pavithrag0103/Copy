import {expect, Locator, Page} from '@playwright/test';
import { RmReviewAndAssignComponent } from '../../../components/rm/requests/rm-review-and-assign.component';
import { RmCommonActions } from '../common/rm-common.actions';

export class RmReviewAndAssignActions extends RmReviewAndAssignComponent {
  rmCommonActions: RmCommonActions;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }

  async checkEssentialElements(): Promise<void> {
    await this.rmCommonActions.waitForLoadState();
    await this.rmCommonActions.validateTitle("Review & Assign");
    //Resource Pool Filter
    await expect(this.btnRPUndo, 'Validate Resource Pool Filter Undo button is visible').toBeVisible();
    await expect(this.btnRPRestoreToDefault, 'Validate  Resource Pool Filter Restore to Default button is visible').toBeVisible();
    await expect(this.dropRegion, 'Validate Region dropdown is visible').toBeVisible();
    await expect(this.dropCountry, 'Validate Country dropdown is visible').toBeVisible();
    await expect(this.dropRole, 'Validate Role dropdown is visible').toBeVisible();
    await expect(this.btnSearch, 'Validate Search button is visible').toBeVisible();
    await expect(this.dropDepartment, 'Validate Department dropdown is visible').toBeVisible();
    await expect(this.dropResourceName, 'Validate Resource Name dropdown is visible').toBeVisible();
    await expect(this.dropSponsorExperience, 'Validate Sponsor Experience dropdown is visible').toBeVisible();
    await expect(this.dropEmployeeClass, 'Validate Employee Class dropdown is visible').toBeVisible();
    await expect(this.dropState, 'Validate State dropdown is visible').toBeVisible();
    await expect(this.txtTenure, 'Validate Tenure input is visible').toBeVisible();

    //Experience Criteria
    await expect(this.btnECUndo, 'Validate Experience Criteria Undo button is visible').toBeVisible();
    await expect(this.btnECRestoreToDefault, 'Validate Experience Criteria Restore to Default button is visible').toBeVisible();
    await expect(this.dropTherapeuticArea, 'Validate Therapeutic Area dropdown is visible').toBeVisible();
    await expect(this.dropTreatment, 'Validate Treatment dropdown is visible').toBeVisible();
    await expect(this.dropStudyPhase, 'Validate Study Phase dropdown is visible').toBeVisible();
    await expect(this.dropStudyPopulation, 'Validate Study Population dropdown is visible').toBeVisible();
    await expect(this.dropTechnical, 'Validate Technical dropdown is visible').toBeVisible();
    await expect(this.dropLanguage, 'Validate Language dropdown is visible').toBeVisible();
    //Request Details
    await expect(this.tabRequestDetails, 'Validate Request Details tab is visible').toBeVisible();
    await expect(this.btnAssignDemand, 'Validate Assign Demand button is visible').toBeVisible();
    await expect(this.btnAssignAvailability, 'Validate Assign Availability button is visible').toBeVisible();
    await expect(this.btnProfileReview, 'Validate Profile Review button is visible').toBeVisible();
    await expect(this.btnRDUndo, 'Validate Request Details Undo button is visible').toBeVisible();
    await expect(this.btnRDReset, 'Validate Request Details Reset button is visible').toBeVisible();
    await expect(this.dropRequestDuration, 'Validate Request Duration dropdown is visible').toBeVisible();
    await expect(this.btnMarkUnfulfilled, 'Validate Mark Unfulfilled button is visible').toBeVisible();
    await expect(this.btnSave, 'Validate Save button is visible').toBeVisible();
    await expect(this.btnSubmit, 'Validate Submit button is visible').toBeVisible();
    await expect(this.tableGeneral,'Validate Resource Summary table is visible').toBeVisible();
    await expect(this.tableResources,'Validate Resource Detail table is visible').toBeVisible();
  }

  async searchResource(searchText: string): Promise<void> {

  }

  async goToResource(row: number): Promise<void> {

  }
}