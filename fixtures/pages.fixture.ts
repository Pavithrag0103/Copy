import { test as base } from '@playwright/test';
import { CreateIntakePage } from '../pages/create-intake.page';
import { RmHomePage } from '../pages/rm/rm-home.page';
import { Page } from '@playwright/test';

type PageConstructor<T> = new (page: Page) => T;

function createPageFixture<T>(pageConstructor: PageConstructor<T>) {
  return async ({ page }, use: (value: T) => Promise<void>) => {
    const pageInstance = new pageConstructor(page);
    await use(pageInstance);
  };
}

export const test = base.extend<{
  createIntakePage: CreateIntakePage;
  rmHomePage: RmHomePage;
}>({
  createIntakePage: createPageFixture(CreateIntakePage),
  rmHomePage: createPageFixture(RmHomePage),
});