import { useReducer } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  Avatar,
  IconButton,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";

import NavDrawer from "@/components/navbar/NavDrawer";
import { TitleStyle } from "@/styles/appStyles/TitleStyles";
import NavLinks from "@/components/navbar/NavLinks";
import { LOGIN, REGISTER } from "@/api/auth/authEndpoints";
import { drawerReducer } from "@/reducers/drawerReducer";
import { navDrawerInitialState } from "@/states/navDrawerState";

export default function NavBar() {
  const [state, dispatch] = useReducer(drawerReducer, navDrawerInitialState);
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
            open={state.openLeftDrawer}
            onClose={() => dispatch({ type: "CLOSE_LEFT_DRAWER" })}
            direction="left"
          />
          <NavDrawer
            open={state.openRightDrawer}
            onClose={() => dispatch({ type: "CLOSE_RIGHT_DRAWER" })}
            direction="right"
          />
          <Box sx={TitleStyle}>
            <IconButton
              aria-label="open drawer"
              onClick={() => dispatch({ type: "OPEN_LEFT_DRAWER" })}
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
          <Link href={LOGIN}>
            <Button variant="contained">Login</Button>
          </Link>
          <Link href={REGISTER}>
            <Button variant="contained">Register</Button>
          </Link>
          <Avatar
            onClick={() => dispatch({ type: "OPEN_RIGHT_DRAWER" })}
            sx={{ cursor: "pointer" }}
            alt="User Logo"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
