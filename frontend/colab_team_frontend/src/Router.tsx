import { useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import HomePage from "@/pages/app/Home";
import ProjectPage from "@/pages/app/Project";
import ProjectsListPage from "@/pages/app/ProjectsList";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword";
import LoginPage from "@/pages/auth/Login";
import RegistrationPage from "@/pages/auth/Registration";
import ResetPasswordPage from "@/pages/auth/ResetPassword";

const authRoutes: RouteObject[] = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegistrationPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
];

const appRoutes: RouteObject[] = [
  { path: "/projects", element: <ProjectsListPage /> },
  { path: "/projects/:project_url", element: <ProjectPage /> },
];

const router = createBrowserRouter([
  { index: true, element: <HomePage /> },
  { path: "*", element: <h1>404 - Not Found</h1> },
  { children: authRoutes, element: <AuthRoutesGuard /> },
  ...appRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
