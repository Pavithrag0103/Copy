import {expect, Locator, Page} from '@playwright/test';
import { RmHeaderComponent } from '../../../components/rm/header/rm-header.component';
import { RmCommonActions } from '../common/rm-common.actions';

export class RmHeaderActions extends RmHeaderComponent {
  rmCommonActions: RmCommonActions;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }
  /**
   * Goes to the given link.
   * @param dynamicUrl - URL of the header page
   **/
  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.rmCommonActions.goToBaseUrl(dynamicUrl, this.lnkHome)
  }

  async checkEssentialElements(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await expect(this.imgLogo, 'Logo is visible').toBeVisible();
    await expect(this.lblHeader, 'Header is visible').toBeVisible();
    await expect(this.lblSubHeader, 'Sub Header is visible').toBeVisible();
    await expect(this.tabResourcing, 'Resourcing Tab visible').toBeVisible();
    await expect(this.btnEnvironment, 'Environment Tab visible').toBeVisible();
    await expect(this.btnAppSelector, 'App Selector Tab visible').toBeVisible();
    //await expect(this.btnNotification, 'Notification Tab visible').toBeVisible();
    await expect(this.btnUser, 'User Tab visible').toBeVisible();
    await expect(this.lnkHome, 'Home Tab visible').toBeVisible();
    await expect(this.lnkAdmin, 'Admin Tab visible').toBeVisible();
  }

  async goToHomeFromLogo(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.imgLogo, 'Home');
  }

  async goToHomeFromHeader(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lblHeader, 'Home');
  }

  async goToHomeFromSubHeader(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lblSubHeader, 'Home');
  }

  async goToHomeFromResourcingTab(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.tabResourcing, 'Home');
  }

  async openEnvironmentDialog(): Promise<void> {
    //await this.rmCommonActions.goToLinkValidateTitle(this.btnEnvironment, 'Home');
    await this.btnEnvironment.click();
    await expect(this.page.locator('#ui-id-1.ui-dialog-title:has-text("APEX APP Attributes")')).toBeVisible();
  }

  async openAppSelector(): Promise<void> {
    //await this.rmCommonActions.goToLinkValidateTitle(this.imgLogo, 'Home');
    await this.btnAppSelector.click();
    await expect(this.page.locator('#dropdownMenu.template-proj-center-menu.show:has-text("App Selector")')).toBeVisible();
  }

  async openNotifications(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.btnNotification, 'Home');
  }

  async openUserMenu(): Promise<void> {
    //await this.rmCommonActions.goToLinkValidateTitle(this.imgLogo, 'Home');
    await this.btnUser.click();
    await expect(this.page.locator('div.t-NavigationBar-menu.a-Menu:has-text("System Administration")')).toBeVisible();
  }

  async goToHomeFromHomeLink(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.lnkHome, 'Home');
  }

  async goToAdmin(): Promise<void> {
    await this.rmCommonActions.goToLinkValidateTitle(this.imgLogo, 'Home');
    await this.lnkAdmin.click();
    await this.rmCommonActions.waitForLoadState();
    const items = this.page.locator('.t-Card');
    const count = await items.count();
    expect(count).toBeGreaterThanOrEqual(1);
  }
}