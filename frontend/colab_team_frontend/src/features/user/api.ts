import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { camelCase } from "change-case/keys";

import { State } from "~/app/store";

const userApi = createApi({
  reducerPath: "user-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
    prepareHeaders(headers, api) {
      const token = (api.getState() as State).auth.token;

      if (token) headers.set("Authorization", `Token ${token?.key}`);
    },
  }),
  endpoints: (builder) => ({
    profile: builder.query<ProfileResponse, unknown>({
      query: () => "user/profile/",
      transformResponse: (response) => camelCase(response) as ProfileResponse,
    }),
  }),
});

export const { useProfileQuery } = userApi;

export default userApi;
