import { expect, Page } from '@playwright/test';
import { RmHomeComponent } from '../../../components/rm/home/rm-home.component';
import {RmHeaderActions} from '../navigation/rm-header.actions'
import {RmSideBarActions} from '../navigation/rm-side-bar.actions'

export class RmHomeActions extends RmHomeComponent {
  rmHeaderActions: RmHeaderActions;
  rmSideBarActions: RmSideBarActions;

  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.page.goto(dynamicUrl);
    await this.page.waitForLoadState('networkidle');
    //await expect(this.).toBeVisible();
    //await expect(this.lnkHome).toBeVisible();
  }
  async checkNavigationEssentialElements(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    this.rmHeaderActions = new RmHeaderActions(this.page);
    this.rmSideBarActions = new RmSideBarActions(this.page);
    await this.rmHeaderActions.checkEssentialElements();
    await this.rmSideBarActions.checkEssentialElements();
  }
  async checkHeaderEssentialElements(): Promise<void> {
    this.rmHeaderActions = new RmHeaderActions(this.page);
    await this.rmHeaderActions.checkEssentialElements();
  }

  async checkSideBarEssentialElements(): Promise<void> {
    this.rmSideBarActions = new RmSideBarActions(this.page);
    await this.rmSideBarActions.checkEssentialElements();
  }
}