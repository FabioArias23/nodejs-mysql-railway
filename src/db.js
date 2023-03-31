import { createPool } from "mysql2/promise";
import { 
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
} from "./config.js"

export const pool = await createPool ({
    user: DB_USER,
    password: DB_PASSWORD,
    port:DB_PORT,
    host:DB_HOST,
    database:DB_NAME
})

