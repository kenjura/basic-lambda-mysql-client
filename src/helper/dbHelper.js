export function verifyDb() {
  if (!process.env.DB_HOST)
    return { isValid: false, message: "DB_HOST not set" };
  if (!process.env.DB_USER)
    return { isValid: false, message: "DB_USER not set" };
  if (!process.env.DB_PASS)
    return { isValid: false, message: "DB_PASS not set" };
  if (!process.env.DB_NAME)
    return { isValid: false, message: "DB_NAME not set" };
  return { isValid: true };
}

export function getDbConfig() {
  const { isValid, message } = verifyDb();
  if (!isValid) {
    throw new Error(message);
  }

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };

  return dbConfig;
}
