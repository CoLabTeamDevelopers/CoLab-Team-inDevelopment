import React from "react";
import { Box, Divider } from "@mui/material";

import AppContentLayout from "@/layouts/AppContent";
import ChatList from "@/components/discuss/ChatList";
import ChatMessage from "@/components/discuss/ChatMessage";

export default function DiscussPage() {
  return (
    <React.Fragment>
      <AppContentLayout>
        <Box
          sx={{
            display: "flex",
            width: "60%",
            margin: "auto",
          }}
        >
          <ChatList />
          <Divider orientation="vertical" flexItem />
          <ChatMessage />
        </Box>
      </AppContentLayout>
    </React.Fragment>
  );
}
