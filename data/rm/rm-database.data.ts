import { executeOracleQuery } from '../../src/utils/database';
//import {expect} from "@playwright/test";

export class RmDatabaseData {
  private queryProjectHeaderInfo: string = "" +
    "SELECT\n" +
    "  PROJ.UPC\n" +
    " ,TO_CHAR(PROJ.START_DATE, 'DD-Mon-YYYY') START_DATE\n" +
    " ,TO_CHAR(PROJ.END_DATE, 'DD-Mon-YYYY') END_DATE\n" +
    " ,TO_CHAR(PROJ.ESTIMATED_END_DATE, 'DD-Mon-YYYY') ESTIMATED_END_DATE\n" +
    " ,PROJ.CLIENT_NAME\n" +
    " ,PROJ.LINE_OF_BUSINESS\n" +
    " ,PROJ.BUSINESS_UNIT\n" +
    " ,PROJ.SUB_BUSINESS_UNIT\n" +
    " ,PROJ.PROJECT_STATUS\n" +
    " ,PROJ.THERAPEUTIC_AREA\n" +
    " ,PROJ.STUDY_PHASE\n" +
    " ,PROJ.STUDY_POPULATION\n" +
    " ,PROJ.INDICATION\n" +
    " ,PROJ.SUB_INDICATION\n" +
    " ,PROJ.RESOURCE_NEEDS\n" +
    "FROM rm_project_profile PROJ\n" +
    "WHERE UPC='UPC_TO_SEARCH'";

  private queryDemandSummaryDepartment_old:string = "" +
    "SELECT JR.ROLE_NAME, RBU.RBU_LONG_DESC\n" +
    "FROM RM_DEMAND RD\n" +
    "INNER JOIN RM.RM_PROJECT_PROFILE PP ON RD.RM_PROJECT_PROFILE_ID = PP.RM_PROJECT_PROFILE_ID\n" +
    "INNER JOIN RM.MS_JOB_ROLES JR ON RD.MS_JOB_ROLES_ID = JR.MS_JOB_ROLES_ID\n" +
    "INNER JOIN RM.MS_ROLE_RBU_MAPPING RBM ON RBM.JOB_ROLES_ID = RD.MS_JOB_ROLES_ID\n" +
    "INNER JOIN RM.MS_RBU RBU ON RBM.RBU_ID = RBU.MS_RBU_ID\n" +
    "WHERE PP.UPC='UPC_TO_SEARCH'\n" +
    "GROUP BY JR.ROLE_NAME, RBU.RBU_LONG_DESC\n" +
    "ORDER BY JR.ROLE_NAME, RBU.RBU_LONG_DESC\n" +
    "FETCH FIRST 25 ROWS ONLY";

  private queryDemandSummaryDepartment: string = "" +
    "SELECT DISTINCT\n" +
    "    DS.ROLE_NAME,\n" +
    "    DS.DEPARTMENT\n" +
    "FROM RM_DEMAND_SUMMARY DS\n" +
    "WHERE DS.RM_PROJECT_CODE='UPC_TO_SEARCH'\n" +
    "ORDER BY DS.ROLE_NAME, DS.DEPARTMENT\n" +
    "FETCH FIRST 25 ROWS ONLY";

  private queryForecastAux: string = "" +
    "SELECT LISTAGG('''' || MONTH_YEAR || ''' AS \"' || MONTH_YEAR || '\"', ', ') " +
    "               WITHIN GROUP (ORDER BY MONTH_START_DATE) AS FORECAST_AUX\n" +
    "FROM (\n" +
    "      SELECT MONTH_START_DATE, MONTH_YEAR\n" +
    "        FROM RM_FORECAST_V\n" +
    "       WHERE PROJECT_CODE = 'UPC_TO_SEARCH'\n" +
    "         AND MONTH_START_DATE >= TRUNC(SYSDATE, 'MM')\n" +
    "    GROUP BY MONTH_START_DATE, MONTH_YEAR\n" +
    "    ORDER BY MONTH_START_DATE\n" +
    "       FETCH FIRST 12 ROWS ONLY)";

  private queryForecast: string = "" +
    "SELECT *\n" +
    "  FROM \n" +
    "     (\n" +
    "      SELECT ROLE_NAME,DEPARTMENT,'Global Forecast' AS \"Global Forecast\"," +
    " MONTH_YEAR,FORECAST_HOURS\n" +
    "        FROM RM_FORECAST_V\n" +
    "       WHERE PROJECT_CODE = 'UPC_TO_SEARCH'\n" +
    "    ORDER BY ROLE_NAME, DEPARTMENT, MONTH_START_DATE\n" +
    "     )\n" +
    "     PIVOT (\n" +
    "            SUM(FORECAST_HOURS)\n" +
    "            FOR MONTH_YEAR IN (FORECAST_AUX_RESULT)\n" +
    "           )\n" +
    "ORDER BY ROLE_NAME,DEPARTMENT\n" +
    "FETCH FIRST 25 ROWS ONLY";

  private queryPoolResources: string = "" +
    "SELECT\n" +
    "  LAST_NAME || ', ' || FIRST_NAME AS \"RESOURCE_NAME\"\n" +
    "  , ROLE_NAME\n" +
    "FROM RM_EMPLOYEE_RESOURCEPOOL_VW\n" +
    "WHERE POOL_NAME = 'RESOURCE_POOL_NAME'\n" +
    "ORDER BY LAST_NAME || ', ' || FIRST_NAME\n" +
    "FETCH FIRST 10 ROWS ONLY";

  private queryResourceAssignments: string = "" +
    "SELECT\n" +
    "   e.LAST_NAME || ', ' || e.FIRST_NAME AS \"RESOURCE_NAME\" --AS \"Resource Name\"\n" +
    "  ,a.UPC --AS \"P-Code\"\n" +
    "  ,a.MS_JOB_ROLES_NAME --AS \"Project Role\"\n" +
    "  ,TO_CHAR(a.ASSIGNMENT_START_DATE, 'DD-Mon-YYYY') ASSIGNMENT_START_DATE --AS \"Assignment Start Date\"\n" +
    "  ,TO_CHAR(a.ASSIGNMENT_END_DATE, 'DD-Mon-YYYY') ASSIGNMENT_END_DATE --AS \"Assignment End Date\"\n" +
    "  ,INITCAP(a.ASSIGNMENT_TYPE) ASSIGNMENT_TYPE--AS \"Assignment Type\"\n" +
    "  ,a.ASSIGNMENT_NOTES --AS \"Notes\"\n" +
    "  ,CASE\n" +
    "     WHEN a.IS_LEAD = 'Y' THEN 'Checked'\n" +
    "     WHEN a.IS_LEAD = 'N' THEN 'Unchecked'\n" +
    "   END IS_LEAD\n" +
    //"  ,a.IS_LEAD --AS \"LEAD\"\n" +
    "FROM DL_RM_ASSIGNMENT_V a\n" +
    "  INNER JOIN rm_hcm_employee e ON a.EMPL_ID = e.EMPL_ID\n" +
    "WHERE a.empl_id = SEARCH_EMPLOYEE_ID AND a.assign_status = 'ACTUAL'\n" +
    "ORDER BY IS_LEAD DESC, UPC\n" +
    "FETCH FIRST 10 ROWS ONLY";

  private queryProjectPool: string = "" +
    "SELECT DISTINCT PROJECT_ROLE\n" +
    "FROM DIRECT_ASSIGNMENT_PROJECT\n" +
    "WHERE P_CODE='UPC_TO_SEARCH'\n" +
    "ORDER BY PROJECT_ROLE\n" +
    "FETCH FIRST 10 ROWS ONLY";

  private queryProjectAssignments: string = "" +
    "SELECT\n" +
    "   e.LAST_NAME || ', ' || e.FIRST_NAME AS \"RESOURCE_NAME\" --AS \"Resource Name\"\n" +
    "  ,a.UPC --AS \"P-Code\"\n" +
    "  ,a.MS_JOB_ROLES_NAME --AS \"Project Role\"\n" +
    "  ,TO_CHAR(a.ASSIGNMENT_START_DATE, 'DD-Mon-YYYY') ASSIGNMENT_START_DATE --AS \"Assignment Start Date\"\n" +
    "  ,TO_CHAR(a.ASSIGNMENT_END_DATE, 'DD-Mon-YYYY') ASSIGNMENT_END_DATE --AS \"Assignment End Date\"\n" +
    "  ,INITCAP(a.ASSIGNMENT_TYPE) ASSIGNMENT_TYPE--AS \"Assignment Type\"\n" +
    "  ,a.ASSIGNMENT_NOTES --AS \"Notes\"\n" +
    "  ,CASE\n" +
    "     WHEN a.IS_LEAD = 'Y' THEN 'Checked'\n" +
    "     WHEN a.IS_LEAD = 'N' THEN 'Unchecked'\n" +
    "   END IS_LEAD\n" +
    "FROM DL_RM_ASSIGNMENT_V a\n" +
    "  INNER JOIN rm_hcm_employee e ON a.EMPL_ID = e.EMPL_ID\n" +
    "WHERE a.UPC = 'UPC_TO_SEARCH'\n" +
    "  AND a.MS_JOB_ROLES_NAME = 'SEARCH_PROJECT_ROLE'\n" +
    "  AND a.assign_status = 'ACTUAL'\n" +
    "ORDER BY IS_LEAD, ASSIGNMENT_START_DATE DESC\n" +
    "FETCH FIRST 10 ROWS ONLY";

  private async getData(query: string): Promise<string> {
    const result = await executeOracleQuery(query);
    return result.json;
  };
  async getDemandSummaryDepartmentInfo(projectUPC: string): Promise<string> {
    return await this.getData(this.queryDemandSummaryDepartment.replace("UPC_TO_SEARCH", projectUPC));
  };
  async getProjectHeaderInfo(projectUPC: string): Promise<string> {
    //console.log(projectUPC);
    //console.log(this.queryProjectHeaderInfo.replace("UPC_TO_SEARCH", projectUPC));
    return await this.getData(this.queryProjectHeaderInfo.replace("UPC_TO_SEARCH", projectUPC));
  };
  async getForecastInfo(projectUPC: string): Promise<string> {
    const auxData = JSON.parse(await this.getData(this.queryForecastAux.replace("UPC_TO_SEARCH", projectUPC)))[0];
    //console.log(this.queryForecast.replace("UPC_TO_SEARCH",
    // projectUPC).replace("FORECAST_AUX_RESULT", auxData.FORECAST_AUX));
    return await this.getData(this.queryForecast.replace("UPC_TO_SEARCH", projectUPC).replace("FORECAST_AUX_RESULT", auxData.FORECAST_AUX));
  };
  async getPoolResourcesInfo(resourcePool: string): Promise<string> {
    //console.log(this.queryForecast.replace("UPC_TO_SEARCH",
    // projectUPC).replace("FORECAST_AUX_RESULT", auxData.FORECAST_AUX));
    return await this.getData(this.queryPoolResources.replace("RESOURCE_POOL_NAME", resourcePool));
  };
  async getResourceAssignmentsInfo(employeeID: string): Promise<string> {
    //console.log(projectUPC);
    //console.log(this.queryResourceAssignments.replace("UPC_TO_SEARCH", employeeID));
    return await this.getData(this.queryResourceAssignments.replace("SEARCH_EMPLOYEE_ID", employeeID));
  };
  async getProjectPoolInfo(projectUPC: string): Promise<string> {
    //console.log(this.queryForecast.replace("UPC_TO_SEARCH",
    // projectUPC).replace("FORECAST_AUX_RESULT", auxData.FORECAST_AUX));
    return await this.getData(this.queryProjectPool.replace("UPC_TO_SEARCH", projectUPC));
  };
  async getProjectAssignmentsInfo(pCode: string, projectRole: string): Promise<string> {
    //console.log(pCode, '\n', projectRole);
    //console.log(this.queryProjectAssignments.replace("UPC_TO_SEARCH", pCode).replace("SEARCH_PROJECT_ROLE", projectRole));
    return await this.getData(this.queryProjectAssignments.replace("UPC_TO_SEARCH", pCode).replace("SEARCH_PROJECT_ROLE", projectRole));
  };
}

export const rmDatabaseData = new RmDatabaseData();