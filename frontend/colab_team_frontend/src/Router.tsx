import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import HomePage from "@/pages/app/Home";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword";
import LoginPage from "@/pages/auth/Login";
import RegistrationPage from "@/pages/auth/Registration";
import ResetPasswordPage from "@/pages/auth/ResetPassword";
import ProjectsListPage from "@/pages/app/ProjectsList";
import ProjectPage from "./pages/app/Project";
import Profile from "./pages/app/Profile";

const authRoutes: RouteObject[] = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegistrationPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
];

const appRoutes: RouteObject[] = [
  { path: "/projects", element: <ProjectsListPage /> },
  { path: "/projects/:project_url", element: <ProjectPage /> },
  { path: "/profile", element: <Profile /> },
];

const router = createBrowserRouter([
  { index: true, element: <HomePage /> },
  { path: "*", element: <h1>404 - Not Found</h1> },
  ...authRoutes,
  ...appRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
