import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  Divider,
  IconButton,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PendingIcon from "@mui/icons-material/Pending";
import HomeIcon from "@mui/icons-material/Home";

import { NavigationDrawerStyle } from "@/styles/appStyles/NavbarStyles";
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
  { icon: <HomeIcon sx={{ color: "#9575cd" }} /> },
  { icon: <ViewListIcon sx={{ color: "#9575cd" }} /> },
  { icon: <WorkspacesIcon sx={{ color: "#9575cd" }} /> },
  { icon: <Diversity3Icon sx={{ color: "#9575cd" }} /> },
  { icon: <DescriptionIcon sx={{ color: "#9575cd" }} /> },
];

const leftDrawerLinks = leftNavLinks.map((links, index) => ({
  ...links,
  ...leftNavIcons[index],
}));

const rightNavIcons = [
  { icon: <PersonIcon sx={{ color: "#9575cd" }} /> },
  { icon: <AddCircleIcon sx={{ color: "#9575cd" }} /> },
  { icon: <PendingIcon sx={{ color: "#9575cd" }} /> },
  { icon: <ViewListIcon sx={{ color: "#9575cd" }} /> },
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
            variant="persistent" open={open}
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
