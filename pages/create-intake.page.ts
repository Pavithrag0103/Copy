import { Page, Locator } from '@playwright/test';
import { CreateIntakeComponent } from '../components/intake/create-intake';

export class CreateIntakePage {
  readonly page: Page;
  readonly container: Locator;

  constructor(page: Page) {
    this.page = page;
    this.container = page.locator('main'); // or another scoped element
  }

  async goto(): Promise<void> {
    await this.page.goto('/create-intake'); // or baseURL + route
    await this.container.waitFor(); // confirms page loaded
  }
}
