import React from "react";

import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/authentication/Login";
import RegistrationPage from "../pages/authentication/Registration";
import ForgotPasswordPage from "../pages/authentication/ForgotPassword";
import ResetPasswordPage from "../pages/authentication/ResetPassword";

import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../api/authentication/authEndpoints";
import UnmatchRoute from "./UnmatchRoute";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={REGISTER} element={<RegistrationPage />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route path={RESET_PASSWORD} element={<ResetPasswordPage />} />

      {/* Unmatch Route*/}
      <Route path="*" element={<UnmatchRoute />} />
    </Routes>
  );
}
