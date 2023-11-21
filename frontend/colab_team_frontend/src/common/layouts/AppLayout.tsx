import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

import NavBar from "../components/navbar/Navbar";

const Main = styled("main")({
  marginTop: "6rem",
  "@media (max-width: 1024px)": {
    width: "100%",
  },
});

export function Component() {
  return (
    <Main>
      <NavBar />
      <Outlet />
    </Main>
  );
}
