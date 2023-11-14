import React from "react";

import { Box, Typography, Divider } from "@mui/material";
import ColabLightLogo from "@/assets/images/Colab About Light.png";
import NavBar from "@/components/navbar/Navbar";
import Image from "@/components/Image";
import {
  ProjectBoxImageStyle,
  ProjectContentBoxStyle,
} from "@/styles/appStyles/ProjectStyles";
import AppContentLayout from "@/layouts/AppContent";
import RolesAndResponsiblities from "@/components/project/RolesAndResponsiblities";
import {
  ProjectBoxStyle,
  ThumbnailStyle,
} from "@/styles/appStyles/ProjectStyles";
import ProjectDetails from "@/components/project/ProjectDetails";

export default function ProjectPage() {
  return (
    <React.Fragment>
      <NavBar />
      <AppContentLayout>
        <Box sx={ProjectBoxStyle}>
          <Box sx={ProjectBoxImageStyle}>
            <Image
              style={ThumbnailStyle}
              src={ColabLightLogo}
              alt="Project Logo"
            />
          </Box>
          <Box sx={ProjectContentBoxStyle}>
            <Typography variant="h6">
              Colab Team - Collaborative platform for developers
            </Typography>
            <Typography variant="inherit">
              Colab Team is a web app which provides a platform for the
              developers. The aim of this project is to bring all the developers
              around the world to work together. This platform teaches how to be
              collaborative and how to manage work within a team.
            </Typography>
            <ProjectDetails />
            <Divider component="div" />
            <RolesAndResponsiblities />
          </Box>
        </Box>
      </AppContentLayout>
    </React.Fragment>
  );
}
