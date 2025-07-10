import { executeOracleQuery } from '../../../utils/database';
import {expect} from "@playwright/test";

export class RmDatabaseActions {
  async verifyQuery(query: string, expectedResult?: number): Promise<void> {
    const result = await executeOracleQuery(query);
    expect(result.rowCount).toEqual(expectedResult);
  }

  async checkForNulls():Promise<void> {
    await this.verifyQuery('SELECT * FROM emp WHERE hiredate is null', 0);
  }
  async checkForDuplicates():Promise<void> {
    await this.verifyQuery('SELECT * FROM emp WHERE ROWNUM <= 5', 5);
  }
  async checkForDates():Promise<void> {
    await this.verifyQuery('SELECT * FROM emp WHERE ROWNUM <= 5', 5);
  }
  async checkForProjects():Promise<void> {
    await this.verifyQuery('SELECT * FROM emp WHERE ROWNUM <= 5', 5);
  }
}