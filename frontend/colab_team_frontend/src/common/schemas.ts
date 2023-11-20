import * as Yup from "yup";

export const username = Yup.string()
  .required("Username is required")
  .min(6, "Username must be at least 6 characters")
  .max(18, "Username must not exceed 18 characters");

export const email = Yup.string()
  .required("Email is required")
  .email("Email is invalid");

export const basePassword = Yup.string()
  .min(6, "Password must be atleast 6 characters")
  .max(40, "Password must not exceed 40 characters");

export const password = basePassword.required("Password is required");

export const confirmPassword = basePassword
  .required("Confirm Password is required")
  .oneOf([Yup.ref("password"), ""], "Confirm Password does not match");
