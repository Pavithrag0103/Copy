// Use this inside actions, fixtures, or helper utilities where you don’t want to rely directly on process.env.
import {OracleEnvConfig} from "./database";

export const env_config = {
  baseUrl: process.env.BASE_URL ?? 'https://bid2revrec-dev.syneoshealth.com/ords/f?p=368',
  loginUrl: process.env.LOGIN_URL ?? 'https://bid2revrec-dev.syneoshealth.com/ords/f?p=368:LOGIN',
  credentials: {
    username: process.env.B2RR_USERNAME ?? '',
    password: process.env.B2RR_PASSWORD ?? '',
  },
};

export const envParams = {
  cleanReportHistory: process.env.CLEAN_REPORT_HISTORY ?? "true",
 };

  const env = process.env.ENV?.toLowerCase(); // e.g. "qa" or "uat"

  export const env_configRM = (() => {
    const ver = (process.env.VER_ID ?? process.env.RM_APP_ID) === '' ? process.env.RM_APP_ID : (process.env.VER_ID ?? process.env.RM_APP_ID);
    const baseURL = (process.env.BASE_ENV_URL).replace('ENV', (env === 'qa' ? 'dev': env)) + ver;
    let db = '';
    let dbUser = '';
    let dbPassword = '';
    let wallet = '';
    let userName = '';
    let password = '';
    let storage = 'storageState.json';

    switch (env) {
      case 'uat':
      case 'stage':
        userName = process.env.B2RR_UAT_USERNAME ?? '';
        password = process.env.B2RR_UAT_PASSWORD ?? '';
        db = process.env.B2RR_RM_UAT_DB_CONNECTION_STRING ?? '';
        dbUser = process.env.B2RR_RM_UAT_DB_USR;
        dbPassword = process.env.B2RR_RM_UAT_DB_PSW;
        wallet = 'C:\\Oracle\\instantclient_23_8\\network\\admin\\Wallet_BID2R2STG';
        storage = './storage/uat_storageState.json';
        break;
      case 'prod':
        userName = process.env.B2RR_PROD_USERNAME ?? '';
        password = process.env.B2RR_PROD_PASSWORD ?? '';
        db = process.env.B2RR_RM_PROD_DB_CONNECTION_STRING ?? '';
        dbUser = process.env.B2RR_RM_PROD_DB_USR;
        dbPassword = process.env.B2RR_RM_PROD_DB_PSW;
        wallet = 'C:\\Oracle\\instantclient_23_8\\network\\admin\\Wallet_BID2R2STG';
        storage = './storage/prod_storageState.json';
        break;
      case 'qa':
      case 'dev':
        userName = process.env.B2RR_QA_USERNAME ?? '';
        password = process.env.B2RR_QA_PASSWORD ?? '';
        db = process.env.B2RR_RM_QA_DB_CONNECTION_STRING ?? '';
        dbUser = process.env.B2RR_RM_QA_DB_USR;
        dbPassword = process.env.B2RR_RM_QA_DB_PSW;
        storage = './storage/qa_storageState.json';
        break;
      default:
        userName = process.env.B2RR_USERNAME ?? '';
        password = process.env.B2RR_PASSWORD ?? '';
        db = process.env.B2RR_RM_DB_CONNECTION_STRING ?? '';
        dbUser = process.env.B2RR_RM_DB_USR;
        dbPassword = process.env.B2RR_RM_DB_PSW;
        break;
    }
    return {
      baseUrl: (baseURL ?? process.env.BASE_URL),
      loginUrl: (baseURL ?? process.env.LOGIN_URL) + ':LOGIN',
      db: db ?? '',
      dbUser: dbUser ?? '',
      dbPassword: dbPassword ?? '',
      wallet: wallet ?? '',
      storage: storage ?? '',
      credentials: {
        username: userName ?? '',
        password: password ?? '',
      },
    }
  })();