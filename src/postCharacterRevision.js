import mysql from "mysql";
import { getDbConfig } from "./helper/dbHelper.js";

export function postCharacterRevision(characterName, yml) {
  const dbConfig = getDbConfig();

  // Create a MySQL connection pool
  const connection = mysql.createPool(dbConfig);

  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO horizons.CharacterRevision (characterName, yml, revisionId) 
      VALUES (?, ?, (SELECT IFNULL(MAX(revisionId), 0) + 1 FROM horizons.CharacterRevision WHERE characterName = ?))`;
    connection.query(sql, [characterName, yml], (error, results) => {
      if (error) {
        console.error("Error executing SQL query:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
