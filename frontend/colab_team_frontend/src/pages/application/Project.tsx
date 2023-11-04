import React from "react";

import {
  Box,
  Typography,
  Button,
  Chip,
  Avatar,
  Divider,
  Container,
} from "@mui/material";

import ColabLightLogo from "../../assets/images/Colab About Light.png";

import NavBar from "../../components/Navbar";
import Image from "../../components/Image";

import {
  ButtonsStyle,
  ProjectBoxImageStyle,
  ProjectBoxStyle,
  ProjectCardChipStyle,
  ProjectContentBoxStyle,
  ProjectRootBoxStyle,
  ProjectSubContentFontStyle,
  ProjectTitleFontStyle,
} from "../../styles/customStyles/CustomStyles";

export default function ProjectPage() {
  return (
    <Box sx={ProjectRootBoxStyle}>
      <NavBar />
      <Box sx={ProjectBoxStyle}>
        <Box sx={ProjectBoxImageStyle}>
          <Image
            style={{
              border: "1px solid #b39ddb",
              borderRadius: "1000px",
              maxWidth: "100%",
              height: "auto",
              width: "50%",
              minWidth: "200px",
            }}
            src={ColabLightLogo}
            alt="Project Logo"
            // width="100%"
            // height="auto"
          />
        </Box>
        <Box sx={ProjectContentBoxStyle}>
          <Typography
            sx={ProjectTitleFontStyle}
            fontFamily={"BlinkMacSystemFont"}
            fontSize={25}
          >
            Colab Team - Collaborative platform for developers
          </Typography>
          <Typography
            sx={ProjectSubContentFontStyle}
            fontFamily={"BlinkMacSystemFont"}
            fontSize={17}
          >
            Colab Team is a web app which provides a platform for the
            developers. The aim of this project is to bring all the developers
            around the world to work together. This platform teaches how to be
            collaborative and how to manage work within a team.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Typography
              sx={ProjectSubContentFontStyle}
              fontFamily={"BlinkMacSystemFont"}
              fontSize={17}
            >
              Author
            </Typography>
            <Chip
              size="medium"
              label="Siddhant Totade"
              variant="outlined"
              avatar={<Avatar>S</Avatar>}
              sx={ProjectCardChipStyle}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              overflow: "auto",
            }}
          >
            <Typography
              sx={ProjectSubContentFontStyle}
              fontFamily={"BlinkMacSystemFont"}
              fontSize={17}
            >
              Collaborators
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                width: "100%",
                overflow: "auto",
              }}
            >
              <Chip
                size="small"
                label="Siddhant Totade"
                variant="outlined"
                avatar={<Avatar>S</Avatar>}
                sx={ProjectCardChipStyle}
              />
              <Chip
                size="small"
                label="Siddhant Totade"
                avatar={<Avatar>S</Avatar>}
              />
              <Chip
                size="small"
                label="Siddhant Totade"
                avatar={<Avatar>S</Avatar>}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              overflow: "auto",
            }}
          >
            <Typography
              sx={ProjectSubContentFontStyle}
              fontFamily={"BlinkMacSystemFont"}
              fontSize={17}
            >
              Skills
            </Typography>
            <Box
              sx={{
                display: "flex",
                overflow: "auto",
                gap: "5px",
                width: "100%",
              }}
            >
              <Chip
                size="small"
                label="Django"
                variant="outlined"
                sx={ProjectCardChipStyle}
              />
              <Chip size="small" label="React" />
              <Chip size="small" label="Material UI" />
              <Chip size="small" label="Rest Api" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography
              sx={ProjectSubContentFontStyle}
              fontFamily={"BlinkMacSystemFont"}
              fontSize={17}
            >
              Position
            </Typography>
            <Chip
              size="small"
              label="6"
              variant="outlined"
              sx={ProjectCardChipStyle}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography
              sx={ProjectSubContentFontStyle}
              fontFamily={"BlinkMacSystemFont"}
              fontSize={17}
            >
              Project Level
            </Typography>
            <Chip
              size="small"
              label="Intermediate"
              variant="outlined"
              sx={ProjectCardChipStyle}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography
              sx={ProjectSubContentFontStyle}
              fontFamily={"BlinkMacSystemFont"}
              fontSize={17}
            >
              Team Status
            </Typography>
            <Chip
              size="small"
              label="Full"
              variant="outlined"
              sx={ProjectCardChipStyle}
            />
          </Box>
          <Box>
            <Button variant="contained" sx={ButtonsStyle}>
              Request Join
            </Button>
          </Box>
          <Divider component="div" />
          <Box>
            <Typography
              sx={ProjectTitleFontStyle}
              fontFamily={"BlinkMacSystemFont"}
              fontSize={25}
            >
              Roles & Responsiblities
            </Typography>
            <Container sx={{ gap: "5px", display: "grid" }} component="ul">
              <Typography
                sx={ProjectSubContentFontStyle}
                component="li"
                fontSize={15}
                fontFamily={"BlinkMacSystemFont"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eveniet explicabo beatae repellat voluptates odio
                cumque at unde, minus magni?
              </Typography>
              <Typography
                sx={ProjectSubContentFontStyle}
                component="li"
                fontSize={15}
                fontFamily={"BlinkMacSystemFont"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eveniet explicabo beatae repellat voluptates odio
                cumque at unde, minus magni?
              </Typography>
              <Typography
                sx={ProjectSubContentFontStyle}
                component="li"
                fontSize={15}
                fontFamily={"BlinkMacSystemFont"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eveniet explicabo beatae repellat voluptates odio
                cumque at unde, minus magni?
              </Typography>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
