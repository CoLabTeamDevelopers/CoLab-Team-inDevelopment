import { createSlice } from "@reduxjs/toolkit";

import { Token, User } from "@/types/auth";

import authApi from "../api/auth";

interface AuthState {
  user?: User;
  authToken?: Token;
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
