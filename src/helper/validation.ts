import { Joi } from "express-validation";
import { PASSWORD_REGEX } from "./constant";


export const registerValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(PASSWORD_REGEX).required(),
  passwordConfirm: Joi.string().required(),
  userType: Joi.number().max(1).min(0),
});