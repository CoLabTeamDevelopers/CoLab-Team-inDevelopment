import { Box, BoxProps } from "@mui/material";
import { PropsWithChildren } from "react";

import NavBar from "@/components/navbar/Navbar";
import { AppContentLayoutStyle } from "@/styles/appStyles/AppContentLayoutStyles";

export default function AppContentLayout({
  children,
  ...otherProps
}: PropsWithChildren<BoxProps>) {
  return (
    <Box component="main" sx={AppContentLayoutStyle} {...otherProps}>
      <NavBar />
      {children}
    </Box>
  );
}
