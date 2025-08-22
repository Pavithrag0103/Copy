import { Page } from '@playwright/test';
import { NavHeader } from '../components/header/nav-header';

export class HeaderPage {
  nav: NavHeader;

  constructor(private page: Page) {
    this.nav = new NavHeader(page);
  }

  async verifyHeaderIsVisible() {
    const isVisible = await this.nav.isVisible();
    if (!isVisible) throw new Error('Header is not visible');
  }

  async openUserMenu() {
    await this.nav.clickProfile();
  }
}
