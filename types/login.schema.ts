import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("A valid email is required."),
  password: z.string().length(1, "Password is required."),
});
