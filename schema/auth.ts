import { z } from "zod";

export const signupSchema = z.object({
  firstname: z.string().min(2, { message: "First name is required" }),
  lastname: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, {
      message: "Password must include uppercase, lowercase, number, and special character"
    }),
  confirmPassword: z.string(),
  userType: z.enum(['client', 'artisan'])
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});