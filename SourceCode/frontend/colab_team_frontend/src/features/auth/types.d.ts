interface LoginResponse {
  token: Pick<AuthToken, "createdAt" | "expiredAt" | "key">;
  user: UserResponse;
}
