import { Box, Container, Typography } from "@mui/material";

import ColabAbout from "@/assets/images/Colab About Light.png";
import Image from "@/components/Image";
import { AboutBoxStyle } from "@/styles/appStyles/HomeStyle";

export default function AboutPage() {
  return (
    <Box sx={AboutBoxStyle}>
      <Container sx={{ gap: "10px", display: "grid" }}>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography variant="h4">About COLAB</Typography>
          <Typography variant="h6">TEAM</Typography>
        </Box>
        <Typography variant="inherit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque
          maiores tempore soluta asperiores quas deleniti dolor vitae accusamus,
          atque assumenda aliquam aspernatur ad expedita eaque saepe eos quasi,
          illum animi ducimus cupiditate? Odio omnis, perferendis atque eius
          adipisci minima illo suscipit, totam alias magni cumque itaque dolor
          optio repudiandae!
        </Typography>
      </Container>
      <Box>
        <Image src={ColabAbout} width={300} height={300} alt="About Logo" />
      </Box>
    </Box>
  );
}
