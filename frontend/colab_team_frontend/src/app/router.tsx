import { createBrowserRouter, RouteObject } from "react-router-dom";

import EmailVerificationSuccessPage from "@/features/auth/pages/EmailVerificationSuccess";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPassword";
import LoginPage from "@/features/auth/pages/Login";
import RegistrationPage from "@/features/auth/pages/Registration";
import ResetPasswordPage from "@/features/auth/pages/ResetPassword";
import HomePage from "@/features/core/pages/Home";
import CreateProjectPage from "@/features/projects/pages/CreateProject";
import MyProjectsPage from "@/features/projects/pages/MyProjects";
import ProjectPage from "@/features/projects/pages/Project";
import ProjectsListPage from "@/features/projects/pages/ProjectsList";
import RequestPage from "@/features/projects/pages/Request";
import ProfilePage from "@/features/user/pages/Profile";

type Route = RouteObject[] | RouteObject;

const authRoutes: Route = [
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegistrationPage /> },
  { path: "verify-email-success", element: <EmailVerificationSuccessPage /> },
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

const appRoutes: Route = [
  { path: "profile", element: <ProfilePage /> },
  { path: "create-project", element: <CreateProjectPage /> },
  { path: "requests", element: <RequestPage /> },
  { path: "my-projects", element: <MyProjectsPage /> },
];

const router = createBrowserRouter([
  { index: true, element: <HomePage /> },
  { path: "*", element: <h1>404 - Not Found</h1> },
  projectRoutes,
  ...authRoutes,
  ...appRoutes,
]);

export default router;
