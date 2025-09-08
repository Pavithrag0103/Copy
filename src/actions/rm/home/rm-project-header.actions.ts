import { expect, Locator, Page } from '@playwright/test';
import { RmProjectHeaderComponent } from '../../../components/rm/home/rm-project-header.component';
import { RmCommonComponent } from '../../../components/rm/common/rm-common.component';
import { RmCommonActions } from "../common/rm-common.actions";
import { rmDatabaseData } from "../../../helpers/data.helper"

export class RmProjectHeaderActions extends RmProjectHeaderComponent {
  rmCommonActions: RmCommonActions;
  rmCommonComponent: RmCommonComponent;

  public stringExcelFile: string;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
    this.rmCommonComponent = new RmCommonComponent(this.page);
    this.stringExcelFile = "";
  }

  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.page.goto(dynamicUrl);
    await this.page.waitForLoadState('networkidle');
  }

  async checkEssentialElements(): Promise<void> {
    await this.rmCommonActions.waitForLoadState();
    await expect(this.containerProjectStatus, 'Project Status is visible').toBeVisible();
    await expect(this.containerStartDate, 'Start Date is visible').toBeVisible();
    await expect(this.containerEndDate, 'End Date is visible').toBeVisible();
    await expect(this.containerEstimatedEndDate, 'Estimated End Date is visible').toBeVisible();
    await expect(this.containerLOB, 'LOB|Owning BU|Owning Sub BU is visible').toBeVisible();
    await expect(this.containerTA, 'TA|Indication|Sub Indication is visible').toBeVisible();
    await expect(this.containerStudyPhase, 'Study Phase is visible').toBeVisible();
    await expect(this.containerStudyPopulation, 'Study Population is visible').toBeVisible();
    await expect(this.btnViewMore, 'View More is visible').toBeVisible();
    await this.btnViewMore.click();
    await expect(this.containerOpsVP, 'Ops VP is visible').toBeVisible();
    await expect(this.containerResourcingNeeds, 'Resourcing Needs is visible').toBeVisible();
    await expect(this.btnViewLess, 'View Less is visible').toBeVisible();
  }

  async checkProjectHeader(project: string): Promise<void> {
    const dataProjectHeader = JSON.parse(await rmDatabaseData.getProjectHeaderInfo(project))[0];
    //console.log(dataProjectHeader);
    await this.rmCommonActions.waitForLoadState();
    await expect(this.rmCommonComponent.breadcrumbHeaderL3, `Validate Project: ${dataProjectHeader['UPC'] ?? ''} (${dataProjectHeader['CLIENT_NAME'] ?? ''}).`).toContainText(`${dataProjectHeader['UPC'] ?? ''} (${dataProjectHeader['CLIENT_NAME'] ?? ''})`);
    await this.rmCommonActions.validateContainer(this.containerProjectStatus, `${dataProjectHeader['PROJECT_STATUS'] ?? ''}`,'Project Status');
    await this.rmCommonActions.validateContainer(this.containerStartDate,`${dataProjectHeader['START_DATE'] ?? ''}`, 'Start Date');
    await this.rmCommonActions.validateContainer(this.containerEndDate, `${dataProjectHeader['END_DATE'] ?? ''}`, 'End Date');
    await this.rmCommonActions.validateContainer(this.containerEstimatedEndDate, `${dataProjectHeader['ESTIMATED_END_DATE'] ?? ''}`, 'Estimated End Date');
    await this.rmCommonActions.validateContainer(this.containerLOB, `${dataProjectHeader['LINE_OF_BUSINESS'] ?? ''} | ${dataProjectHeader['BUSINESS_UNIT'] ?? ''} | ${dataProjectHeader['SUB_BUSINESS_UNIT'] ?? ''}`, 'LOB | Owning BU | OWNING SUB BU');
    await this.rmCommonActions.validateContainer(this.containerTA, `${dataProjectHeader['THERAPEUTIC_AREA'] ?? ''} | ${dataProjectHeader['INDICATION'] ?? ''} | ${dataProjectHeader['SUB_INDICATION'] ?? ''}`, 'TA | INDICATION | SUB INDICATION');
    await this.rmCommonActions.validateContainer(this.containerStudyPhase, `${dataProjectHeader['STUDY_PHASE'] ?? ''}`, 'Study Phase');
    await this.rmCommonActions.validateContainer(this.containerStudyPopulation, `${dataProjectHeader['STUDY_POPULATION'] ?? ''}`, 'Study Population');
    await this.btnViewMore.click();
    await this.rmCommonActions.validateContainer(this.containerOpsVP, '', 'OPS VP');
    await this.rmCommonActions.validateContainer(this.containerResourcingNeeds, `${dataProjectHeader['RESOURCE_NEEDS'] ?? ''}`, 'Resourcing Needs');
  }

  async checkProjectTitle(project: string): Promise<void> {
    const dataProjectHeader = JSON.parse(await rmDatabaseData.getProjectHeaderInfo(project))[0];
    await this.rmCommonActions.waitForLoadState();
    await expect(this.rmCommonComponent.breadcrumbHeaderL3, `Validate Project: ${dataProjectHeader['UPC'] ?? ''} (${dataProjectHeader['CLIENT_NAME'] ?? ''}).`).toContainText(`${dataProjectHeader['UPC'] ?? ''} (${dataProjectHeader['CLIENT_NAME'] ?? ''})`);
  }

}