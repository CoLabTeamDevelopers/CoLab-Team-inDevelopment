import { createSlice } from "@reduxjs/toolkit";

import { User } from "@/types/auth";

import authApi from "../api/auth";

interface AuthState {
  user?: User;
  authenticated: boolean;
}

const authSlice = createSlice({
  name: "auth",
  initialState: { authenticated: false, user: undefined } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.authenticated = true;
        state.user = payload.user;
      }
    );
  },
});

// export const {} = authSlice.actions;

export default authSlice;
