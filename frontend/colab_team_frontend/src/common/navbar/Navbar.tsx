import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material/";

import AppLink from "../components/Link";
import NavDrawer from "./NavDrawer";
import NavLinks from "./NavLinks";
import useNavDrawer from "./useNavDrawer";

export default function NavBar() {
  const {
    closeLeftDrawer,
    closeRightDrawer,
    leftDrawerOpen,
    openLeftDrawer,
    openRightDrawer,
    rightDrawerOpen,
  } = useNavDrawer();

  return (
    <AppBar sx={{ background: "#ede7f6" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "15%",
            "@media (max-width:1024px)": {
              width: "0%",
            },
          }}
        >
          <NavDrawer
            open={leftDrawerOpen}
            onClose={closeLeftDrawer}
            direction="left"
          />
          <NavDrawer
            open={rightDrawerOpen}
            onClose={closeRightDrawer}
            direction="right"
          />
          <Box
            sx={{ display: "flex", marginLeft: "0px", alignItems: "center" }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={openLeftDrawer}
              sx={{ "@media (min-width:1024px)": { display: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <Typography variant="h3">COLAB</Typography>
              <Typography variant="h5">TEAM</Typography>
            </Box>
          </Box>
        </Box>
        <NavLinks />

        {/* If user logged in display <Avatar/> else display login and register <Button/> */}
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <AppLink href="/login">
            <Button variant="contained">Login</Button>
          </AppLink>
          <AppLink href="/register">
            <Button variant="contained">Register</Button>
          </AppLink>
          <Avatar
            onClick={openRightDrawer}
            sx={{ cursor: "pointer" }}
            alt="User Logo"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
