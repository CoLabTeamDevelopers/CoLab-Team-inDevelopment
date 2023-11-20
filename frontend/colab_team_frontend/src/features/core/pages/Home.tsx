import { Box, Typography } from "@mui/material";

import ColabSVG from "@/assets/svg/ColabSvg";
import TeamSVG from "@/assets/svg/TeamSvg";
import Footer from "@/common/components/footer/Footer";
import Navbar from "@/common/components/navbar/Navbar";
import ColabSubText from "@/common/styles/Home.module.css";
import { ColabLogoBoxStyle } from "@/common/styles/HomeStyles";

import AboutSection from "./About";

export default function HomePage() {
  return (
    <>
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
        <AboutSection />
      </Box>
      <Footer />
    </>
  );
}
