import { Link, type LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function AppLink({
  href = "/",
  children,
  ...otherProps
}: React.PropsWithChildren<LinkProps>) {
  return (
    <Link component={RouterLink} to={href} {...otherProps}>
      {children}
    </Link>
  );
}
