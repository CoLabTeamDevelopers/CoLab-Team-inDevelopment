import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(18, "Username must not exceed 18 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 characters")
    .max(24, "Password must not exceed 24 characters"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
});

export default validationSchema;
