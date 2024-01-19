import mysql from "mysql";

export function getPowers() {
  // Replace these values with your database server and authentication details

  if (!process.env.DB_HOST) return "DB_HOST not set";
  if (!process.env.DB_USER) return "DB_USER not set";
  if (!process.env.DB_PASS) return "DB_PASS not set";
  if (!process.env.DB_NAME) return "DB_NAME not set";

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };

  // Create a MySQL connection pool
  const connection = mysql.createPool(dbConfig);

  return new Promise((resolve, reject) => {
    // Execute the SQL query
    connection.query("SELECT * FROM horizons.Powers", (error, results) => {
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
