import * as Yup from "yup";

const username = Yup.string()
  .required("Username is required")
  .min(6, "Username must be at least 6 characters")
  .max(18, "Username must not exceed 18 characters");

const email = Yup.string()
  .required("Email is required")
  .email("Email is invalid");

const password = Yup.string()
  .required("Password is required")
  .min(6, "Password must be atleast 6 characters")
  .max(40, "Password must not exceed 40 characters");

const confirmPassword = Yup.string()
  .required("Confirm Password is required")
  .oneOf([Yup.ref("password"), ""], "Confirm Password does not match");

export const loginSchema = Yup.object().shape({ username, password });

export const registrationSchema = Yup.object().shape({
  username,
  email,
  password,
  confirmPassword,
});

export const forgotPasswordSchema = Yup.object().shape({ email });

export const resetPasswordSchema = Yup.object().shape({
  password,
  confirmPassword,
});
