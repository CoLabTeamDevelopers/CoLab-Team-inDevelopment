import { Avatar, Badge, Box, Link, Typography } from "@mui/material";

import DataChip from "@/common/components/DataChip";
import Footer from "@/common/components/footer/Footer";
import NavBar from "@/common/components/navbar/Navbar";
import AppContentLayout from "@/common/layouts/AppContent";
import {
  AboutUserStyle,
  ChangeEmailBoxStyle,
  ProfileBoxStyle,
  UserDetailsBoxStyle,
  UserDetailsStyle,
  UserImageStyle,
} from "@/common/styles/ProfileStyles";

import ChangeEmail from "../components/ChangeEmail";
import EditUserDetails from "../components/EditUserDetails";
import EditUserImage from "../components/EditUserImage";

export function Component() {
  return (
    <>
      <NavBar />
      <AppContentLayout>
        <Box sx={ProfileBoxStyle}>
          <Box sx={UserDetailsBoxStyle}>
            <Box sx={UserImageStyle}>
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
            <Box sx={UserDetailsStyle}>
              <EditUserDetails />
              <Typography variant="h2">SimpSid</Typography>
              <Box sx={ChangeEmailBoxStyle}>
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
          <Box sx={AboutUserStyle}>
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
    </>
  );
}
