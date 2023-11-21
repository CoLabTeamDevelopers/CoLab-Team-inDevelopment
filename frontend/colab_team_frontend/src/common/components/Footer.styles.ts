import { styled } from "@mui/material/styles";

export const Container = styled("footer")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "#ede7f6",
  height: "15vh",
  bottom: 0,
  position: "fixed",
  width: "100%",
  "@media (max-width:640px)": {
    display: "grid",
  },
});

export const LogoSection = styled("section")({
  width: "100%",
  display: "grid",
  alignItems: "baseline",
  justifyContent: "center",
});

export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
});

export const SocialContainer = styled("section")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "30px",
});
