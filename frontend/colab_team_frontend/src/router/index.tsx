import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import HomePage from "@/pages/app/Home";
import ProjectPage from "@/pages/app/Project";
import ProjectsListPage from "@/pages/app/ProjectsList";
import EmailVerificationSuccessPage from "@/pages/auth/EmailVerificationSuccess";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword";
import LoginPage from "@/pages/auth/Login";
import RegistrationPage from "@/pages/auth/Registration";
import ResetPasswordPage from "@/pages/auth/ResetPassword";
import ProfilePage from "@/pages/app/Profile";
import CreateProjectPage from "@/pages/app/CreateProject";
import Request from "@/pages/app/Request";
import RequestPage from "@/pages/app/Request";
import MyProjectsPage from "@/pages/app/MyProjects";
import DiscussPage from "@/pages/app/Discuss";
import WorkspacePage from "@/pages/app/Workspace";

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
  { path: "workspace", element: <WorkspacePage /> },
  { path: "discuss", element: <DiscussPage /> },
];

const router = createBrowserRouter([
  { index: true, element: <HomePage /> },
  { path: "*", element: <h1>404 - Not Found</h1> },
  projectRoutes,
  ...authRoutes,
  ...appRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
