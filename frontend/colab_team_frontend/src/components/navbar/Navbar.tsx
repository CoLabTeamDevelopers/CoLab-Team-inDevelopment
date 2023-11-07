import { AppBar, Box, Toolbar, Typography, Button, Link } from "@mui/material/";

import NavDrawer from "@/components/navbar/NavDrawer";

import { TitleStyle } from "../../styles/appStyles/TitleStyles";

import NavLinks from "./NavLinks";
import { LOGIN, REGISTER } from "@/api/auth/authEndpoints";

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
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Link href={LOGIN}>
            <Button variant="contained">Login</Button>
          </Link>
          <Link href={REGISTER}>
            <Button variant="contained">Register</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
