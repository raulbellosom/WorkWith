import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_NAME || "root";
export const DB_NAME = process.env.DB_USER || "workwithdb";
export const DB_PASS = process.env.DB_PASS || "racoon";
