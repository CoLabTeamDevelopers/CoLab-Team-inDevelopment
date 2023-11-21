import { Box, Link } from "@mui/material";

import { leftNavLinks } from "./links";

export default function NavLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        "@media(max-width:1024px)": {
          display: "none",
        },
      }}
    >
      {leftNavLinks.map((links, index) => (
        <Link key={index} href={links.href}>
          {links.label}
        </Link>
      ))}
    </Box>
  );
}
