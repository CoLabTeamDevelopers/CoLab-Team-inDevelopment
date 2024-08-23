import { Box, Divider, Typography } from "@mui/material";

import ColabLightLogo from "~assets/images/Colab About Light.png";

import ProjectDetails from "../components/ProjectDetails";
import RolesAndResponsiblities from "../components/RolesAndResponsiblities";

export function Component() {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        width: "60%",
        "@media(max-width:640px)": {
          display: "grid",
          width: "100%",
          gap: "15px",
        },
      }}
    >
      <Box
        sx={{
          "@media (max-width: 600px)": {
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <img
          style={{
            border: "1px solid #b39ddb",
            borderRadius: "1000px",
            maxWidth: "100%",
            width: "50%",
            minWidth: "200px",
          }}
          src={ColabLightLogo}
          alt="Project Logo"
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: "15px",
          padding: "0px 20px",
          "@media (max-width: 600px)": {
            padding: "0",
          },
        }}
      >
        <Typography variant="h6">
          Colab Team - Collaborative platform for developers
        </Typography>
        <Typography variant="inherit">
          Colab Team is a web app which provides a platform for the developers.
          The aim of this project is to bring all the developers around the
          world to work together. This platform teaches how to be collaborative
          and how to manage work within a team.
        </Typography>
        <ProjectDetails />
        <Divider component="div" />
        <RolesAndResponsiblities />
      </Box>
    </Box>
  );
}
