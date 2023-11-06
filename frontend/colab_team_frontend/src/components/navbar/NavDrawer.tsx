import * as React from "react";

import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ViewListIcon from "@mui/icons-material/ViewList";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { NavigationDrawerStyle } from "@/styles/appStyles/NavbarStyles";
import { navLinks } from "./NavLinks";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const navIcons = [
  { icon: <HomeIcon sx={{ color: "#9575cd" }} /> },
  { icon: <ViewListIcon sx={{ color: "#9575cd" }} /> },
  { icon: <WorkspacesIcon sx={{ color: "#9575cd" }} /> },
  { icon: <Diversity3Icon sx={{ color: "#9575cd" }} /> },
  { icon: <DescriptionIcon sx={{ color: "#9575cd" }} /> },
];

const drawerLinks = navLinks.map((links, index) => ({
  ...links,
  ...navIcons[index],
}));

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={NavigationDrawerStyle}>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        open={open}
      >
        <DrawerHeader sx={{ justifyContent: "space-between" }}>
          <Typography>Colab</Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerLinks.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigate(item.href)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "#9575cd" }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
