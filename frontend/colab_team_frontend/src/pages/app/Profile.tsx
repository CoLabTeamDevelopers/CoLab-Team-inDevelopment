import React from "react";
import { Box, Typography, Link, Badge, Avatar } from "@mui/material";

import AppContentLayout from "@/layouts/AppContent";
import DataChip from "@/components/DataChip";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import EditUserDetails from "@/components/profile/EditUserDetails";
import EditUserImage from "@/components/profile/EditUserImage";
import ChangeEmail from "@/components/profile/ChangeEmail";

export default function ProfilePage() {
  return (
    <React.Fragment>
      <NavBar />
      <AppContentLayout>
        <Box
          sx={{
            width: "50%",
            margin: "auto",
            "@media(max-width:1024px)": {
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              "@media(max-width: 1024px)": {
                display: "grid",
                justifyContent: "center",
                flexDirection: "row-reverse",
              },
            }}
          >
            <Box
              sx={{
                "@media(max-width:1024px)": {
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            >
              <Badge
                overlap="circular"
                sx={{ border: "1px solid #b39ddb", borderRadius: "100px" }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<EditUserImage />} // EditUserImage (Camera Icon) only visible to user
              >
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                  }}
                  src="https://static.vecteezy.com/system/resources/previews/024/212/249/original/ai-generated-sticker-anime-girl-with-blue-hair-png.png"
                />
              </Badge>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "end",
                gap: "10px",
                marginTop: "1rem",
                "@media(max-width:1024px)": {
                  display: "grid",
                  alignItems: "start",
                },
              }}
            >
              <EditUserDetails />
              <Typography variant="h2">SimpSid</Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  "@media(max-width:1024px)": {
                    flexDirection: "row-reverse",
                  },
                }}
              >
                {/* This link is displayed only to the users not to the viewers */}
                <ChangeEmail />
                {/* <Link>Change</Link> */}
                <Typography variant="h2">
                  siddhanttotade.1994@gmail.com
                </Typography>
              </Box>
              <Typography variant="h2">Raipur, Chhattisgarh</Typography>
              <Typography variant="h3">Siddhant Totade</Typography>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <DataChip size="small" label="Django" />
                <DataChip size="small" label="React" />
                <DataChip size="small" label="Material UI" />
                <DataChip size="small" label="Rest Api" />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: "5px",
              marginTop: "10px",
            }}
          >
            <Typography variant="h2">About Me</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              aspernatur doloremque, nulla voluptatibus nostrum magni animi!
              Nam, laudantium. Harum, odit!
            </Typography>
          </Box>
          <Box sx={{ display: "grid", marginTop: "10px" }}>
            <Typography variant="h2">Projects</Typography>
            <Link href="/projects/colab" sx={{ margin: "10px 10px" }}>
              Colab Teams - Colaborative Platform for developers
            </Link>
            <Link href="/projects/colab" sx={{ margin: "0px 10px" }}>
              Colab Teams - Colaborative Platform for developers
            </Link>
          </Box>
        </Box>
      </AppContentLayout>
      <Footer />
    </React.Fragment>
  );
}
