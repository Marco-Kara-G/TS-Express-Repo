import { Email } from "../email/email";
import { Password } from "../password/password";
import { passwordCheck } from "../password/passwordCheck";
import { emailCheck } from "../email/emailCheck";

export type User = {
  username: string;
  name: string;
  lastName: string;
  email: Email;
  password: Password;
  category: string;
};
