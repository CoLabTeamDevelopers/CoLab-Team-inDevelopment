import { Box, Link } from "@mui/material";

import { NavigationLinksStyle } from "@/styles/appStyles/NavbarStyles";

import { navLinks } from "./links";

export default function NavLinks() {
  return (
    <Box sx={NavigationLinksStyle}>
      {navLinks.map((links, index) => (
        <Link key={index} href={links.href}>
          {links.label}
        </Link>
      ))}
    </Box>
  );
}
