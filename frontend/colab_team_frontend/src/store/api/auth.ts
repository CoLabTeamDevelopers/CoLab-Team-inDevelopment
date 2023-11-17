import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  ForgotPasswordSchema,
  LoginResponse,
  LoginSchema,
  RegistrationSchema,
  ResetPasswordSchema,
} from "@/types/auth";

const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/user/" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginSchema>({
      query: (body) => ({ url: "login/", method: "POST", body }),
    }),
    register: builder.mutation<unknown, RegistrationSchema>({
      query: (body) => ({
        url: "register/",
        method: "POST",
        body: {
          ...body,
          confirm_password: body.confirmPassword,
        },
      }),
    }),
    forgotPassword: builder.mutation<unknown, ForgotPasswordSchema>({
      query: (body) => ({ url: "forgot-password/", method: "POST", body }),
    }),
    resetPassword: builder.mutation<unknown, ResetPasswordSchema>({
      query: (body) => ({
        url: "reset-password/",
        method: "POST",
        body: {
          ...body,
          old_password: body.oldPassword,
          new_password: body.newPassword,
          confirm_password: body.confirmNewPassword,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;

export default authApi;
