import React from "react";

import ColabSVG from "../../assets/svg/ColabSvg";
import TeamSVG from "../../assets/svg/TeamSvg";
import { ColabLogoBoxStyle } from "../../styles/customStyles/CustomStyles";
import ColabSubText from "../../styles/Home.module.css";

import { Box, Typography } from "@mui/material";

import NavBar from "../../components/Navbar";
import AboutPage from "./About";

export default function HomePage() {
  return (
    <Box>
      <Box component="div" sx={{ height: "100vh" }}>
        <NavBar />
        <Box sx={ColabLogoBoxStyle}>
          <Box
            sx={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <ColabSVG />
            <TeamSVG />
          </Box>
          <Box className={ColabSubText["tracking-in-expand-fwd"]}>
            <Typography fontFamily={"Roboto"} fontSize={17} color={"#6200ea"}>
              Create ⦿ Team up ⦿ Assign ⦿ Discuss
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component="div" sx={{ height: "100vh", display: "flex" }}>
        <AboutPage />
      </Box>
    </Box>
  );
}
