import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { camelCase, snakeCase } from "change-case/keys";

import type {
  ForgotPasswordSchema,
  LoginSchema,
  RegistrationSchema,
  ResetPasswordSchema,
} from "@/schemas/auth";
import type { LoginResponse } from "@/types/api/responses";

const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/user/" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginSchema>({
      query: (body) => ({
        url: "login/",
        method: "POST",
        body: snakeCase(body),
      }),
      transformResponse: (response) => camelCase(response) as LoginResponse,
    }),
    register: builder.mutation<unknown, RegistrationSchema>({
      query: (body) => ({
        url: "register/",
        method: "POST",
        body: snakeCase(body),
      }),
    }),
    forgotPassword: builder.mutation<unknown, ForgotPasswordSchema>({
      query: (body) => ({ url: "forgot-password/", method: "POST", body }),
    }),
    resetPassword: builder.mutation<unknown, ResetPasswordSchema>({
      query: (body) => ({
        url: "reset-password/",
        method: "POST",
        body: snakeCase(body),
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
