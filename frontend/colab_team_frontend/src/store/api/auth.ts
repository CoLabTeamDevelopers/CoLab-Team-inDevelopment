import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  ForgotPasswordSchema,
  LoginResponse,
  LoginSchema,
  RegistrationSchema,
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
        body: { ...body, confirm_password: body.confirmPassword },
      }),
    }),
    forgotPassword: builder.mutation<unknown, ForgotPasswordSchema>({
      query: (body) => ({ url: "forgot-password/", method: "POST", body }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
} = authApi;

export default authApi;
