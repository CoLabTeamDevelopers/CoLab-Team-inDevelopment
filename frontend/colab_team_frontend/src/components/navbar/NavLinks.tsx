import { Box } from "@mui/material";

import { NavigationLinksStyle } from "@/styles/appStyles/NavbarStyles";

import AppLink from "../Link";
import { navLinks } from "./links";

export default function NavLinks() {
  return (
    <Box sx={NavigationLinksStyle}>
      {navLinks.map((links, index) => (
        <AppLink key={index} href={links.href}>
          {links.label}
        </AppLink>
      ))}
    </Box>
  );
}
