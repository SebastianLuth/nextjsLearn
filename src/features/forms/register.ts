import { z } from "zod";
import { emailSchema, passwordSchema } from "~/Schemas/auth";

export const registerFormSchema = z.object({
    email: emailSchema,
    password: passwordSchema
}); 

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;