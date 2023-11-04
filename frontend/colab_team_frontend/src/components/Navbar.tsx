import * as React from "react";

import { AppBar, Box, Toolbar, Typography, Button, Link } from "@mui/material/";

import NavDrawer from "./NavDrawer";

import { ButtonsStyle } from "../styles/customStyles/CustomStyles";

import {
  ColabTitleStyle,
  TeamTitleStyle,
} from "../styles/customStyles/AppStyles";

import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <Box>
      <AppBar sx={{ background: "#ede7f6" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "120px" }}>
            <NavDrawer />
            <Box
              sx={{
                display: "flex",
                marginLeft: "25px",
                alignItems: "baseline",
              }}
            >
              <Typography fontSize={30} sx={ColabTitleStyle}>
                COLAB
              </Typography>
              <Typography fontSize={20} sx={TeamTitleStyle}>
                TEAM
              </Typography>
            </Box>
          </Box>
          <NavLinks />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Button sx={ButtonsStyle} color="inherit">
              Login
            </Button>
            <Button sx={ButtonsStyle} color="inherit">
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
