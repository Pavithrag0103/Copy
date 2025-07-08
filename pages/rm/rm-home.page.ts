import { Page, expect } from '@playwright/test';
import { RmHomeActions } from '../../actions/rm/home/rm-home.actions';
//import { getSessionData } from '../utils/session-data';

export class RmHomePage {
  rmHomeActions: RmHomeActions;

  constructor(private page: Page) {
    this.rmHomeActions = new RmHomeActions(page);
  }

  async verifyHomePageElements() {
    await this.rmHomeActions.checkNavigationEssentialElements();
  }
}