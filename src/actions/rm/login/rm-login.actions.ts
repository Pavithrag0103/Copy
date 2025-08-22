import {expect, Locator} from '@playwright/test';
import { RmLoginComponent } from '../../../components/rm/login/rm-login.component';

export class RmLoginActions extends RmLoginComponent {
  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.page.goto(dynamicUrl);
    await expect(this.btnSignIn).toBeVisible();
  }

  async logIn(userEmail: string, userPassword: string): Promise<void> {
    await this.txtUser.fill(userEmail);
    await this.btnSignIn.click();
    await expect(this.lblUser).toBeVisible();
    await this.txtPassword.fill(userPassword);
    await this.btnSignIn.click();
  }
}