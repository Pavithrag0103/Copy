import { executeOracleQuery } from '../../../utils/database';
import { expect } from "@playwright/test";
import { playwrightExtension } from "../../../utils/playwright-extension";

export class RmDatabaseActions {
  private async verifyQuery(query: string, expectedResult?: number, message?: string): Promise<boolean> {
    const result = await executeOracleQuery(query);
    //expect(result.rowCount).toEqual(expectedResult);
    //!(result.rowCount === expectedResult) ? console.log(result.rowCount.toString()) : null;
    //!(result.rowCount === expectedResult) ? console.log(expectedResult.toString()) : null;
    return (result.rowCount === expectedResult);
  }

  async executeQuery(query: string): Promise<any> {
    return await executeOracleQuery(query);
  }

  async checkEmployeeHireDate(): Promise<{ count: number; employeeIds: string[] }> {
    const result = await this.executeQuery('SELECT employee_id FROM rm.rm_hcm_employee WHERE hire_dt is null');
    const employeeIds = result.rows.map(row => row.employee_id.toString());
    return { count: employeeIds.length, employeeIds };
  }

  async checkEmployeeCountry(): Promise<{ count: number; employeeIds: string[] }> {
    const result = await this.executeQuery('SELECT employee_id FROM rm.rm_hcm_employee WHERE home_country_iso is null');
    const employeeIds = result.rows.map(row => row.employee_id.toString());
    return { count: employeeIds.length, employeeIds };
  }

  async checkEmployeeRegion(): Promise<{ count: number; employeeIds: string[] }> {
    const result = await this.executeQuery('SELECT employee_id FROM rm.rm_hcm_employee WHERE region is null');
    const employeeIds = result.rows.map(row => row.employee_id.toString());
    return { count: employeeIds.length, employeeIds };
  }

  async checkEmployeeRehired(): Promise<{ count: number; employeeIds: string[] }> {
    const result = await this.executeQuery('SELECT employee_id FROM rm.rm_hcm_employee WHERE (hire_dt > lastwork_dt OR hire_dt > term_dt)');
    const employeeIds = result.rows.map(row => row.employee_id.toString());
    return { count: employeeIds.length, employeeIds };
  }

  async checkEmployeeTerminated(): Promise<{ count: number; employeeIds: string[] }> {
    const result = await this.executeQuery("SELECT employee_id FROM rm.rm_hcm_employee WHERE term_dt IS NOT NULL AND status NOT IN ('Terminated') AND term_dt < TRUNC(SYSDATE) AND term_dt > hire_dt");
    const employeeIds = result.rows.map(row => row.employee_id.toString());
    return { count: employeeIds.length, employeeIds };
  }

  async checkProjectUPC(): Promise<{ count: number; projectIds: string[] }> {
    const result = await this.executeQuery('SELECT project_id FROM rm.rm_project_profile WHERE upc is null');
    const projectIds = result.rows.map(row => row.project_id.toString());
    return { count: projectIds.length, projectIds };
  }

  async checkAssignmentType(): Promise<{ count: number; assignmentIds: string[] }> {
    const result = await this.executeQuery('SELECT assignment_id FROM rm.rm_assignment WHERE assignment_type is null');
    const assignmentIds = result.rows.map(row => row.assignment_id.toString());
    return { count: assignmentIds.length, assignmentIds };
  }

  async checkState():Promise<{count:number; demandIds: string[]}> {
    const result = await this.executeQuery('SELECT rm_demand_id FROM rm.rm_demand WHERE state is null)');
    const demandIds = result.rows.map(row => row.demand_id.toString());
    return { count: demandIds.length, demandIds };
  }
}
