import { expect, Page } from '@playwright/test';
import { RmSideBarComponent } from '../../../components/rm/side-bar/rm-side-bar.component';
import { RmCommonActions } from '../common/rm-common.actions';


export class RmSideBarActions extends RmSideBarComponent {
  rmCommonActions: RmCommonActions = new RmCommonActions(this.page);

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }

  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.rmCommonActions.goToBaseUrl(dynamicUrl, this.btnHome)
  }

  async checkEssentialElements(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await expect(this.btnOverview, 'Overview button is visible').toBeVisible();
    await expect(this.btnHome, 'HOME link is visible').toBeVisible();
    await expect(this.lnkAllProjects, 'All Projects link is visible').toBeVisible();
    await expect(this.lnkMyProjects, 'My Projects link is visible').toBeVisible();
    await expect(this.lnkAssignment, 'Assignment Notification link is visible').toBeVisible();
    await expect(this.lnkMyRequests, 'My Requests link is visible').toBeVisible();
    await expect(this.lnkHrActions, 'HR Actions link is visible').toBeVisible();
    await expect(this.lnkMyPools, 'My Pools link is visible').toBeVisible();
    await expect(this.btnDemand, 'DEMAND button is visible').toBeVisible();
    await expect(this.btnRequests, 'REQUESTS button is visible').toBeVisible();
    await expect(this.btnDirectAssign, 'DIRECT ASSIGN button is visible').toBeVisible();
  }

  async goToOverview(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.btnOverview, 'All Projects');
  }

  async goToHome(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateLocator(this.btnHome, this.lnkAllProjects);
  }

  async goToAllProjects(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkAllProjects, 'All Projects');
  }

  async goToMyProjects(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkMyProjects, 'My Projects');
  }

  async goToAssignmentNotifications(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkAssignment, 'Assignment Notifications');
  }

  async goToMyRequests(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkMyRequests, 'My Requests');
  }

  async goToHRActions(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkHrActions, 'HR Actions');
  }

  async goToMyPools(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkMyPools, 'My Pools');
  }

  async goToDemand(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.btnDemand, 'All Projects');
  }

  async goToRequests(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.btnRequests, 'Request Summary');
  }

  async goToPreAwardRequests(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkPreAwardRequests, 'Request Summary');
  }

  async goToPostAwardRequests(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkPostAwardRequests, 'Request Summary');
  }

  async goToDirectAssign(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.btnDirectAssign, 'Assignments');
  }

  async goToAssignments(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkAssignments, 'Assignments', this.btnHideMenu);
  }
}