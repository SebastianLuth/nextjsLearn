import { z } from "zod";

export const passwordSchema = z
  .string({ message: "Password tidak boleh kosong" })
  .min(8, { message: "Password minimal 8 karakter" })
  .regex(/[A-Z]/, { message: "Password minimal 1 huruf besar" })
  .regex(/[0-9]/, { message: "Password minimal 1 angka" })
  .regex(/[a-z]/, { message: "Password minimal 1 huruf kecil" });
export const emailSchema = z
  .string({ message: "Email tidak bole kosong" })
  .email({ message: "Email tidak valid" });
