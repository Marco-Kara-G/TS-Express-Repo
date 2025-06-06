import { Email } from "../email/email";

export function emailCheck(input: string): Email {
  if (!input.match(/^\S+@\S+\.\S+$/)) {
    throw new Error("Invalid input");
  }

  return input as Email;
}
