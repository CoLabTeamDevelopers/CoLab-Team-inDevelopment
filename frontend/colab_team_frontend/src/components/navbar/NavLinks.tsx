import React from "react";
import { NavigationLinksStyle } from "@/styles/appStyles/NavbarStyles";
import { Box, Link } from "@mui/material";
import { leftNavLinks } from "./links";

export default function NavLinks() {
  return (
    <Box sx={NavigationLinksStyle}>
      {leftNavLinks.map((links, index) => (
        <Link key={index} href={links.href}>
          {links.label}
        </Link>
      ))}
    </Box>
  );
}
