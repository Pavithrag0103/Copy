// oracleConnector
// @ts-ignore
import oracledb from 'oracledb';
import {env_configRM} from "./config";

oracledb.initOracleClient({ libDir: '/opt/Oracle/instantclient_23_3' });

interface OracleQueryResult {
  rowCount: number;
  rows: object[];
  json: string;
}

export interface OracleEnvConfig {
  user: string;
  password: string;
  connectString: string;
  tnsAlias: string; // alias from tnsnames.ora (e.g. dbname_low, dbname_high)
  walletPath: string; // full path to directory with wallet
}

const env = process.env.ENV?.toLowerCase(); // e.g. "qa" or "uat"

const oracleConfig: OracleEnvConfig = (() => {
  switch (env) {
    case 'uat':
      return {
        user: env_configRM.dbUser, //process.env.B2RR_RM_UAT_DB_USR,
        password: env_configRM.dbPassword,// process.env.B2RR_RM_UAT_DB_PSW,
        connectString: env_configRM.db,//process.env.B2RR_RM_UAT_DB_CONNECTION_STRING,
      };
    case 'prod':
      return {
        user: process.env.B2RR_RM_PROD_DB_USR,
        password: process.env.B2RR_RM_PROD_DB_PSW,
        connectString: process.env.B2RR_RM_PROD_DB_CONNECTION_STRING,
      };
    case 'qa':
    default:
      return {
        user: process.env.B2RR_RM_QA_DB_USR,
        password: process.env.B2RR_RM_QA_DB_PSW,
        connectString: process.env.B2RR_RM_QA_DB_CONNECTION_STRING,
      };
  }
})();

/**
 * Connects to an Oracle DB, executes a query, and returns row count and data.
 * @param connectionDetails Oracle DB credentials and connect string
 * @param query SQL query string to execute
 */
export async function executeOracleQuery(
  query: string
): Promise<OracleQueryResult> {
  let connection: oracledb.Connection;

  try {
    // Establish connection to Oracle
    //connection = await oracledb.getConnection(oracleConfig);
    !(env_configRM.wallet === '') ? process.env.TNS_ADMIN = env_configRM.wallet : null;
    connection = await oracledb.getConnection({
      user: env_configRM.dbUser,
      password: env_configRM.dbPassword,
      connectString: env_configRM.db,
    });
    //console.log('Connected to Oracle DB');
    /*
    console.log(env_configRM.dbUser);
    console.log(env_configRM.dbPassword);
    console.log(env_configRM.db);
    console.log(env_configRM.wallet);
    */


    // Execute the query
    const result = await connection.execute(query, [], {
      outFormat: oracledb.OUT_FORMAT_OBJECT, // Return rows as objects
    });

    const rows = result.rows || [];
    const rowCount = rows.length;
    const json = JSON.stringify(rows, null, 2); // Pretty-printed JSON
    /*
    console.log(`Query returned ${rowCount} row(s).`);
    rows.forEach((row, index) => {
      console.log(`Row ${index + 1}:`, row);
    });
     */

    return {
      rowCount,
      rows,
      json
    };
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
        //console.log('Oracle DB connection closed.');
      } catch (closeErr) {
        console.error('Error closing connection:', closeErr);
      }
    }
  }
}