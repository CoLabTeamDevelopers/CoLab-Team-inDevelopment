import React from "react";
import { Box, Typography } from "@mui/material";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#ede7f6",
        height: "20vh",
        bottom: 0,
        borderRadius: "30px 30px 0px 0px",
        "@media (max-width:640px)": {
          display: "grid",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "grid",
          alignItems: "baseline",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">COLAB</Typography>
          <Typography variant="h5">TEAM</Typography>
        </Box>
        <Box>
          <Typography variant="caption">
            All rights reserved by COLAB TEAM
          </Typography>
        </Box>
      </Box>
      <FooterLinks />
    </Box>
  );
}
