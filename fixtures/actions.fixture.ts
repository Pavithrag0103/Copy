import { componentFixture as base } from './components.fixture';
import { HeaderNavigationActions } from '../actions/navigation/header-navigation';
import { CreateIntakeActions } from '../actions/intake/create-intake';
import { Page } from '@playwright/test';

type ActionConstructor<T> = new (page: Page) => T;

function createAction<T>(actionConstructor: ActionConstructor<T>) {
  return async ({ page }, use: (value: T) => Promise<void>) => {
    const action = new actionConstructor(page);
    await use(action);
  };
}

export const test = base.extend<{
  headerNavigationActions: HeaderNavigationActions;
  createIntakeActions: CreateIntakeActions;
}>({
  headerNavigationActions: createAction(HeaderNavigationActions),
  createIntakeActions: createAction(CreateIntakeActions),
});

export { expect } from '@playwright/test';
