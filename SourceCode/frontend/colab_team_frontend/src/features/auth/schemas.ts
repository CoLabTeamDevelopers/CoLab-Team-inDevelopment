import * as Yup from "yup";

import {
  basePassword,
  confirmPassword,
  email,
  password,
  username,
} from "~common/schemas";

const uid = Yup.number().required("User id is required");
const token = Yup.string().required("Token is required");

export const loginSchema = Yup.object().shape({
  username,
  password,
  ipAddress: Yup.string(),
});

export const registrationSchema = Yup.object().shape({
  username,
  email,
  password,
  confirmPassword,
});

export const forgotPasswordSchema = Yup.object().shape({ email });

export const resetPasswordQueryParametersSchema = Yup.object().shape({
  uid: uid.default(0),
  token: token.default(""),
});

const oldPassword = basePassword
  .required("Old Password is required.")
  .notOneOf(
    [Yup.ref("newPassword"), ""],
    "New password must not match old password"
  );
const newPassword = basePassword.required("New password is required.");
const confirmNewPassword = basePassword
  .required("Confirm new password is required.")
  .oneOf([Yup.ref("newPassword"), ""], "Passwords do not match");

export const resetPasswordFormSchema = Yup.object().shape({
  oldPassword,
  newPassword,
  confirmNewPassword,
});

export const resetPasswordSchema = Yup.object().shape({
  uid,
  token,
  oldPassword,
  newPassword,
  confirmNewPassword,
});

export type LoginSchema = Yup.InferType<typeof loginSchema>;
export type RegistrationSchema = Yup.InferType<typeof registrationSchema>;
export type ForgotPasswordSchema = Yup.InferType<typeof forgotPasswordSchema>;
export type ResetPasswordFormSchema = Yup.InferType<
  typeof resetPasswordFormSchema
>;
export type ResetPasswordSchema = Yup.InferType<typeof resetPasswordSchema>;
