import { test, expect } from '../../fixtures/actions.fixture';

test.describe('Create Intake Test Suite', () => {
  test('Search with project code', async ({ headerNavigationActions, createIntakeActions }) => {
    await headerNavigationActions.goToHome();
    await createIntakeActions.searchWithProjectCode('PRJ001');
  });

  test('Search with opportunity name', async ({ headerNavigationActions, createIntakeActions }) => {
    await headerNavigationActions.goToHome();
    await createIntakeActions.searchWithOpportunityName('Opportunity ABC');
  });

  test('Search with sponsor name', async ({ headerNavigationActions, createIntakeActions }) => {
    await headerNavigationActions.goToHome();
    await createIntakeActions.searchWithSponsorName('Sponsor XYZ');
  });
});
