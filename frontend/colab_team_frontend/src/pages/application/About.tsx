import React from "react";

import { Box, Container, Typography } from "@mui/material";

import ColabAbout from "../../assets/images/Colab About Light.png";
import AboutCss from "../../styles/About.module.css";

import { AboutBoxStyle } from "../../styles/customStyles/CustomStyles";

export default function AboutPage() {
  return (
    <Box sx={AboutBoxStyle}>
      <Container sx={{ gap: "10px", display: "grid" }}>
        <Typography
          color={"#673ab7"}
          variant="h4"
          fontFamily={"BlinkMacSystemFont"}
        >
          About COLAB
        </Typography>
        <Typography fontSize={17} fontFamily={"-apple-system"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque
          maiores tempore soluta asperiores quas deleniti dolor vitae accusamus,
          atque assumenda aliquam aspernatur ad expedita eaque saepe eos quasi,
          illum animi ducimus cupiditate? Odio omnis, perferendis atque eius
          adipisci minima illo suscipit, totam alias magni cumque itaque dolor
          optio repudiandae!
        </Typography>
      </Container>
      <Box>
        <img
          className={AboutCss["about-logo"]}
          src={ColabAbout}
          width={300}
          height={300}
        />
      </Box>
    </Box>
  );
}
