import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const signinSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password is required and must be at least 6 characters long",
  }),
});
