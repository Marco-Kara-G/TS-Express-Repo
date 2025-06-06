import { Password } from "./password";

export function passwordCheck(input: string): Password {
  if (!input.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)) {
    throw new Error(
      "Password must be at least 8 characters long, include at least one uppercase letter, one digit, and one special character."
    );
  }

  return input as Password;
}
