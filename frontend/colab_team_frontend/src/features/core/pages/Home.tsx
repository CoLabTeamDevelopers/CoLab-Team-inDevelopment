import "../styles.css";

import { Box, Container, Typography } from "@mui/material";

import ColabAbout from "@/assets/images/Colab About Light.png";
import ColabSVG from "@/assets/svg/ColabSvg";
import TeamSVG from "@/assets/svg/TeamSvg";
import Footer from "@/common/components/Footer";
import Navbar from "@/common/navbar/Navbar";

export function Component() {
  return (
    <>
      <Box component="section" sx={{ height: "100vh" }}>
        <Navbar />
        <Box
          sx={{
            top: "30%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        >
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
            className="tracking-in-expand-fwd"
            fontFamily="Roboto"
            fontSize={17}
            color="#6200ea"
          >
            Create ⦿ Team up ⦿ Assign ⦿ Discuss
          </Typography>
        </Box>
      </Box>
      <Box component="section" sx={{ height: "100vh", display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            width: "80%",
            margin: "auto",
            alignItems: "center",
            "@media (max-width: 1024px)": {
              flexDirection: "column-reverse",
              width: "100%",
            },
          }}
        >
          <Container sx={{ gap: "10px", display: "grid" }}>
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              <Typography variant="h4">About COLAB</Typography>
              <Typography variant="h6">TEAM</Typography>
            </Box>
            <Typography variant="inherit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              itaque maiores tempore soluta asperiores quas deleniti dolor vitae
              accusamus, atque assumenda aliquam aspernatur ad expedita eaque
              saepe eos quasi, illum animi ducimus cupiditate? Odio omnis,
              perferendis atque eius adipisci minima illo suscipit, totam alias
              magni cumque itaque dolor optio repudiandae!
            </Typography>
          </Container>
          <Box>
            <img src={ColabAbout} width={300} height={300} alt="About Logo" />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
