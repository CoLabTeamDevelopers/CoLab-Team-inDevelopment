import type { AuthToken, User } from "~types/api/models";

export interface LoginResponse {
  token: Pick<AuthToken, "createdAt" | "expiredAt" | "key">;
  user: Pick<User, "firstName" | "email" | "lastName" | "username">;
}
