require('dotenv').config()
/**
 * config values
 */
export const configHelper = {
    MYSQL_HOST:process.env.MYSQL_HOST || "localhost",
    MYSQL_USER:process.env.MYSQL_USER || 'root',
    MYSQL_PASSWORD:process.env.MYSQL_PASSWORD || '',
    MYSQL_MUTIPLE_STATEMENTS:Boolean(process.env.MYSQL_MUTIPLESTATEMENTS) || true ,
}