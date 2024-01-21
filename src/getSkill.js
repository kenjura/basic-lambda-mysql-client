import mysql from "mysql";
import { getDbConfig } from "./helper/dbHelper.js";

export function getSkill(skillName) {
  const dbConfig = getDbConfig();

  // Create a MySQL connection pool
  const connection = mysql.createPool(dbConfig);

  return new Promise((resolve, reject) => {
    // Execute the SQL query with parameterized query
    connection.query(
      "SELECT * FROM horizons.Skills WHERE name = ? LIMIT 1",
      [skillName],
      (error, results) => {
        // Release the connection when done
        connection.end();

        if (error) {
          console.error("Error executing SQL query:", error);
          reject("There was a bear");
        } else {
          // Process the query results
          resolve(results[0]);
        }
      }
    );
  });
}
