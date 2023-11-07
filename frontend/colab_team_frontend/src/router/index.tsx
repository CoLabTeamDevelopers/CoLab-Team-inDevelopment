import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import HomePage from "@/pages/app/Home";
import ProjectPage from "@/pages/app/Project";
import ProjectsListPage from "@/pages/app/ProjectsList";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword";
import LoginPage from "@/pages/auth/Login";
import RegistrationPage from "@/pages/auth/Registration";
import ResetPasswordPage from "@/pages/auth/ResetPassword";

type Route = RouteObject[] | RouteObject;

const authRoutes: Route = [
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegistrationPage /> },
  { path: "forgot-password", element: <ForgotPasswordPage /> },
  { path: "reset-password", element: <ResetPasswordPage /> },
];

const projectRoutes: Route = {
  path: "projects",
  children: [
    { index: true, element: <ProjectsListPage /> },
    { path: ":project_url", element: <ProjectPage /> },
  ],
};

const router = createBrowserRouter([
  { index: true, element: <HomePage /> },
  { path: "*", element: <h1>404 - Not Found</h1> },
  projectRoutes,
  ...authRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
