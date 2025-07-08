import {expect, Locator, Page} from '@playwright/test';
import { RmDemandManagementComponent } from '../../../components/rm/demand/rm-demand-management.component';
import {RmCommonActions} from "../common/rm-common.actions";

export class RmDemandManagementActions extends RmDemandManagementComponent {
  rmCommonActions: RmCommonActions;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }

  async goToBaseUrl(dynamicUrl: string): Promise<void> {
    await this.page.goto(dynamicUrl);
    await this.page.waitForLoadState('networkidle');
  }

  private async validateTab(tabName: string = "NA"): Promise<void> {
    let index:number;
    index = await this.rmCommonActions.getIndexByText(this.tabAll, tabName);
    await expect(this.imageTabTopSearch.nth(index), 'Column search is visible').toBeVisible();
    await expect(this.txtTabTopSearch.nth(index), 'Search input is visible').toBeVisible();
    await expect(this.btnTabTopSearch.nth(index), 'Search button is visible').toBeVisible();
    await expect(this.dropTabTopActions.nth(index), 'Actions dropdown is visible').toBeVisible();
    await expect(this.dropTabTopProjectDuration.nth(index), 'Project Duration dropdown is visible').toBeVisible();
    await expect(this.imageTabSearch.nth(index), 'Column search is visible').toBeVisible();
    await expect(this.txtTabSearch.nth(index), 'Search input is visible').toBeVisible();
    await expect(this.btnTabSearch.nth(index), 'Search button is visible').toBeVisible();
    await expect(this.dropTabActions.nth(index), 'Actions dropdown is visible').toBeVisible();
    //await expect(this.btnTabUndo.nth(index), 'Undo button is visible').toBeVisible();
    //await expect(this.btnTabReset.nth(index), 'RESET button is visible').toBeVisible();
    await expect(this.tableTabOverviewDemand.nth(index), 'Overview Demand table in tab is visible').toBeVisible();
    await expect(this.tableTabDemand.nth(index), 'Overview Demand table in tab is visible').toBeVisible();
  }

  async checkEssentialElements(): Promise<void> {
    await this.rmCommonActions.waitForLoadState();
    await expect(this.tabOverview, 'OVERVIEW tab is visible').toBeVisible();
    await expect(this.imageSearch, 'Column search is visible').toBeVisible();
    await expect(this.txtSearch, 'Search input is visible').toBeVisible();
    await expect(this.btnSearch, 'Search button is visible').toBeVisible();
    await expect(this.dropActions, 'Actions dropdown is visible').toBeVisible();
    await expect(this.dropProjectDuration, 'Project Duration dropdown is visible').toBeVisible();
    await expect(this.tableOverviewDemand, 'Overview Demand table is visible').toBeVisible();

    await this.rmCommonActions.clickAllLocator(this.tabAll);

    if (await this.tabAPAC.isVisible())
    {
      await expect(this.tabAPAC, 'NA tab is visible').toBeVisible();
      await this.tabAPAC.click();
      await this.validateTab("APAC");
    }
    if (await this.tabEMEA.isVisible())
    {
      await expect(this.tabEMEA, 'NA tab is visible').toBeVisible();
      await this.tabEMEA.click();
      await this.validateTab("EMEA");
    }
    if (await this.tabJapan.isVisible())
    {
      await expect(this.tabJapan, 'NA tab is visible').toBeVisible();
      await this.tabJapan.click();
      await this.validateTab("JAPAN");
    }
    if (await this.tabLATAM.isVisible())
    {
      await expect(this.tabLATAM, 'NA tab is visible').toBeVisible();
      await this.tabLATAM.click();
      await this.validateTab("LATAM");
    }
    if (await this.tabNA.isVisible())
    {
      await expect(this.tabNA, 'NA tab is visible').toBeVisible();
      await this.tabNA.click();
      await this.validateTab("NA");
    }
  }
}