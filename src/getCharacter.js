import mysql from "mysql";
import { getDbConfig } from "./helper/dbHelper.js";

export function getCharacter(characterName) {
  const dbConfig = getDbConfig();

  // Create a MySQL connection pool
  const connection = mysql.createPool(dbConfig);

  return new Promise((resolve, reject) => {
    // Execute the SQL query with parameterized query
    connection.query(
      "SELECT c.name, r.yml, r.revisionId, r.createTime FROM horizons.Characters c INNER JOIN horizons.CharacterRevision r ON r.characterName = c.name WHERE name = ? ORDER BY r.createTime DESC LIMIT 1",
      [characterName],
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
