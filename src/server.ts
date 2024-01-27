import express, { Request, Response } from "express";
import { logMsg } from "./helper/util";
import { connectionDb } from "./database/connection/dbInit";
import { dbInitQuery } from "./database/query/dbInitQuery";
const expressPort = 8000;

const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("INFO :: Root route called");
});


/**
 * Start Express server.
 */
app.listen(expressPort, () => {
  logMsg("INFO :: Webserver started on port " + expressPort);
  connectionDb(dbInitQuery);
});
