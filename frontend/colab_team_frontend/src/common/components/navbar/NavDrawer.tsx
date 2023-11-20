import AddCircleIcon from "@mui/icons-material/AddCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DescriptionIcon from "@mui/icons-material/Description";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import PendingIcon from "@mui/icons-material/Pending";
import PersonIcon from "@mui/icons-material/Person";
import ViewListIcon from "@mui/icons-material/ViewList";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { NavigationDrawerStyle } from "@/common/styles/NavbarStyles";

import { leftNavLinks, rightNavLinks } from "./links";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  direction: "left" | "right";
}

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const leftNavIcons = [
  { icon: <HomeIcon /> },
  { icon: <ViewListIcon /> },
  { icon: <WorkspacesIcon /> },
  { icon: <Diversity3Icon /> },
  { icon: <DescriptionIcon /> },
];

const leftDrawerLinks = leftNavLinks.map((links, index) => ({
  ...links,
  ...leftNavIcons[index],
}));

const rightNavIcons = [
  { icon: <PersonIcon /> },
  { icon: <AddCircleIcon /> },
  { icon: <PendingIcon /> },
  { icon: <ViewListIcon /> },
];

const rightDrawerLinks = rightNavLinks.map((links, index) => ({
  ...links,
  ...rightNavIcons[index],
}));

export default function NavDrawer({ open, onClose, direction }: DrawerProps) {
  const navigate = useNavigate();

  return (
    <Box
      sx={[
        NavigationDrawerStyle,
        { display: direction === "right" ? "flex" : "none", width: "0%" },
      ]}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        anchor={direction}
        open={open}
      >
        <DrawerHeader
          sx={{
            justifyContent: "space-between",
            flexDirection: direction === "right" ? "row-reverse" : "",
          }}
        >
          <Typography variant="h5">Welcome, Siddhant</Typography>
          <IconButton onClick={onClose}>
            {direction === "right" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {direction === "left" &&
            leftDrawerLinks.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigate(item.href)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          {direction === "right" &&
            rightDrawerLinks.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigate(item.href)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        <Divider />
        {direction === "left" && (
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
        )}
      </Drawer>
    </Box>
  );
}
