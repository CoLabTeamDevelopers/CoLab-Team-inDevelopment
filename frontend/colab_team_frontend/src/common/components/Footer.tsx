import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import { Container, Typography } from "@mui/material";

import { LogoContainer, LogoSection, SocialContainer } from "./Footer.styles";
import AppLink from "./Link";

const footerLinks = [
  { icon: <GitHubIcon />, href: "" },
  { icon: <RedditIcon />, href: "" },
  { icon: <FacebookIcon />, href: "" },
];

export default function Footer() {
  return (
    <Container>
      <LogoSection>
        <LogoContainer>
          <Typography variant="h3">COLAB</Typography>
          <Typography variant="h5">TEAM</Typography>
        </LogoContainer>
        <Typography variant="caption">
          All rights reserved by COLAB TEAM
        </Typography>
      </LogoSection>
      <SocialContainer
        children={footerLinks.map((links, index) => (
          <AppLink href={links.href} key={index} children={links.icon} />
        ))}
      />
    </Container>
  );
}
