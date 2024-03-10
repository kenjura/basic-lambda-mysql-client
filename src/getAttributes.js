import mysql from "mysql";
import { getDbConfig } from "./helper/dbHelper.js";

export function getAttributes() {
  const dbConfig = getDbConfig();

  // Create a MySQL connection pool
  const connection = mysql.createPool(dbConfig);

  return new Promise((resolve, reject) => {
    // Execute the SQL query
    connection.query("SELECT * FROM horizons.Attributes", (error, results) => {
      // Release the connection when done
      connection.end();

      if (error) {
        console.error("Error executing SQL query:", error);
        reject("There was a bear");
      } else {
        // Process the query results
        resolve(results);
      }
    });
  });
}
