import express, { Request, Response } from "express";
import { logMsg } from "./helper/util";
import { connectionDb } from "./database/connection/dbInit";
import { dbInitQuery } from "./database/sql/dbInit.sql";
import { appRoutes } from "./routes";
const expressPort = 8000;

const app = express();
// use json for API routes
app.use(express.json());

/** all Api implemented in appRoutes  */
appRoutes(app);

/** Home routes  */
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
