import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import { ThemeProvider } from "@mui/material";

import { GlobalTheme } from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
