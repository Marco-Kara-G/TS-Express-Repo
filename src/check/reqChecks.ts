import { Response, Request } from "express";
import { emailCheck } from "../email/emailCheck";
import { passwordCheck } from "../password/passwordCheck";
import { User } from "../user/user";

export function userDataCheck(input: User): User {
  const emailValidation = emailCheck(input.email);
  const passwordValidation = passwordCheck(input.password);

  return input as User;
}
