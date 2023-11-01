import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "@/pages/app/Home";
import LoginPage from "./pages/authentication/Login";
import RegistrationPage from "./pages/authentication/Registration";
import ForgotPasswordPage from "./pages/authentication/ForgotPassword";
import ResetPasswordPage from "./pages/authentication/ResetPassword";

const authRoutes: RouteObject[] = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegistrationPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
];

const router = createBrowserRouter([
  { index: true, element: <Home /> },
  { path: "*", element: <h1>404 - Not Found</h1> },
  ...authRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
