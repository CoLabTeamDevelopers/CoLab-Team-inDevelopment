import { createSlice } from "@reduxjs/toolkit";

import authApi from "./api";

interface AuthState {
  token?: Pick<AuthToken, "createdAt" | "expiredAt" | "key">;
  user?: UserResponse;
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
        state.token = payload.token;
      }
    );
  },
});

// export const {} = authSlice.actions;

export default authSlice;
