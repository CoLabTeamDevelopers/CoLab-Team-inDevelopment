import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import { Typography } from "@mui/material";

import Containers from "./Footer.styles";
import AppLink from "./Link";

const footerLinks = [
  { icon: <GitHubIcon />, href: "" },
  { icon: <RedditIcon />, href: "" },
  { icon: <FacebookIcon />, href: "" },
];

export default function Footer() {
  return (
    <Containers.Footer>
      <Containers.LogoSection>
        <Containers.LogoContainer>
          <Typography variant="h3">COLAB</Typography>
          <Typography variant="h5">TEAM</Typography>
        </Containers.LogoContainer>
        <Typography variant="caption">
          All rights reserved by COLAB TEAM
        </Typography>
      </Containers.LogoSection>
      <Containers.SocialLinks
        children={footerLinks.map((links, index) => (
          <AppLink href={links.href} key={index} children={links.icon} />
        ))}
      />
    </Containers.Footer>
  );
}
