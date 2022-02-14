import { Pool } from 'pg'
import {throws} from "assert";

const pool = new Pool({
    user: 'newuser',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'PRIVATE_CHAT',
})

export const query = (text: string, params?: any[], isArray?: boolean): Promise<any> | any => {
    return pool.query(text, params)
        .then(data => {
            if (!data.rowCount) return null
            if (isArray || data.rowCount > 1) return data.rows
            return data.rows[0]
        })
        .catch(err => {
            throw new Error(err)
        })
}

