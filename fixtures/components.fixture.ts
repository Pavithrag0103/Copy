import { test as base } from '@playwright/test';
import { HeaderNavigationComponent } from '../components/header/header-navigation';
import { RmHeaderComponent } from '../components/rm/header/rm-header.component';
import { RmSideBarComponent } from '../components/rm/side-bar/rm-side-bar.component';
import { RmLoginComponent } from '../components/rm/login/rm-login.component';
import { RmHomeComponent } from "../components/rm/home/rm-home.component";
import { RmFilterCriteriaComponent } from "../components/rm/home/rm-filter-criteria.component";
import { RmProjectHeaderComponent } from "../components/rm/home/rm-project-header.component";
import { RmAssignmentNotificationsComponent } from "../components/rm/home/rm-assignment-notifications.component";
import { RmHrActionsComponent } from "../components/rm/home/rm-hr-actions.component";
import { RmMyPoolsComponent } from "../components/rm/home/rm-my-pools.component";
import { RmMyProjectsComponent } from "../components/rm/home/rm-my-projects.component";
import { RmMyRequestsComponent } from "../components/rm/home/rm-my-requests.component";
import { RmDemandSummaryComponent } from "../components/rm/demand/rm-demand-summary.component";
import { RmDemandManagementComponent } from "../components/rm/demand/rm-demand-management.component";
import { RmRequestsFilterCriteriaComponent } from "../components/rm/requests/rm-requests-filter-criteria.component";
import { RmReviewAndAssignComponent } from "../components/rm/requests/rm-review-and-assign.component";
import { RmAssignmentsComponent } from "../components/rm/direct-assign/rm-assignments.component";

export const componentFixture = base.extend<{
  headerComponent: HeaderNavigationComponent;
  rmHeaderComponent: RmHeaderComponent;
  rmSideBarComponent: RmSideBarComponent;
  rmHomeComponent: RmHomeComponent;
  rmLoginComponent: RmLoginComponent;
  rmFilterCriteriaComponent: RmFilterCriteriaComponent;
  rmProjectHeaderComponent: RmProjectHeaderComponent;
  rmAssignmentNotificationsComponent: RmAssignmentNotificationsComponent;
  rmHrActionsComponent: RmHrActionsComponent;
  rmMyPoolsComponent: RmMyPoolsComponent;
  rmMyProjectsComponent: RmMyProjectsComponent;
  rmMyRequestsComponent: RmMyRequestsComponent;
  rmDemandSummaryComponent: RmDemandSummaryComponent;
  rmDemandManagementComponent: RmDemandManagementComponent;
  rmRequestsFilterCriteriaComponent: RmRequestsFilterCriteriaComponent;
  rmReviewAndAssignComponent: RmReviewAndAssignComponent;
  rmAssignmentsComponent: RmAssignmentsComponent;
}>({
  headerComponent: async ({ page }, use) => {
    const headerComponent = new HeaderNavigationComponent(page);
    await use(headerComponent);
  },
  rmHeaderComponent: async ({ page }, use) => {
    const rmHeaderComponent = new RmHeaderComponent(page);
    await use(rmHeaderComponent);
  },
  rmSideBarComponent: async ({ page }, use) => {
    const rmSideBarComponent = new RmSideBarComponent(page);
    await use(rmSideBarComponent);
  },
  rmHomeComponent: async ({ page }, use) => {
    const rmHomeComponent = new RmHomeComponent(page);
    await use(rmHomeComponent);
  },
  rmLoginComponent: async ({ page }, use) => {
    const rmLoginComponent = new RmLoginComponent(page);
    await use(rmLoginComponent);
  },
  rmFilterCriteriaComponent: async ({ page }, use) => {
    const rmFilterCriteriaComponent = new RmFilterCriteriaComponent(page);
    await use(rmFilterCriteriaComponent);
  },
  rmProjectHeaderComponent: async ({ page }, use) => {
    const rmProjectHeaderComponent = new RmProjectHeaderComponent(page);
    await use(rmProjectHeaderComponent);
  },
  rmAssignmentNotificationsComponent: async ({ page }, use) => {
    const rmAssignmentNotificationsComponent = new RmAssignmentNotificationsComponent(page);
    await use(rmAssignmentNotificationsComponent);
  },
  rmHrActionsComponent: async ({ page }, use) => {
    const rmHrActionsComponent = new RmHrActionsComponent(page);
    await use(rmHrActionsComponent);
  },
  rmMyPoolsComponent: async ({ page }, use) => {
    const rmMyPoolsComponent = new RmMyPoolsComponent(page);
    await use(rmMyPoolsComponent);
  },
  rmMyProjectsComponent: async ({ page }, use) => {
    const rmMyProjectsComponent = new RmMyProjectsComponent(page);
    await use(rmMyProjectsComponent);
  },
  rmMyRequestsComponent: async ({ page }, use) => {
    const rmMyRequestsComponent = new RmMyRequestsComponent(page);
    await use(rmMyRequestsComponent);
  },
  rmDemandSummaryComponent: async ({ page }, use) => {
    const rmDemandSummaryComponent = new RmDemandSummaryComponent(page);
    await use(rmDemandSummaryComponent);
  },
  rmDemandManagementComponent: async ({ page }, use) => {
    const rmDemandManagementComponent = new RmDemandManagementComponent(page);
    await use(rmDemandManagementComponent);
  },
  rmRequestsFilterCriteriaComponent: async ({ page }, use) => {
    const rmRequestsFilterCriteriaComponent = new RmRequestsFilterCriteriaComponent(page);
    await use(rmRequestsFilterCriteriaComponent);
  },
  rmReviewAndAssignComponent: async ({ page }, use) => {
    const rmReviewAndAssignComponent = new RmReviewAndAssignComponent(page);
    await use(rmReviewAndAssignComponent);
  },
  rmAssignmentsComponent: async ({ page }, use) => {
    const rmAssignmentsComponent = new RmAssignmentsComponent(page);
    await use(rmAssignmentsComponent);
  },
});
