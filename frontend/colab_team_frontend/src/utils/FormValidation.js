import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { authFormFields } from "../reducers/authInputFormReducers";

export function useValidation() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(18, "Username must not exceed 18 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be atleast 6 characters")
      .max(18, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const form = useForm(authFormFields);

  const { register, handleSubmit, formState } = form;

  return { register, handleSubmit, formState };
}
