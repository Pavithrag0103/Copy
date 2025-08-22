import { test, expect } from '../../../fixtures/actions.fixture';
import { excelUtils } from '@helpers/utils.helper';
import * as path from 'path';
import {env_configRM} from "../../../utils/config";

test.describe('Resource Management :: Smoke Test Suite', () => {
  let timeout = 60000;
  test.beforeEach(async ({ rmHomeActions }) => {
    test.setTimeout(timeout);
    await test.step('Open RM & Navigate to home page', async () => {
      await rmHomeActions.goToBaseUrl(env_configRM.baseUrl);
    });
  });

  test.describe('RM::Project Header for Post Award', () => {
    test('RM::Project Header for Post Award',
          async ({ rmFilterCriteriaActions,
                   rmCommonActions,
                   rmProjectHeaderActions,
                   rmHeaderActions,
                 }) => {
    test.info().annotations.push(
      { type: 'tag', description: 'Smoke Test' },
      { type: 'tag', description: 'Project Header' },
      { type: 'tag', description: 'Post Award' }
    );
    await test.step('Verify that project header coming from salesforce to INT to RM and check the details in frontend', async () => {
      const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'ProjectHeader');
      for (const row of xlsProject) {
        timeout = timeout + 10000;
        //console.log(timeout);
        test.setTimeout(timeout);
        //console.log(`Work on P-Code: ${row['P-Code']}`);
        await test.step('Click on Home', async () => {
          await rmHeaderActions.goToHomeFromHeader();
        });
        await test.step(`Search for P-Code: ${row['P-Code']}`, async () => {
          await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`);
        });
        await test.step('Validate Demand Summary title', async () => {
          await rmCommonActions.validateRegionLabel("Demand Summary");
        });
        await test.step('Check for Essential Elements', async () => {
          await rmProjectHeaderActions.checkProjectHeader(`${row['P-Code']}`);
        });
      }
    });
  });
  });

  test.describe('RM::Demand Management - All projects', () => {
    test('RM::Demand Management - All projects -> Have access for Post award and Pre award',
      async ({
               rmFilterCriteriaActions,
               rmDemandSummaryActions,
               rmHeaderActions,
               rmSideBarActions,
             }) => {
        test.info().annotations.push(
          {type: 'tag', description: 'Smoke Test'},
          {type: 'tag', description: 'Demand Management'},
          {type: 'tag', description: 'All projects'},
          {type: 'tag', description: 'Access for Post award and Pre award'}
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'DemandSummary');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 10000;
            //console.log(timeout);
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on DEMAND', async () => {
              await rmSideBarActions.goToDemand();
            });
            await test.step('Check Essential Elements in Request Summary page (Post Award)', async () => {
              await rmFilterCriteriaActions.checkEssentialElements();
            });
            await test.step('Go to the first request in the table (Post Award)', async () => {
              await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`, `${row['Type']}`);
            });
            await test.step('Check the Essential Elements in Review & Assign page (Post Award)', async () => {
              await rmDemandSummaryActions.checkEssentialElements();
            });
          }
        }
      });

    test('RM::Demand Management - All projects -> P-code able to search and navigate to respective page',
      async ({
               rmFilterCriteriaActions,
               rmCommonActions,
               rmProjectHeaderActions,
               rmHeaderActions,
             }) => {
        test.info().annotations.push(
          {type: 'tag', description: 'Smoke Test'},
          {type: 'tag', description: 'Demand Management'},
          {type: 'tag', description: 'All projects'},
          {type: 'tag', description: 'P-code able to search'}
        );

        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'ProjectHeader');
        for (const row of xlsProject) {
          timeout = timeout + 10000;
          test.setTimeout(timeout);
          //console.log(`Work on P-Code: ${row['P-Code']}`);
          await test.step('Click on Home', async () => {
            await rmHeaderActions.goToHomeFromHeader();
          });
          await test.step(`Search for P-Code: ${row['P-Code']}`, async () => {
            await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`);
          });
          await test.step('Validate Demand Summary title', async () => {
            await rmCommonActions.validateRegionLabel("Demand Summary");
          });
          await test.step('Check for Project Title', async () => {
            await rmProjectHeaderActions.checkProjectTitle(`${row['P-Code']}`);
          });
        }
      });
  });

  test.describe('RM::Demand Summary', () => {
    test('RM::Demand Summary -> Department to role mapping',
      async ({ rmFilterCriteriaActions,
               rmCommonActions,
               rmDemandSummaryActions,
               rmHeaderActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Demand Summary' },
          { type: 'tag', description: 'Post Award' },
          { type: 'tag', description: 'Department to role mapping' }
        );
          const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'DemandSummary');
          for (const row of xlsProject) {
            if (row['Run'].toString() === "1") {
              timeout = timeout + 10000;
              test.setTimeout(timeout);
              //console.log(`Work on P-Code: ${row['P-Code']}`);
              await test.step('Click on Home', async () => {
                await rmHeaderActions.goToHomeFromHeader();
              });
              await test.step(`Search for P-Code: ${row['P-Code']}`, async () => {
                await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`);
              });
              await test.step('Validate Demand Summary title', async () => {
                await rmCommonActions.validateRegionLabel("Demand Summary");
              });
              await test.step('Check for Departments in table', async () => {
                await rmDemandSummaryActions.checkDemandSummaryDepartmentTable(`${row['P-Code']}`);
              });
            }
          }
      });

    test('RM::Demand Summary -> Ensure that the roles are listed with the available forecast',
      async ({ rmFilterCriteriaActions,
               rmCommonActions,
               rmDemandSummaryActions,
               rmHeaderActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Demand Summary' },
          { type: 'tag', description: 'Post Award' },
          { type: 'tag', description: 'Roles listed with the available forecast' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'DemandSummary');
        for (const row of xlsProject) {
          //console.log(row['Run']);
          //console.log(row['Type']);
          if (row['Run'].toString() === "1"  && row['Type'].toString() === "POST") {
            timeout = timeout + 10000;
            test.setTimeout(timeout);
            //console.log(`Work on P-Code: ${row['P-Code']}`);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step(`Search for P-Code: ${row['P-Code']}`, async () => {
              await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`);
            });
            await test.step('Validate Demand Summary title', async () => {
              await rmCommonActions.validateRegionLabel("Demand Summary");
            });
            await test.step('Check for Roles in the table', async () => {
              await rmDemandSummaryActions.checkDemandSummaryRoleTable(`${row['P-Code']}`);
            });
          }
        }
      });

    test('RM::Demand Summary -> Compare the forecast data with RM Backend forecast table',
      async ({ rmFilterCriteriaActions,
               rmCommonActions,
               rmDemandSummaryActions,
               rmHeaderActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Demand Summary' },
          { type: 'tag', description: 'Post Award' },
          { type: 'tag', description: 'Compare forecast' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'DemandSummary');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1"  && row['Type'].toString() === "POST") {
            timeout = timeout + 20000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step(`Search for P-Code: ${row['P-Code']}`, async () => {
              await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`);
            });
            await test.step('Validate Demand Summary title', async () => {
              await rmCommonActions.validateRegionLabel("Demand Summary");
            });
            await test.step('Check for Forecast', async () => {
              await rmDemandSummaryActions.checkDemandSummaryForecast(`${row['P-Code']}`);
            });
          }
        }
      });

    test('RM::Demand Summary -> Create a Resource Request and check is in the table',
      async ({ rmFilterCriteriaActions,
               rmCommonActions,
               rmDemandSummaryActions,
               rmHeaderActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Demand Summary' },
          { type: 'tag', description: 'Post Award' },
          { type: 'tag', description: '' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'DemandManagement');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1"  && row['Type'].toString() === "POST") {
            timeout = timeout + 20000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step(`Search for P-Code: ${row['P-Code']}`, async () => {
              await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`);
            });

            await test.step('Validate Demand Summary title', async () => {
              await rmCommonActions.validateTitle("Demand Summary");
            });
            await test.step('Click on First record on Demand Summary', async () => {
              await rmDemandSummaryActions.goToRoleDemand(`${row['Role']}`);
            });
            await test.step('Validate Demand Management title', async () => {
              await rmCommonActions.validateTitle("Demand Management");
            });
          }
        }
      });

    test('RM::Demand Summary -> Download the report',
      async ({ rmFilterCriteriaActions,
               rmCommonActions,
               rmDemandSummaryActions,
               rmHeaderActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Demand Summary' },
          { type: 'tag', description: 'Post Award' },
          { type: 'tag', description: 'Download report' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'DemandSummary');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1"  && row['Type'].toString() === "POST") {
            timeout = timeout + 20000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step(`Search for P-Code: ${row['P-Code']}`, async () => {
              await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`);
            });

            await test.step('Validate Demand Summary title', async () => {
              await rmCommonActions.validateTitle("Demand Summary");
            });
            await test.step('Click on First record on Demand Summary', async () => {
              await rmDemandSummaryActions.downloadReport();
            });
          }
        }
      });


  });

  test.describe('RM::Demand Management', () => {
    test('RM::Demand Management -> Verify the region level forecast is available ',
      async ({ rmFilterCriteriaActions,
               rmCommonActions,
               rmDemandSummaryActions,
               rmDemandManagementActions,
               rmHeaderActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Demand Management' },
          { type: 'tag', description: 'Region level forecast' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'DemandManagement');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1"  && row['Type'].toString() === "POST") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step(`Search for P-Code: ${row['P-Code']}`, async () => {
              await rmFilterCriteriaActions.goToProject(`${row['P-Code']}`);
            });
            await test.step('Validate Demand Summary title', async () => {
              await rmCommonActions.validateTitle("Demand Summary");
            });
            await test.step('Click on First record on Demand Summary', async () => {
              await rmDemandSummaryActions.goToRoleDemand(`${row['Role']}`);
            });
            await test.step('Validate Demand Management title', async () => {
              await rmCommonActions.validateTitle("Demand Management");
            });
            await test.step('Validate Region Level Forecast', async () => {
              await rmDemandManagementActions.checkEssentialElements();
            });
          }
        }
      });


  });

  test.describe('RM::Request Management - Request Summary', () => {
    test('RM::Request Management - Request Summary -> Ensure that request is available with new request ID',
      async ({
               rmRequestsFilterCriteriaActions,
               rmReviewAndAssignActions,
               rmHeaderActions,
               rmSideBarActions,
             }) => {
        test.info().annotations.push(
          {type: 'tag', description: 'Smoke Test'},
          {type: 'tag', description: 'Request Management'},
          {type: 'tag', description: 'Request Summary'},
          {type: 'tag', description: 'Ensure that request is available with new request ID'}
        );
        test.setTimeout(120000);
        //Post-Award
        await test.step('Click on Home', async () => {
          await rmHeaderActions.goToHomeFromHeader();
        });
        await test.step('Click on Requests', async () => {
          await rmSideBarActions.goToRequests();
        });
        await test.step('Click on Post Award Requests', async () => {
          await rmSideBarActions.goToPostAwardRequests();
        });
        await test.step('Check Essential Elements in Request Summary page (Post Award)', async () => {
          await rmRequestsFilterCriteriaActions.checkEssentialElements();
        });
        await test.step('Go to the first request in the table (Post Award)', async () => {
          await rmRequestsFilterCriteriaActions.goToRequest(2);
        });
        await test.step('Check the Essential Elements in Review & Assign page (Post Award)', async () => {
          await rmReviewAndAssignActions.checkEssentialElements();
        });
        //Pre-award
        await test.step('Click on Home', async () => {
          await rmHeaderActions.goToHomeFromHeader();
        });
        await test.step('Click on Requests', async () => {
          await rmSideBarActions.goToRequests();
        });
        await test.step('Click on Pre Award Requests', async () => {
          await rmSideBarActions.goToPreAwardRequests();
        });
        await test.step('Check Essential Elements in Request Summary page (Pre Award)', async () => {
          await rmRequestsFilterCriteriaActions.checkEssentialElements();
        });
        await test.step('Go to the first request in the table (Pre Award)', async () => {
          await rmRequestsFilterCriteriaActions.goToPreAwardRequest(2);
        });
        await test.step('Check the Essential Elements in Review & Assign page (Pre Award)', async () => {
          await rmReviewAndAssignActions.checkEssentialElements();
        });
      });
  });

  test.describe('RM::Request - Review & Assign', () => {
    test('RM::Request - Review & Assign -> Ensure the resource details coming from workday to INT to RM',
      async ({ rmCommonActions,
               rmRequestsFilterCriteriaActions,
               rmHeaderActions,
               rmSideBarActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Request' },
          { type: 'tag', description: 'Review & Assign' },
          { type: 'tag', description: 'Resource details' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'RequestManagement');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on REQUESTS', async () => {
              await rmSideBarActions.goToRequests();
            });
            await test.step(`Click on request number: ${row['RequestNo']}`, async () => {
              await rmRequestsFilterCriteriaActions.goToRequest(Number.parseInt(`${row['RequestNo']}`));
            });
            await test.step('Validate Request Summary title', async () => {
              await rmCommonActions.validateTitle("Review & Assign");
            });

          }
        }
      });

    test('RM::Request - Review & Assign -> Ensure that user can able to change the region , country using filters',
      async ({ rmCommonActions,
               rmRequestsFilterCriteriaActions,
               rmHeaderActions,
               rmSideBarActions,
               rmReviewAndAssignActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Request' },
          { type: 'tag', description: 'Review & Assign' },
          { type: 'tag', description: 'Filters' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'RequestManagement');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on REQUESTS', async () => {
              await rmSideBarActions.goToRequests();
            });
            await test.step(`Click on request number: ${row['RequestNo']}`, async () => {
              //console.log(`Click on request number: ${row['RequestNo']}`);
              await rmRequestsFilterCriteriaActions.goToRequest(Number.parseInt(`${row['RequestNo']}`));
            });
            await test.step('Validate Review & Assign title', async () => {
              await rmCommonActions.validateTitle('Review & Assign');
            });
            await test.step('Change Region', async () => {
              await rmReviewAndAssignActions.changeRegion(`${row['Region']}`);
            });
            await test.step('Change Country', async () => {
              await rmReviewAndAssignActions.changeCountry(`${row['Country']}`);
            });
            await test.step('Search Resource', async () => {
              await rmReviewAndAssignActions.clickSearch();
            });
          }
        }
      });

    test('RM::Request - Review & Assign -> Ensure that user have assign demand , assign availability , profile review , mark unfulfilled and submit button',
      async ({ rmCommonActions,
               rmRequestsFilterCriteriaActions,
               rmHeaderActions,
               rmSideBarActions,
               rmReviewAndAssignActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Request' },
          { type: 'tag', description: 'Review & Assign' },
          { type: 'tag', description: 'Resource buttons' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'RequestManagement');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on REQUESTS', async () => {
              await rmSideBarActions.goToRequests();
            });
            await test.step(`Click on request number: ${row['RequestNo']}`, async () => {
              //console.log(`Click on request number: ${row['RequestNo']}`);
              await rmRequestsFilterCriteriaActions.goToRequest(Number.parseInt(`${row['RequestNo']}`));
            });
            await test.step('Validate Review & Assign title', async () => {
              await rmCommonActions.validateTitle('Review & Assign');
            });
            await test.step('Check buttons', async () => {
              await rmReviewAndAssignActions.checkEssentialElements();
            });

          }
        }
      });

  });

  test.describe('RM::Post-award Request - Profile Review', () => {
    test('RM::Post-award Request - Profile Review -> Ensure whether the resource details available in card view',
      async ({ rmProfileCriteriaActions,
               rmCommonActions,
               rmRequestsFilterCriteriaActions,
               rmHeaderActions,
               rmSideBarActions,
               rmReviewAndAssignActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Request' },
          { type: 'tag', description: 'Review & Assign' },
          { type: 'tag', description: 'Profile Review' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'RequestManagement');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on REQUESTS', async () => {
              await rmSideBarActions.goToRequests();
            });
            await test.step(`Click on request number: ${row['RequestNo']}`, async () => {
              //console.log(`Click on request number: ${row['RequestNo']}`);
              await rmRequestsFilterCriteriaActions.goToRequest(Number.parseInt(`${row['RequestNo']}`));
            });
            await test.step('Validate Review & Assign title', async () => {
              await rmCommonActions.validateTitle('Review & Assign');
            });
            await test.step('Go to Profile Review', async () => {
              await rmReviewAndAssignActions.gotoProfileReview();
            });
            await test.step('Validate Profile Criteria title', async () => {
              await rmProfileCriteriaActions.validateHeader('Profile Criteria');
            });
            await test.step('Check buttons', async () => {
              await rmProfileCriteriaActions.checkEssentialElements();
            });

          }
        }
      });

  });

  test.describe('RM::Assignment - Resource View', () => {
    test('RM::Assignment - Resource View -> Ensure whether all the resource assigned to the particular project will show in resource view',
      async ({ rmCommonActions,
               rmHeaderActions,
               rmSideBarActions,
               rmAssignmentsActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Assignment' },
          { type: 'tag', description: 'Resource View' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'AssignmentResource');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on DIRECT ASSIGN', async () => {
              await rmSideBarActions.goToDirectAssign();
            });
            await test.step('Validate Assignment title', async () => {
              await rmCommonActions.validateTitle('Assignment');
            });
            await test.step('Select a Resource Pool', async () => {
              await rmAssignmentsActions.selectAllResourcesPool(row['SearchPool']);
            });
            await test.step('Check the resource assignment table', async () => {
              await rmAssignmentsActions.checkResourceAssignmentTable(row['SearchPool']);
            });
            await test.step('Select a Resource', async () => {
              await rmAssignmentsActions.selectEmployeeInAssignmentTable(row['EmployeeName']);
            });
            await test.step('Check assignment detail table', async () => {
              await rmAssignmentsActions.checkAssignmentDetailTableFromAssigment(row['EmployeeID']);
            });

          }
        }
      });

    test('RM::Assignment - Resource View -> Ensure whether the new resource is assigned , unassigned and replace in DA Screen ',
      async ({ rmCommonActions,
               rmHeaderActions,
               rmSideBarActions,
               rmAssignmentsActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Assignment' },
          { type: 'tag', description: 'Resource View' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'AssignmentResource');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on DIRECT ASSIGN', async () => {
              await rmSideBarActions.goToDirectAssign();
            });
            await test.step('Validate Assignment title', async () => {
              await rmCommonActions.validateTitle('Assignment');
            });
            await test.step('Select a Resource Pool', async () => {
              await rmAssignmentsActions.selectAllResourcesPool(row['SearchPool']);
            });
            await test.step('Check the assign resource dialog', async () => {
              await rmAssignmentsActions.checkAssignResourceDialog(row['EmployeeName'], row['EmployeeID']);
            });
            await test.step('Select a Resource', async () => {
              await rmAssignmentsActions.selectEmployeeInAssignmentTable(row['EmployeeName']);
            });
            await test.step('Check the unassign dialog', async () => {
              await rmAssignmentsActions.checkUnassignResourceDialog(row['EmployeeName'], row['EmployeeID']);
            });
            await test.step('Check the replace resource dialog', async () => {
              await rmAssignmentsActions.checkReplaceResourceDialog(row['EmployeeName'], row['EmployeeID']);
            });

          }
        }
      });

  });

  test.describe('RM::Assignment - Project View', () => {
    test('RM::Assignment - Project View -> Ensure whether all the resource assigned to the particular project will show in project view',
      async ({ rmCommonActions,
               rmHeaderActions,
               rmSideBarActions,
               rmAssignmentsActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Assignment' },
          { type: 'tag', description: 'Project View' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'AssignmentProject');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on DIRECT ASSIGN', async () => {
              await rmSideBarActions.goToDirectAssign();
            });
            await test.step('Validate Assignment title', async () => {
              await rmCommonActions.validateTitle('Assignment');
            });
            await test.step('Click on PROJECT tab', async () => {
              await rmAssignmentsActions.clickProjectTab();
            });
            await test.step('Select Project', async () => {
              await rmAssignmentsActions.selectProject(row['P-Code'].toString());
            });
            await test.step('Check the resource assignment table', async () => {
              await rmAssignmentsActions.checkProjectAssignmentTable(row['ProjectRole']);
            });
            await test.step('Select Project Role', async () => {
              await rmAssignmentsActions.selectProjectRoleInProjectTable(row['ProjectRole']);
            });
            await test.step('Check assignment detail table', async () => {
              await rmAssignmentsActions.checkAssignmentDetailTableFromProject(row['P-Code'].toString(), row['ProjectRole']);
            });

          }
        }
      });

    test('RM::Assignment - Project View -> Ensure whether the new resource is assigned , unassigned and replace in DA Screen ',
      async ({ rmCommonActions,
               rmHeaderActions,
               rmSideBarActions,
               rmAssignmentsActions,
             }) => {
        test.info().annotations.push(
          { type: 'tag', description: 'Smoke Test' },
          { type: 'tag', description: 'Assignment' },
          { type: 'tag', description: 'Resource View' },
        );
        const xlsProject = await excelUtils.readExcelToCollection(path.resolve('./data/rm/rm-smoke.xlsx'), 'AssignmentProject');
        for (const row of xlsProject) {
          if (row['Run'].toString() === "1") {
            timeout = timeout + 30000;
            test.setTimeout(timeout);
            await test.step('Click on Home', async () => {
              await rmHeaderActions.goToHomeFromHeader();
            });
            await test.step('Click on DIRECT ASSIGN', async () => {
              await rmSideBarActions.goToDirectAssign();
            });
            await test.step('Validate Assignment title', async () => {
              await rmCommonActions.validateTitle('Assignment');
            });
            await test.step('Click on PROJECT tab', async () => {
              await rmAssignmentsActions.clickProjectTab();
            });
            await test.step('Select Project', async () => {
              await rmAssignmentsActions.selectProject(row['P-Code'].toString());
            });
            await test.step('Check the assign resource dialog', async () => {
              await rmAssignmentsActions.checkAssignResourceDialog(row['ProjectRole'], false);
            });
            await test.step('Select Project Role', async () => {
              await rmAssignmentsActions.selectProjectRoleInProjectTable(row['ProjectRole']);
            });
            await test.step('Check the unassign dialog', async () => {
              await rmAssignmentsActions.checkUnassignResourceDialog(row['EmployeeName'], false);
            });
            await test.step('Check the replace resource dialog', async () => {
              await rmAssignmentsActions.checkReplaceResourceDialog(row['EmployeeName'], false);
            });

          }
        }
      });

  });

  test.describe('RM::Home Page', () => {
    test('RM::Home Page -> Ensure the request is available under all projects page', async ({rmSideBarActions}) => {
      test.info().annotations.push(
        { type: 'tag', description: 'Smoke Test' },
        { type: 'tag', description: 'Side Bar' },
        { type: 'tag', description: 'Request' },
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

    test('RM::Home Page -> Assignment notification available under assignment notification tab',async ({rmSideBarActions, rmAssignmentNotificationsActions}) => {
      test.info().annotations.push(
        { type: 'tag', description: 'Smoke Test' },
        { type: 'tag', description: 'Home Page' },
        { type: 'tag', description: 'Assignment notifications' },
      );
      test.setTimeout(60_000); // 60 seconds
      await test.step('Click on Assignment notifications', async () => {
        await rmSideBarActions.goToAssignmentNotifications();
      });
      await test.step('Check for Essential Elements', async () => {
        await rmAssignmentNotificationsActions.checkEssentialElements();
      });
    });

    test('RM::Home Page -> Ensure the overdue request is available', async ({rmSideBarActions, rmMyRequestsActions}) => {
      test.info().annotations.push(
        { type: 'tag', description: 'Smoke Test' },
        { type: 'tag', description: 'Home Page' },
        { type: 'tag', description: 'My Requests' },
        { type: 'tag', description: 'Overdue request' },
      );
      test.setTimeout(60_000); // 60 seconds
      await test.step('Click on My Requests', async () => {
        await rmSideBarActions.goToMyRequests();
      });
      await test.step('Check for Essential Elements', async () => {
        await rmMyRequestsActions.checkEssentialElements();
      });
    });

    test('RM::Home Page -> Ensure the HR Actions have the upcoming termination , leaves , new hire and role change', async ({rmSideBarActions, rmHrActionsActions}) => {
      test.info().annotations.push(
        { type: 'tag', description: 'Smoke Test' },
        { type: 'tag', description: 'Home Page' },
        { type: 'tag', description: 'HR Actions' },
        { type: 'tag', description: 'Upcoming terminations, leaves, new hires, role change' },
      );
      test.setTimeout(120_000); // 90 seconds
      await test.step('Click on HR Actions', async () => {
        await rmSideBarActions.goToHRActions();
      });
      await test.step('Check for Essential Elements', async () => {
        await rmHrActionsActions.checkEssentialElements();
      });
    });

    test('RM::Home Page -> Ensure over assigned , under assigned , email notification , Pending conversation and email acknowledgement', async ({rmSideBarActions, rmMyPoolsActions}) => {
      test.info().annotations.push(
        { type: 'tag', description: 'Smoke Test' },
        { type: 'tag', description: 'Home Page' },
        { type: 'tag', description: 'My Pools' },
        { type: 'tag', description: 'Assigned, under assigned, email notification, pending conversation and email acknowledgement' },
      );
      test.setTimeout(60_000); // 60 seconds
      await test.step('Click on My Pools', async () => {
        await rmSideBarActions.goToMyPools();
      });
      await test.step('Check for Essential Elements', async () => {
        await rmMyPoolsActions.checkEssentialElements();
      });
    });

  });

});