import { test as base } from '@playwright/test';
import { HeaderNavigationComponent } from '../components/header/header-navigation';

export const componentFixture = base.extend<{
  headerComponent: HeaderNavigationComponent;
}>({
  headerComponent: async ({ page }, use) => {
    const headerComponent = new HeaderNavigationComponent(page);
    await use(headerComponent);
  },
});
