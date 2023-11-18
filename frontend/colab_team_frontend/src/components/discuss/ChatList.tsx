import React from "react";
import {
  List,
  ListItem,
  Typography,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  ListItemButton,
} from "@mui/material";

export default function ChatList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Scott
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
    </List>
  );
}
