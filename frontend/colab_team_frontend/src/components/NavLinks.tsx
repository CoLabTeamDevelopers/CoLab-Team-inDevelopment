import React from "react";

import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { NavigationLinksStyle } from "../styles/customStyles/NavbarStyles";

import {
  DISCUSS,
  HOME,
  PROJECTS,
  WORKSPACE,
} from "../api/application/appEndpoints";
import { APP_URL } from "../api/baseEndpoint";

export const navLinks = [
  { label: "Home", href: APP_URL + HOME },
  { label: "Projects", href: APP_URL + PROJECTS },
  { label: "Workspace", href: APP_URL + WORKSPACE },
  { label: "Discuss", href: APP_URL + DISCUSS },
  { label: "About", href: APP_URL + HOME },
];

export default function NavLinks() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
      }}
    >
      {navLinks.map((links, index) => (
        <Typography
          key={index}
          sx={NavigationLinksStyle}
          onClick={() => navigate(links.href)}
        >
          {links.label}
        </Typography>
      ))}
    </Box>
  );
}
