// Includes all TEXT CSS used in the application

// Colab Title - Navbar, Footer, Drawer
const ColabTitleStyle = {
  flexGrow: 1,
  display: "flex",
  alignItems: "end",
  letterSpacing: "1px",
  textTransform: "none",
  fontFamily: "Helvetica Neue",
  fontStyle: "oblique",
  color: "#9575cd",
  "@media (max-width: 600px)": {
    fontSize: "20px",
  },
};

// Team Title - Navbar, Footer, Drawer
const TeamTitleStyle = {
  ...ColabTitleStyle,
  color: "#673ab7",
  "@media (max-width: 600px)": {
    fontSize: "12px",
  },
};

export { ColabTitleStyle, TeamTitleStyle };
