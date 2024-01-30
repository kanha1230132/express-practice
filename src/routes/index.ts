import { Router } from "express";
import { PathName } from "./routesPath";
import { Register } from "../controller/auth.controller";


export const appRoutes = (router: Router) => {
  router.post(PathName.Register, Register);
};