import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

import CoLabLightLogo from "~assets/images/CoLab - Logo Light.png";
import Waves from "~assets/svg/Wave";

export default function AuthFormLayout({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <Box
      sx={{
        width: "20%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        minWidth: "20%",
        "@media screen and (max-width: 400px)": {
          width: "90%",
        },
        "@media screen and (min-width: 401px) and (max-width: 1000px)": {
          width: "40%",
        },
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={CoLabLightLogo} alt="app_img" width={200} height={200} />
      </Box>
      <Typography
        fontSize={25}
        sx={{ textAlign: "center", color: "#673ab7" }}
        fontFamily="Roboto"
      >
        {title}
      </Typography>
      <Waves />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
