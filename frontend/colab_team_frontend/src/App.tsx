<<<<<<< HEAD
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
=======
import Router from "./Router";

function App() {
  return <Router />;
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
}

export default App;
