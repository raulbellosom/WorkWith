import { createPool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});
