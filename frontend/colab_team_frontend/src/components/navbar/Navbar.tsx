import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material/";

import NavDrawer from "@/components/navbar/NavDrawer";

import { TitleStyle } from "../../styles/appStyles/TitleStyles";
import AppLink from "../Link";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <AppBar sx={{ background: "#ede7f6" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", width: "120px" }}>
          <NavDrawer />
          <Box sx={TitleStyle}>
            <Typography variant="h3">COLAB</Typography>
            <Typography variant="h5">TEAM</Typography>
          </Box>
        </Box>
        <NavLinks />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <AppLink href="/login">
            <Button variant="contained">Login</Button>
          </AppLink>
          <AppLink href="/register">
            <Button variant="contained">Register</Button>
          </AppLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
