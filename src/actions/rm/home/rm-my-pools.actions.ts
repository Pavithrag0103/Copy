import {expect, Locator, Page, test} from '@playwright/test';
import { RmMyPoolsComponent } from '../../../components/rm/home/rm-my-pools.component';
import {RmCommonActions} from "../common/rm-common.actions";

export class RmMyPoolsActions extends RmMyPoolsComponent {
  rmCommonActions: RmCommonActions;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }

  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.page.goto(dynamicUrl);
    await this.page.waitForLoadState('networkidle');
  }

  async checkEssentialElements(): Promise<void> {
    await this.rmCommonActions.waitForLoadState();
    await expect(this.tabOverAssignedResources, 'Over Assigned Resources tab is visible').toBeVisible();
    await expect(this.tabUnderAssignedResources, 'Under Assigned Resources tab is visible').toBeVisible();
    await expect(this.tabPendingConversions, 'Pending Conversions tab is visible').toBeVisible();
    await expect(this.tabEmailAcknowledgements, 'Email Acknowledgements tab is visible').toBeVisible();

    await test.step('Validate elements in Over Assigned Resources tab', async () => {
      await expect(this.dropOARPool, 'Pool dropdown is visible').toBeVisible();
      await this.dropOARPool.click();
      await expect(this.txtOARSearchPool, 'Pool search input is visible').toBeVisible();
      await expect(this.tablePool, 'Pool table is visible').toBeVisible();
      await this.rmCommonActions.clickTableCell(this.tablePool,2,1);
      await expect(this.imageOARSearch, 'Column search is visible').toBeVisible();
      await expect(this.txtOARSearch, 'Search input is visible').toBeVisible();
      await expect(this.btnOARSearch, 'Search button is visible').toBeVisible();
      await expect(this.dropOARRows, 'Rows dropdown is visible').toBeVisible();
      await expect(this.dropOARActions, 'Actions dropdown is visible').toBeVisible();
      await expect(this.btnUndo, 'Undo button is visible').toBeVisible();
      await expect(this.btnReset, 'RESET button is visible').toBeVisible();
      await expect(this.tableOARResultPool, 'Over Assigned Resources table is visible').toBeVisible();
    });

    await test.step('Validate elements in Under Assigned Resources tab', async () => {
      await this.tabUnderAssignedResources.click();
      await this.rmCommonActions.waitForLoadState();
      await expect(this.dropUARPool, 'Pool dropdown is visible').toBeVisible();
      await this.dropUARPool.click();
      await expect(this.txtUARSearchPool, 'Pool search input is visible').toBeVisible();
      await expect(this.tablePool, 'Pool table is visible').toBeVisible();
      await this.rmCommonActions.clickTableCell(this.tablePool,2,1);
      await expect(this.imageUARSearch, 'Column search is visible').toBeVisible();
      await expect(this.txtUARSearch, 'Search input is visible').toBeVisible();
      await expect(this.btnUARSearch, 'Search button is visible').toBeVisible();
      await expect(this.dropUARRows, 'Rows dropdown is visible').toBeVisible();
      await expect(this.dropUARActions, 'Actions dropdown is visible').toBeVisible();
      await expect(this.btnUndo, 'Undo button is visible').toBeVisible();
      await expect(this.btnReset, 'RESET button is visible').toBeVisible();
      await expect(this.tableUARResultPool, 'Under Assigned Resources table is visible').toBeVisible();
    });

    await test.step('Validate elements in Pending Conversions tab', async () => {
      await this.tabPendingConversions.click();
      await this.rmCommonActions.waitForLoadState();
      await expect(this.imagePCSearch, 'Column search is visible').toBeVisible();
      await expect(this.txtPCSearch, 'Search input is visible').toBeVisible();
      await expect(this.btnPCSearch, 'Search button is visible').toBeVisible();
      await expect(this.dropPCRows, 'Rows dropdown is visible').toBeVisible();
      await expect(this.dropPCActions, 'Actions dropdown is visible').toBeVisible();
      await expect(this.btnUndo, 'Undo button is visible').toBeVisible();
      await expect(this.btnReset, 'RESET button is visible').toBeVisible();
      //await expect(this.tablePCResultPool, 'Pending Conversions table is visible').toBeVisible();
    });

    await test.step('Validate elements in Email Acknowledgments tab', async () => {
      await this.tabEmailAcknowledgements.click();
      await this.rmCommonActions.waitForLoadState();
      await expect(this.imageEASearch, 'Column search is visible').toBeVisible();
      await expect(this.txtEASearch, 'Search input is visible').toBeVisible();
      await expect(this.btnEASearch, 'Search button is visible').toBeVisible();
      await expect(this.dropEARows, 'Rows dropdown is visible').toBeVisible();
      await expect(this.dropEAActions, 'Actions dropdown is visible').toBeVisible();
      await expect(this.btnUndo, 'Undo button is visible').toBeVisible();
      await expect(this.btnReset, 'RESET button is visible').toBeVisible();
      await expect(this.tableEAResultPool, 'Email Acknowledgements table is visible').toBeVisible();
    });
  }
}