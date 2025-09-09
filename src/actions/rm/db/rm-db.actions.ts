import { executeOracleQuery } from '../../../utils/database';

export class RmDatabaseActions {
  async executeQuery(query: string): Promise<any> {
    return await executeOracleQuery(query);
  }

  async checkEmployeeHireDate(): Promise<number> {
    const result = await this.executeQuery('SELECT COUNT(*) AS count FROM rm.rm_hcm_employee WHERE hire_dt IS NULL');
    return Number(result.rows[0].COUNT || result.rows[0].count);
  }

  async checkEmployeeCountry(): Promise<number> {
    const result = await this.executeQuery('SELECT COUNT(*) AS count FROM rm.rm_hcm_employee WHERE home_country_iso IS NULL');
    return Number(result.rows[0].COUNT || result.rows[0].count);
  }

  async checkEmployeeRegion(): Promise<number> {
    const result = await this.executeQuery('SELECT COUNT(*) AS count FROM rm.rm_hcm_employee WHERE region IS NULL');
    return Number(result.rows[0].COUNT || result.rows[0].count);
  }

  async checkEmployeeRehired(): Promise<number> {
    const result = await this.executeQuery('SELECT COUNT(*) AS count FROM rm.rm_hcm_employee WHERE (hire_dt > lastwork_dt OR hire_dt > term_dt)');
    return Number(result.rows[0].COUNT || result.rows[0].count);
  }

  async checkEmployeeTerminated(): Promise<number> {
    const result = await this.executeQuery(
      "SELECT COUNT(*) AS count FROM rm.rm_hcm_employee WHERE term_dt IS NOT NULL AND status NOT IN ('Terminated') AND term_dt < TRUNC(SYSDATE) AND term_dt > hire_dt"
    );
    return Number(result.rows[0].COUNT || result.rows[0].count);
  }

  async checkProjectUPC(): Promise<number> {
    const result = await this.executeQuery('SELECT COUNT(*) AS count FROM rm.rm_project_profile WHERE upc IS NULL');
    return Number(result.rows[0].COUNT || result.rows[0].count);
  }

  async checkAssignmentType(): Promise<number> {
    const result = await this.executeQuery('SELECT COUNT(*) AS count FROM rm.rm_assignment WHERE assignment_type IS NULL');
    return Number(result.rows[0].COUNT || result.rows[0].count);
  }

  async checkState(): Promise<number> {
    const result = await this.executeQuery('SELECT COUNT(*) AS count FROM rm.rm_demand WHERE state IS NULL');
    return Number(result.rows[0].COUNT || result.rows[0].count);
  }
}
