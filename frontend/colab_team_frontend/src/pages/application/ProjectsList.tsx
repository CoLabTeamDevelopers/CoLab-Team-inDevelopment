import React from "react";

import { useNavigate } from "react-router-dom";

import { Box, Card, Chip, Typography } from "@mui/material";

import NavBar from "../../components/Navbar";

import {
  ProjectCardChipStyle,
  ProjectCardContentStyle,
  ProjectCardImageStyle,
  ProjectCardStyle,
  ProjectCardTitleStyle,
  ProjectListBoxStyle,
  ProjectListCardDescriptionStyle,
  ProjectListCardStyle,
} from "../../styles/customStyles/CustomStyles";

export default function ProjectsListPage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("colabteams");
  };
  return (
    <Box sx={ProjectListBoxStyle}>
      <Box>
        <NavBar />
      </Box>
      <Box sx={ProjectListCardStyle}>
        <Card sx={ProjectCardStyle}>
          <Box sx={ProjectCardImageStyle}>
            <img
              src="https://neural.love/cdn/ai-photostock/1edc6d57-83d6-69c8-b715-b73582e1fb7e/0.jpg?Expires=1701388799&Signature=UgnN5MpbWI6UFRgYyo4JHbHKt0KOlFodnrbgew0~xjBAxv2rO3JJkGLmOZeLQzvhW-O0lc~3VJQ1ERpVogvkHbiRXWHdZ~mtlohtDfY6plfZPohI~pP25LYLf2P7WJQiAdpIuajlKH5nI05cuJewLPbgbf7-u6nBGtY-IYfNTvtuJjJKwJ0Y7fmsI-PW-K~y30Lv7bEsAU8orHMHfgWnRj-97SnvLKKGlT3jYNF5I~6Kk0Eo9Kq6w4EgA~NRQG-K6zPuGW6Ry5HKZZ3MPDzzUURE1q54iP9OD2~J2XUEbvVFaNJArNvWGZu7fC~pil8gtSA0mzDIA7d1FFvD66m-tQ__&Key-Pair-Id=K2RFTOXRBNSROX"
              alt="Project Logo"
              width="100%"
              style={{ minHeight: "22vh" }}
            />
          </Box>
          <Box sx={ProjectCardContentStyle}>
            <Typography
              onClick={() => handleNavigation()}
              sx={ProjectCardTitleStyle}
              fontSize={15}
              fontWeight={600}
              fontFamily={"BlinkMacSystemFont"}
            >
              Colab Team - Collaborative platform for developers
            </Typography>
            <Typography
              sx={ProjectListCardDescriptionStyle}
              fontFamily={"BlinkMacSystemFont"}
              fontSize={15}
            >
              Colab Team is a web app which provides a platform for the
              developers. The aim of this project is to bring all the developers
              around the world to work together and ...
            </Typography>
            <Box>
              <Chip
                sx={ProjectCardChipStyle}
                size="small"
                variant="outlined"
                label={"Published on " + new Date().toLocaleDateString()}
              />
            </Box>
            <Box
              sx={{
                gap: "10px",
                display: "flex",
                justifyContent: "space-between",
                overflow: "auto",
              }}
            >
              <Box sx={{ gap: "5px", display: "flex" }}>
                <Chip
                  sx={ProjectCardChipStyle}
                  size="small"
                  variant="outlined"
                  label="Django"
                />
                <Chip
                  sx={ProjectCardChipStyle}
                  size="small"
                  variant="outlined"
                  label="React"
                />
                <Chip
                  sx={ProjectCardChipStyle}
                  size="small"
                  variant="outlined"
                  label="Material UI"
                />
                <Chip
                  sx={ProjectCardChipStyle}
                  size="small"
                  variant="outlined"
                  label="Rest Api"
                />
              </Box>
              <Box>
                <Chip
                  sx={ProjectCardChipStyle}
                  size="small"
                  variant="outlined"
                  label="Beginner"
                />
              </Box>
              <Box>
                <Chip
                  sx={ProjectCardChipStyle}
                  size="small"
                  variant="outlined"
                  label="6"
                />
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
