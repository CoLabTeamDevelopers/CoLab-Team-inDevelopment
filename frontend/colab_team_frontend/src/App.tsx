import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthRoutes from "./routes/authRoutes";
import AppRoutes from "./routes/AppRoutes";
import UnmatchRoute from "./routes/UnmatchRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="auth/api/*" element={<AuthRoutes />} />
        <Route path="app/api/*" element={<AppRoutes />} />

        {/* Unmatched Route */}
        <Route path="*" element={<UnmatchRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
