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
import {
  ButtonsStyle,
  ProjectCardChipStyle,
} from "../../styles/customStyles/CustomStyles";
import NavBar from "../../components/Navbar";

export default function ProjectPage() {
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "70%",
          margin: "auto",
          marginTop: "6rem",
        }}
      >
        <Box>
          <img
            style={{
              border: "1px solid #b39ddb",
              borderRadius: "100px",
            }}
            src={ColabLightLogo}
            alt=""
            width={200}
          />
        </Box>
        <Box sx={{ display: "grid", gap: "15px", padding: "0px 50px" }}>
          <Typography fontFamily={"BlinkMacSystemFont"} fontSize={25}>
            Colab Team - Collaborative platform for developers
          </Typography>
          <Typography fontFamily={"BlinkMacSystemFont"} fontSize={17}>
            Colab Team is a web app which provides a platform for the
            developers. The aim of this project is to bring all the developers
            around the world to work together. This platform teaches how to be
            collaborative and how to manage work within a team.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Typography fontFamily={"BlinkMacSystemFont"} fontSize={17}>
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
            }}
          >
            <Typography fontFamily={"BlinkMacSystemFont"} fontSize={17}>
              Collaborators
            </Typography>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography fontFamily={"BlinkMacSystemFont"} fontSize={17}>
              Skills Required
            </Typography>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography fontFamily={"BlinkMacSystemFont"} fontSize={17}>
              Members Require
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
            <Typography fontFamily={"BlinkMacSystemFont"} fontSize={17}>
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
            <Typography fontFamily={"BlinkMacSystemFont"} fontSize={17}>
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
            <Typography fontFamily={"BlinkMacSystemFont"} fontSize={25}>
              Roles & Responsiblities
            </Typography>
            <Container sx={{ gap: "5px", display: "grid" }} component="ul">
              <Typography
                component="li"
                fontSize={15}
                fontFamily={"BlinkMacSystemFont"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eveniet explicabo beatae repellat voluptates odio
                cumque at unde, minus magni?
              </Typography>
              <Typography
                component="li"
                fontSize={15}
                fontFamily={"BlinkMacSystemFont"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eveniet explicabo beatae repellat voluptates odio
                cumque at unde, minus magni?
              </Typography>
              <Typography
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
