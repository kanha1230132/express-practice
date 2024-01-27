import { Request, Response } from "express";

/**
 * Registration controller.
 */
export const Register = (req: Request, res: Response) => {
  res.send("Hello Registration request ");
};
