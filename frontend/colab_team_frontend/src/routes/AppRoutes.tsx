import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/application/Home";

import { HOME } from "../api/application/appEndpoints";
import UnmatchRoute from "./UnmatchRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />

      {/* Unmatch Route */}
      <Route path="*" element={<UnmatchRoute />} />
    </Routes>
  );
}
