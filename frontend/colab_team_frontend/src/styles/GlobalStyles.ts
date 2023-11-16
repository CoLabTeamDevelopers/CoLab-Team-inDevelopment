import { createTheme } from "@mui/material";

// Global styling of the application including the following :- Text, Button, Link, Chip, Background

export const GlobalTheme = createTheme({
  // Text styling
  typography: {
    fontFamily: "BlinkMacSystemFont",
    subtitle2: { fontSize: "1rem" },
    h2: {
      fontSize: "1rem",
      fontWeight: "bold",
      "@media(max-width:640px)": {
        width: "100%",
        height: "3vh",
        textOverflow: "ellipsis",
        overflow: "hidden",
        textWrap: "nowrap",
      },
    },
    h3: {
      fontSize: "2rem",
      fontStyle: "oblique",
      color: "#9575cd",
      "@media(max-width:640px)": {
        fontSize: "1.3rem",
      },
    },
    h4: {
      fontSize: "2.3rem",
      color: "#673ab7",
    },
    h5: {
      fontSize: "1.2rem",
      fontStyle: "oblique",
      color: "#673ab7",
      "@media(max-width:640px)": {
        fontSize: "0.8rem",
      },
    },
    h6: {
      fontSize: "1.5rem",
      color: "#673ab7",
    },
    subtitle1: {
      "@media(max-width:640px)": {
        width: "100%",
        height: "3vh",
        textOverflow: "ellipsis",
        overflow: "hidden",
        textWrap: "nowrap",
      },
    },
  },
  components: {
    // Chip styling
    MuiChip: {
      styleOverrides: {
        root: {
          background: "#ede7f6",
        },
      },
    },
    // Button styling
    MuiButton: {
      styleOverrides: {
        root: {
          letterSpacing: "1px",
          textTransform: "none",
          background: "#b39ddb",
          "&:hover": {
            background: "#9575cd",
          },
        },
        contained: {
          background: "#b39ddb",
          color: "#ffffff",
        },
      },
    },
    // Link styling
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          cursor: "pointer",
          color: "#9575cd",
          "&:hover": {
            color: "#673ab7",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          letterSpacing: "1px",
          ".MuiFormLabel-root.Mui-focused": {
            color: "#9575cd",
          },
          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#9575cd",
            },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          letterSpacing: "1px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9575cd",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          letterSpacing: "1px",
          "&.Mui-focused": {
            color: "#9575cd",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#9575cd",
          cursor: "pointer",
          "&:hover": {
            color: "#673ab7",
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#9575cd",
        },
      },
    },
  },
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
