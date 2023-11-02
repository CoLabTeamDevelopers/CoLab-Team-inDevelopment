import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/application/Home";
import ProjectsListPage from "../pages/application/ProjectsList";
import ProjectPage from "../pages/application/Project";

import { HOME, PROJECTS } from "../api/application/appEndpoints";
import UnmatchRoute from "./UnmatchRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={PROJECTS} element={<ProjectsListPage />} />
      <Route path="/*" element={<ProjectPage />} />

      {/* Unmatch Route */}
      <Route path="*" element={<UnmatchRoute />} />
    </Routes>
  );
}
