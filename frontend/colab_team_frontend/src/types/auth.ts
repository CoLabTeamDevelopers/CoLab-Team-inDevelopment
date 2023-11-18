import type { InferType } from "yup";

import {
  forgotPasswordSchema,
  loginSchema,
  registrationSchema,
  resetPasswordFormSchema,
  resetPasswordSchema,
} from "@/schemas/auth";

export type LoginSchema = InferType<typeof loginSchema>;
export type RegistrationSchema = InferType<typeof registrationSchema>;
export type ForgotPasswordSchema = InferType<typeof forgotPasswordSchema>;
export type ResetPasswordFormSchema = InferType<typeof resetPasswordFormSchema>;
export type ResetPasswordSchema = InferType<typeof resetPasswordSchema>;

export interface User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface Token {
  key: string;
  created: string;
  ip_address: string;
}

export interface LoginResponse {
  token: Token;
  user: User;
}
