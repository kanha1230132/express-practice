import mysql, { PoolOptions } from "mysql2";
import { logMsg } from "../../helper/util";

const access = {
  host: "localhost",
  user: "root",
  password: "reactnode@123",
  multipleStatements: true,
};

const conn = mysql.createPool(access).promise();

export const connectionDb = async (query: string) => {
  let isConnect = await conn.query(query);
  return isConnect;
};

// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
