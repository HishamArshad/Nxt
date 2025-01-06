import { object, string } from "zod"
 
export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})


import { z } from "zod";

export const emailAndPasswordSchema = z.object({
  email: z
    .string()
    .email("Invalid email address") // Validates email format
    .nonempty("Email is required"), // Ensures the email field is not empty
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long") // Minimum length validation
    .max(32, "Password must not exceed 32 characters") // Maximum length validation
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
    .regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
    .regex(/[0-9]/, "Password must contain at least one number") // At least one number

    .nonempty("Password is required"), // Ensures the password field is not empty
});

 