import { Link, LinkProps } from "@mui/material";
import { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function AppLink({
  href = "/",
  children,
  ...otherProps
}: PropsWithChildren<LinkProps>) {
  return (
    <Link component={RouterLink} to={href} {...otherProps}>
      {children}
    </Link>
  );
}
