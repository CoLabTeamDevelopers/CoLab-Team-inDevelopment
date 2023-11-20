import { createSlice } from "@reduxjs/toolkit";

import { AuthToken, User } from "@/common/types/api/models";

import authApi from "./api";

interface AuthState {
  user?: Partial<User>;
  authToken?: Partial<AuthToken>;
  authenticated: boolean;
}

const authSlice = createSlice({
  name: "auth",
  initialState: { authenticated: false } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.authenticated = true;
        state.user = payload.user;
        state.authToken = payload.token;
      }
    );
  },
});

// export const {} = authSlice.actions;

export default authSlice;
