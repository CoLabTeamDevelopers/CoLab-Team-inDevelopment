import {
  ABOUT,
  DISCUSS,
  PROJECTS,
  WORKSPACE,
} from "@/api/app/appEndpoints";
import { NavigationLinksStyle } from "@/styles/appStyles/NavbarStyles";
import { Box, Link } from "@mui/material";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: PROJECTS },
  { label: "Workspace", href: WORKSPACE },
  { label: "Discuss", href: DISCUSS },
  { label: "About", href: ABOUT },
];

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
