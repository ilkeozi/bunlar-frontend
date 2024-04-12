import { LoginResponse } from "@/types/login-response.dto";
import { LoginSchema } from "@/types/login.schema";
import { z } from "zod";

type LoginForm = z.infer<typeof LoginSchema>;

export const loginWithEmail = async (data: LoginForm) => {
  "use server";
  const result = LoginSchema.safeParse(data);

  if (result.success) {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Login Failed.");
      }

      const loginResponse = (await response.json()) as LoginResponse;
      return loginResponse;
    } catch (error) {
      console.error("Error loging in with email.");
    }
  } else {
    return { success: false, error: result.error.format() };
  }
};
