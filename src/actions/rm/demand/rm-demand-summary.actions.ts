import {expect, Locator, Page} from '@playwright/test';
import { RmDemandSummaryComponent } from '../../../components/rm/demand/rm-demand-summary.component';
import {RmCommonActions} from "../common/rm-common.actions";
import {rmDatabaseData} from "../../../helpers/data.helper";
import {playwrightExtension} from "src/helpers/utils.helper"
import { stringUtil} from "@utils/string.util";
import * as path from 'path';

export class RmDemandSummaryActions extends RmDemandSummaryComponent {
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
    //await this.rmCommonActions.validateTitle("Review & Assign");
    //console.log(await this.rmCommonActions.getTitle());
    const isPreAward = (await this.rmCommonActions.getTitle()).toLowerCase().includes('pre-award');
    //console.log(isPreAward);
    await expect(this.imageSearch, 'Column search is visible').toBeVisible();
    await expect(this.txtSearch, 'Search input is visible').toBeVisible();
    await expect(this.btnSearch, 'Search button is visible').toBeVisible();
    !isPreAward ? await expect(this.dropRows, 'Rows dropdown is visible').toBeVisible() : null;
    await expect(this.dropActions, 'Actions dropdown is visible').toBeVisible();
    !isPreAward ? await expect(this.btnUndo, 'Undo button is visible').toBeVisible() : null;
    //!isPreAward ? await expect(this.btnReset, 'RESET button is visible').toBeVisible() : null;
    // await expect(this.tableDemand, 'Demand Summary table is visible').toBeVisible();
    // await playwrightExtension.softExpectVisible('Demand Summary table is visible', this.tableDemand, 1000);
    await playwrightExtension.softStep('Demand Summary table is visible', async () => {
      await expect(this.tableDemand, 'Demand Summary table is visible').toBeVisible({timeout:1000});
    })
  }

  async goToDemand(row: number, column: number): Promise<void> {
    await this.rmCommonActions.clickTableLink(this.tableDemand, row, column);
    await this.page.waitForLoadState('networkidle');
  }

  async goToRoleDemand(role: string): Promise<void> {
    await this.rmCommonActions.clickTableTextLink(this.tableDemand, role);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForLoadState('load');
  }

  async downloadReport(newPath: string = path.resolve('./artifact/downloads/')): Promise<void> {
    await this.dropActions.click();
    await this.btnMenuDownload.click();
    await this.btnCSV.click();
    await this.btnDownload.click();
    let report = await this.page.waitForEvent('download');
    await report.saveAs(`${newPath}/DemandSummary_${stringUtil.yyyymmddhhmmss()}.csv`);
    await this.btnXLS.click();
    await this.btnDownload.click();
    report = await this.page.waitForEvent('download');
    await report.saveAs(`${newPath}/DemandSummary_${stringUtil.yyyymmddhhmmss()}.xlsx`);
    await this.btnCancel.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForLoadState('load');
  }

  async checkDemandSummaryDepartmentTable(project: string): Promise<void> {
    const dataDemandSummaryDepartment = JSON.parse(await rmDatabaseData.getDemandSummaryDepartmentInfo(project));
    //console.log(dataDemandSummaryDepartment);
    await this.rmCommonActions.waitForLoadState();
    await this.rmCommonActions.changeRows(this.tableDemand, this.dropRows, '50');
    for (const row of dataDemandSummaryDepartment) {
      //console.log(row);
      await this.rmCommonActions.validateTableCellTextValue(this.tableDemand, `${row['ROLE_NAME'] ?? ''}`, `${row['RBU_LONG_DESC'] ?? ''}`)
    }
  }

  async checkDemandSummaryRoleTable(project: string): Promise<void> {
    const dataDemandSummaryRole = JSON.parse(await rmDatabaseData.getForecastInfo(project));
    //console.log(dataDemandSummaryRole);
    await this.rmCommonActions.waitForLoadState();
    await this.rmCommonActions.changeRows(this.tableDemand, this.dropRows, '50');
    for (const row of dataDemandSummaryRole) {
      //console.log(row);
      await this.rmCommonActions.validateTableCellTextValue(this.tableDemand, `${row['ROLE_NAME'] ?? ''}`, `${row['DEPARTMENT'] ?? ''}`)
    }
  }

  async checkDemandSummaryForecast(project: string): Promise<void> {
    const dataDemandSummaryRole = JSON.parse(await rmDatabaseData.getForecastInfo(project));
    //console.log(dataDemandSummaryRole);
    await this.rmCommonActions.waitForLoadState();
    await this.rmCommonActions.changeRows(this.tableDemand, this.dropRows, '50');
    for (const row of dataDemandSummaryRole) {
      const values: string[] = Object.values(row);
      //console.log(row);
      //console.log(values);
      await this.rmCommonActions.validateTableRowTextValue(this.tableDemand, `${row['ROLE_NAME'] ?? ''}`, values)
    }
  }
}