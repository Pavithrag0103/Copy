import { expect } from '@playwright/test';
import { HeaderNavigationComponent } from '../../components/header/header-navigation';

export class HeaderNavigationActions extends HeaderNavigationComponent {
  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.page.goto(dynamicUrl);
    await expect(this.lnkHome).toBeVisible();
  }

  async goToHome(): Promise<void> {
    await this.lnkHome.click();
    await expect(this.btnCreateIntake).toBeVisible();
  }

  async goToAllBids(): Promise<void> {
    await this.lnkAllBids.click();
    await expect(this.page.locator('h1')).toHaveText('All Bids');
  }

  async goToReports(): Promise<void> {
    await this.lnkReports.click();
    await expect(this.page.locator('h1')).toHaveText('Reports');
  }

  async goToAdmin(): Promise<void> {
    await this.lnkAdmin.click();
    await expect(this.page.locator('h1')).toHaveText('Admin');
  }

  async createIntake(): Promise<void> {
    await this.btnCreateIntake.click();
    await expect(this.txtProjectCode).toBeVisible();
  }
}
