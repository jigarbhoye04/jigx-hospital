import { z } from "zod";

//for type safety
interface UserForm {
   name: string;
   email: string;
   phone: string;
}

export const UserFormValidation: z.ZodType<UserForm> = z.object({
   name: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(20, { message: "Username must be at most 20 characters long" })
      .refine((value) => !value.includes("admin"), {
         message: "Username cannot contain the word 'admin'",
      }),
   email: z.string().email({ message: "Invalid email address" }),
   phone: z
      .string()
      .refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone), {
         message: "Invalid phone number",
      }),
});
