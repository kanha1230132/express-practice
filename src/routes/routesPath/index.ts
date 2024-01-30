import { apiVersion } from "../../helper/constant";

export const PathName = {
  Login: `/api/${apiVersion}/login`,
  Register: `/api/${apiVersion}/register`,
  Me: `/api/${apiVersion}/me`,
  AllUsers: `/api/${apiVersion}/manageUsers/getAllUsers`,
  NotFound: `/*`,
};