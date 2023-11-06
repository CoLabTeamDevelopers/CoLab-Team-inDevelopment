import React from "react";

import ColabSVG from "@/assets/svg/ColabSvg";
import TeamSVG from "@/assets/svg/TeamSvg";
import { ColabLogoBoxStyle } from "@/styles/appStyles/HomeStyle";
import ColabSubText from "@/styles/cssStyles/Home.module.css";
import { Box, Typography } from "@mui/material";
import Navbar from "@/components/navbar/Navbar";
import AboutPage from "@/components/home/About";

export default function HomePage() {
  return (
    <React.Fragment>
      <Box component="section" sx={{ height: "100vh" }}>
        <Navbar />
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
          <Typography
            className={ColabSubText["tracking-in-expand-fwd"]}
            fontFamily={"Roboto"}
            fontSize={17}
            color={"#6200ea"}
          >
            Create ⦿ Team up ⦿ Assign ⦿ Discuss
          </Typography>
        </Box>
      </Box>
      <Box component="section" sx={{ height: "100vh", display: "flex" }}>
        <AboutPage />
      </Box>
    </React.Fragment>
  );
}
