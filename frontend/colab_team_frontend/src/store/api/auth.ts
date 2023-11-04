import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { LoginResponse, LoginSchema } from "@/types/auth";

const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/user" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginSchema>({
      query: (body) => ({ url: "/login/", method: "POST", body }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

export default authApi;
