import { Request, Response } from "express";
import { registerValidation } from "../helper/validation";
import { HTTPResponse, HttpStatus } from "../httpResponse";

/**
 * Registration controller.
 */
export const Register = (req: Request, res: Response) => {
  const body = req.body;
  const { error } = registerValidation.validate(body);
  if (error) {
    return res.status(200).send(
      new HTTPResponse({statusCode: HttpStatus.WARNING.code, httpStatus: HttpStatus.WARNING.status, message: error.message})
    );
  }

  if (body.password !== body.passwordConfirm) {
    return res.status(200).send(
      new HTTPResponse({statusCode: HttpStatus.WARNING.code, httpStatus: HttpStatus.WARNING.status, message: "Password does not match"})
    );
  }

  // const data = await UserQuery.save(saveData)
  res.send(new HTTPResponse({statusCode: HttpStatus.OK.code, httpStatus: HttpStatus.OK.status, message: "User created"}));
};
