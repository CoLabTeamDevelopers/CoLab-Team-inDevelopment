<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Change this to your primary color
    },
    secondary: {
      main: "#ff5722", // Change this to your secondary color
    },
    background: {
      default: "#f5f5f5", // Change this to your default background color
    },
    text: {
      primary: "#333", // Change this to your primary text color
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
);
