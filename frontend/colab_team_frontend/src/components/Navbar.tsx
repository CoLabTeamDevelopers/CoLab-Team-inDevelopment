import * as React from "react";

import { AppBar, Box, Toolbar, Typography, Button, Link } from "@mui/material/";

import NavDrawer from "./NavDrawer";

import {
  ButtonsStyle,
  ColabTitleStyle,
  NavigationLinksStyle,
  TeamTitleStyle,
} from "../styles/customStyles/CustomStyles";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
              <Typography
                fontFamily={"Helvetica Neue"}
                fontStyle={"oblique"}
                variant="h4"
                color={"#9575cd"}
                sx={ColabTitleStyle}
              >
                COLAB
              </Typography>
              <Typography
                fontFamily={"Helvetica Neue"}
                fontStyle={"oblique"}
                variant="h6"
                color={"#673ab7"}
                sx={TeamTitleStyle}
              >
                TEAM
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "center",
            }}
          >
            <Link
              href="home"
              sx={NavigationLinksStyle}
              fontSize={18}
              underline="none"
            >
              Home
            </Link>
            <Link
              href="projects"
              sx={NavigationLinksStyle}
              fontSize={18}
              underline="none"
            >
              Projects
            </Link>
            <Link
              href="workspace"
              sx={NavigationLinksStyle}
              fontSize={18}
              underline="none"
            >
              Workspace
            </Link>
            <Link
              href="discuss"
              sx={NavigationLinksStyle}
              fontSize={18}
              underline="none"
            >
              Discuss
            </Link>
            <Link
              href="about"
              sx={NavigationLinksStyle}
              fontSize={18}
              underline="none"
            >
              About
            </Link>
          </Box>
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
