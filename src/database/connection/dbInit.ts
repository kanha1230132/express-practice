import mysql, { PoolOptions } from "mysql2";
import { configHelper } from "../../helper/config";

const access = {
  host: configHelper.MYSQL_HOST,
  user: configHelper.MYSQL_USER,
  password: configHelper.MYSQL_PASSWORD,
  multipleStatements: configHelper.MYSQL_MUTIPLE_STATEMENTS,
};

export const conn = mysql.createPool(access);

export const connectionDb = async (query: string) => {
  let isConnect = conn.query(query);
  return isConnect;
};

