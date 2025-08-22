import { Page } from '@playwright/test';
import { componentFixture as base } from './components.fixture';
import { RmHeaderActions } from '@actions/rm/navigation/rm-header.actions';
import { RmSideBarActions } from '@actions/rm/navigation/rm-side-bar.actions';
import { RmLoginActions } from '@actions/rm/login/rm-login.actions';
import { RmHomeActions } from "@actions/rm/home/rm-home.actions";
import { RmFilterCriteriaActions } from "@actions/rm/home/rm-filter-criteria.actions";
import { RmProjectHeaderActions } from "@actions/rm/home/rm-project-header.actions";
import { RmAssignmentNotificationsActions } from "@actions/rm/home/rm-assignment-notifications.actions";
import { RmMyRequestsActions } from "@actions/rm/home/rm-my-requests.actions";
import { RmHrActionsActions } from "@actions/rm/home/rm-hr-actions.actions";
import { RmMyPoolsActions } from "@actions/rm/home/rm-my-pools.actions";
import { RmCommonActions } from "@actions/rm/common/rm-common.actions";
import { RmDatabaseActions } from "@actions/rm/db/rm-db.actions";
import { RmDemandSummaryActions } from "@actions/rm/demand/rm-demand-summary.actions";
import { RmDemandManagementActions } from "@actions/rm/demand/rm-demand-management.actions";
import { RmRequestsFilterCriteriaActions } from "@actions/rm/requests/rm-request-filter-criteria.actions";
import { RmReviewAndAssignActions } from "@actions/rm/requests/rm-review-and-assign.actions";
import { RmProfileCriteriaActions } from "@actions/rm/requests/rm-profile-criteria.actions";
import { RmAssignmentsActions } from "@actions/rm/direct-assign/rm-assignments.actions";

type ActionConstructor<T> = new (page: Page) => T;

function createAction<T>(actionConstructor: ActionConstructor<T>) {
  return async ({ page }, use: (value: T) => Promise<void>) => {
    const action = new actionConstructor(page);
    await use(action);
  };
}

export const test = base.extend<{
  rmHeaderActions: RmHeaderActions;
  rmSideBarActions: RmSideBarActions;
  rmLoginActions: RmLoginActions;
  rmHomeActions: RmHomeActions;
  rmFilterCriteriaActions: RmFilterCriteriaActions;
  rmProjectHeaderActions: RmProjectHeaderActions;
  rmAssignmentNotificationsActions: RmAssignmentNotificationsActions;
  rmMyRequestsActions: RmMyRequestsActions;
  rmHrActionsActions: RmHrActionsActions;
  rmMyPoolsActions: RmMyPoolsActions;
  rmCommonActions: RmCommonActions;
  rmDatabaseActions: RmDatabaseActions;
  rmDemandSummaryActions: RmDemandSummaryActions;
  rmDemandManagementActions: RmDemandManagementActions;
  rmRequestsFilterCriteriaActions: RmRequestsFilterCriteriaActions;
  rmReviewAndAssignActions: RmReviewAndAssignActions;
  rmProfileCriteriaActions: RmProfileCriteriaActions;
  rmAssignmentsActions: RmAssignmentsActions;
}>({
  rmHeaderActions: createAction(RmHeaderActions),
  rmSideBarActions: createAction(RmSideBarActions),
  rmLoginActions: createAction(RmLoginActions),
  rmHomeActions: createAction(RmHomeActions),
  rmFilterCriteriaActions: createAction(RmFilterCriteriaActions),
  rmProjectHeaderActions: createAction(RmProjectHeaderActions),
  rmAssignmentNotificationsActions: createAction(RmAssignmentNotificationsActions),
  rmMyRequestsActions: createAction(RmMyRequestsActions),
  rmHrActionsActions: createAction(RmHrActionsActions),
  rmMyPoolsActions: createAction(RmMyPoolsActions),
  rmCommonActions: createAction(RmCommonActions),
  rmDatabaseActions: createAction(RmDatabaseActions),
  rmDemandSummaryActions: createAction(RmDemandSummaryActions),
  rmDemandManagementActions: createAction(RmDemandManagementActions),
  rmRequestsFilterCriteriaActions: createAction(RmRequestsFilterCriteriaActions),
  rmReviewAndAssignActions: createAction(RmReviewAndAssignActions),
  rmProfileCriteriaActions: createAction(RmProfileCriteriaActions),
  rmAssignmentsActions: createAction(RmAssignmentsActions),
});

export { expect } from '@playwright/test';
