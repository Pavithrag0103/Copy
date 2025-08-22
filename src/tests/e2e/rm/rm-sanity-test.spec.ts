import { test, expect } from '../../../fixtures/actions.fixture';
import {env_configRM} from "../../../utils/config";

test.describe('Resource Management :: Data Sanity Suite', () => {
  test('Data Sanity', async ({ rmDatabaseActions }) => {
      test.info().annotations.push(
        { type: 'tag', description: 'sanity' },
        { type: 'tag', description: 'data' }
      );
      let execStatus = true;

      await test.step('Check there are no Employees with NULL Hire Date', async () => {
        if(!await rmDatabaseActions.checkEmployeeHireDate())
        {
          execStatus = execStatus && false;
          console.warn('There are Employees with NULL Hire Date');
        }
      });
      await test.step('Check there are no Employees with NULL Country', async () => {
        if(!await rmDatabaseActions.checkEmployeeCountry())
        {
          execStatus = execStatus && false;
          console.warn('There are Employees with NULL Hire Date');
        }
      });
      await test.step('Check there are no Employees with NULL Region', async () => {
        if(!await rmDatabaseActions.checkEmployeeRegion())
        {
          execStatus = execStatus && false;
          console.warn('There are Employees with NULL Region');
        }
      });
      await test.step('Check there are no Rehired Employees with Incorrect Hire Date', async () => {
        if(!await rmDatabaseActions.checkEmployeeRehired())
        {
          execStatus = execStatus && false;
          console.warn('There are Employees with Incorrect Hire Date');
        }
      });
      await test.step('Check there are Termed Employees with Incorrect Status', async () => {
        if(!await rmDatabaseActions.checkEmployeeTerminated())
        {
          execStatus = execStatus && false;
          console.warn('There are Employees with Incorrect Status');
        }
      });
      await test.step('Check there are no Projects with NULL UPC', async () => {
        if(!await rmDatabaseActions.checkProjectUPC())
        {
          execStatus = execStatus && false;
          console.warn('There are Projects with NULL UPC');
        }
      });
      await test.step('Check there are no Assignments with NULL Type', async () => {
        if(!await rmDatabaseActions.checkAssignmentType())
        {
          execStatus = execStatus && false;
          console.warn('There are Assignments with NULL Type');
        }
      });
      await test.step('Check general execution of the suite', async () => {
        expect(execStatus).toBe(true);
      });
    });
});

test.describe('Resource Management :: UI Sanity Suite', () => {

  test.beforeEach(async ({ rmHomeActions }) => {
    await test.step('Open RM & Navigate to home page', async () => {
      await rmHomeActions.goToBaseUrl(env_configRM.baseUrl);
    });
  });

  test('Validate Home :: Essential Elements ', async ({rmHomeActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'home' }
    );
    await test.step('Check the elements to be present in the Home Page', async () => {
      await rmHomeActions.checkNavigationEssentialElements();
    });
  });

  test('Validate Side Menu Navigation', async ({rmSideBarActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'side-bar' },
      { type: 'tag', description: 'navigation' }
    );
    test.setTimeout(120_000); // 120 seconds
    await test.step('Side Menu :: Click on OVERVIEW', async () => {
      await rmSideBarActions.goToOverview();
    });
    await test.step('Side Menu :: Click on HOME', async () => {
      await rmSideBarActions.goToHome();
    });
    await test.step('Side Menu :: Click on All Projects', async () => {
      await rmSideBarActions.goToAllProjects();
    });
    await test.step('Side Menu :: Click on My Projects', async () => {
      await rmSideBarActions.goToMyProjects();
    });
    await test.step('Side Menu :: Click on Assignment Notifications', async () => {
      await rmSideBarActions.goToAssignmentNotifications();
    });
    await test.step('Side Menu :: Click on My Requests', async () => {
      await rmSideBarActions.goToMyRequests();
    });
    await test.step('Side Menu :: Click on HR Actions', async () => {
      await rmSideBarActions.goToHRActions();
    });
    await test.step('Side Menu :: Click on My Pools', async () => {
      await rmSideBarActions.goToMyPools();
    });
    await test.step('Side Menu :: Click on DEMAND', async () => {
      await rmSideBarActions.goToDemand();
    });
    await test.step('Side Menu :: Click on REQUESTS', async () => {
      await rmSideBarActions.goToRequests();
    });
    await test.step('Side Menu :: Click on Pre-Award Requests', async () => {
      await rmSideBarActions.goToPreAwardRequests();
    });
    await test.step('Side Menu :: Click on Post-Award Requests', async () => {
      await rmSideBarActions.goToPostAwardRequests();
    });
    await test.step('Side Menu :: Click on DIRECT ASSIGN', async () => {
      await rmSideBarActions.goToDirectAssign();
    });
    await test.step('Side Menu :: Click on Assignments', async () => {
      await rmSideBarActions.goToAssignments();
    });
  });

  test('Validate Header Navigation', async ({rmHeaderActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'header' },
      { type: 'tag', description: 'navigation' }
    );
    test.setTimeout(60_000); // 60 seconds
    await test.step('Header :: Click on Logo', async () => {
      await rmHeaderActions.goToHomeFromLogo();
    });
    await test.step('Header :: Click on Header', async () => {
      await rmHeaderActions.goToHomeFromHeader();
    });
    await test.step('Header :: Click on Sub-header', async () => {
      await rmHeaderActions.goToHomeFromSubHeader();
    });
    await test.step('Header :: Click on Resourcing Tab', async () => {
      await rmHeaderActions.goToHomeFromResourcingTab();
    });
    await test.step('Header :: Click on Environment', async () => {
      //await rmHeaderActions.openEnvironmentDialog();
    });
    await test.step('Header :: Click on App Selector', async () => {
      await rmHeaderActions.openAppSelector();
    });
    await test.step('Header :: Click on Notifications', async () => {
      //await rmHeaderActions.openNotifications();
    });
    await test.step('Header :: Click on User Menu', async () => {
      await rmHeaderActions.openUserMenu();
    });
    await test.step('Header :: Click on Home Link', async () => {
      await rmHeaderActions.goToHomeFromHomeLink();
    });
    await test.step('Header :: Click on Admin', async () => {
      await rmHeaderActions.goToAdmin();
    });
  });

  test('Validate Home :: Filter Criteria ', async ({rmFilterCriteriaActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'home' },
      { type: 'tag', description: 'filter criteria' }
    );
    test.setTimeout(45_000); // 45 seconds
    await test.step('Check the elements to be present in the Filter Criteria Area', async () => {
      await rmFilterCriteriaActions.checkEssentialElements();
    });
  });

  test('Validate Filter Criteria :: Search Project', async ({rmFilterCriteriaActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'filter criteria' },
      { type: 'tag', description: 'search project' }
    );
    test.setTimeout(45_000); // 45 seconds
    await test.step('Search for P-Code', async () => {
      await rmFilterCriteriaActions.searchProject("7014321");
    });
  });

  test('Validate Demand Summary :: Project Header', async ({rmFilterCriteriaActions, rmCommonActions, rmProjectHeaderActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'demand summary' },
      { type: 'tag', description: 'project header' }
    );
    test.setTimeout(45_000); // 45 seconds
    await test.step('Search for P-Code', async () => {
      await rmFilterCriteriaActions.goToProject("7014321");
    });
    await test.step('Validate Demand Summary title', async () => {
      await rmCommonActions.validateRegionLabel("Demand Summary");
    });
    await test.step('Check for Essential Elements', async () => {
      await rmProjectHeaderActions.checkEssentialElements();
    });
  });

  test('Validate Page :: My Requests', async ({rmSideBarActions, rmMyRequestsActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'page' },
      { type: 'tag', description: 'my requests' }
    );
    test.setTimeout(60_000); // 60 seconds
    await test.step('Click on My Requests', async () => {
      await rmSideBarActions.goToMyRequests();
    });
    await test.step('Check for Essential Elements', async () => {
      await rmMyRequestsActions.checkEssentialElements();
    });
  });

  test('Validate Page :: HR Actions', async ({rmSideBarActions, rmHrActionsActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'page' },
      { type: 'tag', description: 'hr actions' }
    );
    test.setTimeout(90_000); // 90 seconds
    await test.step('Click on HR Actions', async () => {
      await rmSideBarActions.goToHRActions();
    });
    await test.step('Check for Essential Elements', async () => {
      await rmHrActionsActions.checkEssentialElements();
    });
  });

  test('Validate Page :: My Pools', async ({rmSideBarActions, rmMyPoolsActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'page' },
      { type: 'tag', description: 'my pools' }
    );
    test.setTimeout(60_000); // 60 seconds
    await test.step('Click on My Pools', async () => {
      await rmSideBarActions.goToMyPools();
    });
    await test.step('Check for Essential Elements', async () => {
      await rmMyPoolsActions.checkEssentialElements();
    });
  });

  test('Validate Page :: Demand Summary', async ({rmSideBarActions, rmDemandSummaryActions, rmFilterCriteriaActions, rmCommonActions, rmProjectHeaderActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'page' },
      { type: 'tag', description: 'demand summary' },
    );
    test.setTimeout(45_000); // 45 seconds
    await test.step('Click on Demand', async () => {
      await rmSideBarActions.goToDemand();
    });
    await test.step('Search for P-Code', async () => {
      await rmFilterCriteriaActions.goToProject("7014321");
    });
    await test.step('Validate Demand Summary title', async () => {
      await rmCommonActions.validateRegionLabel("Demand Summary");
    });
    await test.step('Check for Project Header', async () => {
      await rmProjectHeaderActions.checkEssentialElements();
    });
    await test.step('Check for Essential Elements', async () => {
      await rmDemandSummaryActions.checkEssentialElements();
    });
  });

  test('Validate Page :: Demand Management', async ({rmSideBarActions, rmDemandManagementActions, rmDemandSummaryActions, rmFilterCriteriaActions, rmCommonActions, rmProjectHeaderActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'page' },
      { type: 'tag', description: 'demand summary' },
    );
    test.setTimeout(90_000); // 90 seconds
    await test.step('Click on Demand', async () => {
      await rmSideBarActions.goToDemand();
    });
    await test.step('Search for P-Code', async () => {
      await rmFilterCriteriaActions.goToProject("7014321");
    });
    await test.step('Validate Demand Summary title', async () => {
      await rmCommonActions.validateTitle("Demand Summary");
    });
    await test.step('Click on First record on Demand Summary', async () => {
      await rmDemandSummaryActions.goToDemand(10,1);
    });
    await test.step('Validate Demand Management title', async () => {
      await rmCommonActions.validateTitle("Demand Management");
    });
    await test.step('Check for Project Header', async () => {
      await rmProjectHeaderActions.checkEssentialElements();
    });
    await test.step('Check for Essential Elements', async () => {
      await rmDemandManagementActions.checkEssentialElements();
    });
  });

  test('Validate Page :: Request Summary', async ({rmRequestsFilterCriteriaActions, rmSideBarActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'page' },
      { type: 'tag', description: 'request summary' }
    );
    test.setTimeout(45_000); // 45 seconds

    await test.step('Go to Requests', async () => {
      await rmSideBarActions.goToRequests();
    });
    await test.step('Check the elements to be present in the Filter Criteria Area', async () => {
      await rmRequestsFilterCriteriaActions.checkEssentialElements();
    });
  });

  test('Validate Page :: Review & Assign', async ({rmReviewAndAssignActions,rmRequestsFilterCriteriaActions, rmSideBarActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'page' },
      { type: 'tag', description: 'request summary' }
    );
    test.setTimeout(60_000); // 45 seconds

    await test.step('Go to Requests', async () => {
      await rmSideBarActions.goToRequests();
    });
    await test.step('Select first Request', async () => {
      await rmRequestsFilterCriteriaActions.goToRequest(2);
    });
    await test.step('Check the elements to be present in the Filter Criteria Area', async () => {
      await rmReviewAndAssignActions.checkEssentialElements();
    });
  });

  test('Validate Page :: Assignments', async ({rmAssignmentsActions, rmSideBarActions}) => {
    test.info().annotations.push(
      { type: 'tag', description: 'sanity' },
      { type: 'tag', description: 'page' },
      { type: 'tag', description: 'assignments' }
    );
    //test.setTimeout(45_000); // 45 seconds

    await test.step('Go to Direct Assignment', async () => {
      await rmSideBarActions.goToDirectAssign();
    });
    await test.step('Check the elements to be present in the Assignments Page', async () => {
      await rmAssignmentsActions.checkEssentialElements();
    });
  });

});