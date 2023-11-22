import { Box, Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  label: string | ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export default function ActionButton({
  label,
  type = "submit",
  startIcon,
  endIcon,
  ...otherProps
}: Props) {
  return (
    <Button type={type} variant="contained" {...otherProps}>
      {startIcon}
      <Box sx={{ mx: 1 }}>{label}</Box>
      {endIcon}
    </Button>
  );
}
