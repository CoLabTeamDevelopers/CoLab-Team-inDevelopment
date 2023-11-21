import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import NavBar from "../components/navbar/Navbar";
import { AppContentLayoutStyle } from "../styles/AppContentLayoutStyles";

export function Component() {
  return (
    <Box component="main" sx={AppContentLayoutStyle}>
      <NavBar />
      <Outlet />
    </Box>
  );
}
