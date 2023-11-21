import { RouteObject } from "react-router-dom";

const authRoutes: RouteObject[] = [
  { path: "login", lazy: () => import("./pages/Login") },
  { path: "register", lazy: () => import("./pages/Registration") },
  {
    path: "verify-email-success",
    lazy: () => import("./pages/EmailVerificationSuccess"),
  },
  { path: "forgot-password", lazy: () => import("./pages/ForgotPassword") },
  { path: "reset-password", lazy: () => import("./pages/ResetPassword") },
];

export default authRoutes;
