import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import { Box, Link } from "@mui/material";

const footerLinks = [
  { icon: <GitHubIcon />, href: "" },
  { icon: <RedditIcon />, href: "" },
  { icon: <FacebookIcon />, href: "" },
];

export default function FooterLinks() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {footerLinks.map((links, index) => (
        <Link href={links.href} key={index}>
          {links.icon}
        </Link>
      ))}
    </Box>
  );
}
