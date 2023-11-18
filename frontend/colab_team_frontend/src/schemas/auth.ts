import * as Yup from "yup";

const username = Yup.string()
  .required("Username is required")
  .min(6, "Username must be at least 6 characters")
  .max(18, "Username must not exceed 18 characters");

const email = Yup.string()
  .required("Email is required")
  .email("Email is invalid");

const basePassword = Yup.string()
  .min(6, "Password must be atleast 6 characters")
  .max(40, "Password must not exceed 40 characters");

const password = basePassword.required("Password is required");

const confirmPassword = basePassword
  .required("Confirm Password is required")
  .oneOf([Yup.ref("password"), ""], "Confirm Password does not match");

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
