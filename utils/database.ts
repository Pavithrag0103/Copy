// oracleConnector
// @ts-ignore
import oracledb from 'oracledb';

oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_23_8' });

interface OracleQueryResult {
  rowCount: number;
  rows: object[];
}

export interface OracleEnvConfig {
  user: string;
  password: string;
  connectString: string;
}

const env = process.env.ENV?.toLowerCase(); // e.g. "qa" or "uat"

const oracleConfig: OracleEnvConfig = (() => {
  switch (env) {
    case 'uat':
      return {
        user: process.env.B2RR_RM_UAT_DB_USR,
        password: process.env.B2RR_RM_UAT_DB_PSW,
        connectString: process.env.B2RR_RM_UAT_DB_CONNECTION_STRING,
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
    connection = await oracledb.getConnection(oracleConfig);
    //console.log('Connected to Oracle DB');

    // Execute the query
    const result = await connection.execute(query, [], {
      outFormat: oracledb.OUT_FORMAT_OBJECT, // Return rows as objects
    });

    const rows = result.rows || [];
    const rowCount = rows.length;
    /*
    console.log(`Query returned ${rowCount} row(s).`);
    rows.forEach((row, index) => {
      console.log(`Row ${index + 1}:`, row);
    });
    */
    return {
      rowCount,
      rows,
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