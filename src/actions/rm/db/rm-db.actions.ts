import { executeOracleQuery } from '../../../utils/database';
import {expect} from "@playwright/test";
import {playwrightExtension} from "../../../utils/playwright-extension";

export class RmDatabaseActions {
  private async verifyQuery(query: string, expectedResult?: number, message?: string): Promise<boolean> {
    const result = await executeOracleQuery(query);
    //expect(result.rowCount).toEqual(expectedResult);
    //!(result.rowCount === expectedResult) ? console.log(result.rowCount.toString()) : null;
    //!(result.rowCount === expectedResult) ? console.log(expectedResult.toString()) : null;
    return (result.rowCount === expectedResult);
  }

  async checkEmployeeHireDate():Promise<boolean> {
    return await this.verifyQuery('SELECT * FROM rm.rm_hcm_employee WHERE hire_dt is null', 0);
  }
  async checkEmployeeCountry():Promise<boolean> {
    return await this.verifyQuery('select * from rm.rm_hcm_employee where home_country_iso is null', 0);
  }
  async checkEmployeeRegion():Promise<boolean> {
    return await this.verifyQuery('select * from rm.rm_hcm_employee where region is null', 0);
  }
  async checkEmployeeRehired():Promise<boolean> {
    return await this.verifyQuery('select * from rm.rm_hcm_employee where (HIRE_DT > LASTWORK_DT or HIRE_DT > TERM_DT)', 0);
  }
  async checkEmployeeTerminated():Promise<boolean> {
    return await this.verifyQuery("select * from rm.rm_hcm_employee  where term_dt is not null and status not in 'Terminated' and term_dt < trunc(sysdate) and term_dt > hire_dt", 0);
  }
  async checkProjectUPC():Promise<boolean> {
    return await this.verifyQuery('select * from rm.rm_project_profile where upc is null', 0);
  }
  async checkAssignmentType():Promise<boolean> {
    return await this.verifyQuery('select * from rm.rm_assignment where assignment_type is null', 0);
  }

}