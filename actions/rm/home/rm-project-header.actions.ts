import {expect, Locator, Page} from '@playwright/test';
import { RmProjectHeaderComponent } from '../../../components/rm/home/rm-project-header.component';
import {RmCommonActions} from "../common/rm-common.actions";

export class RmProjectHeaderActions extends RmProjectHeaderComponent {
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
    await expect(this.containerProjectStatus.first(), 'Project Status is visible').toBeVisible();
    await expect(this.containerStartDate.first(), 'Start Date is visible').toBeVisible();
    await expect(this.containerEndDate.first(), 'End Date is visible').toBeVisible();
    await expect(this.containerEstimatedEndDate.first(), 'Estimated End Date is visible').toBeVisible();
    await expect(this.containerLOB.first(), 'LOB|Owning BU|Owning Sub BU is visible').toBeVisible();
    await expect(this.containerTA.first(), 'TA|Indication|Sub Indication is visible').toBeVisible();
    await expect(this.containerStudyPhase.first(), 'Study Phase is visible').toBeVisible();
    await expect(this.containerStudyPopulation.first(), 'Study Population is visible').toBeVisible();
    await expect(this.btnViewMore.first(), 'View More is visible').toBeVisible();
    await this.btnViewMore.nth(0).click();
    await expect(this.containerOpsVP.first(), 'Ops VP is visible').toBeVisible();
    await expect(this.containerResourcingNeeds.first(), 'Resourcing Needs is visible').toBeVisible();
    await expect(this.btnViewLess.first(), 'View Less is visible').toBeVisible();
  }
}