import { Box, Button, type ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  label: string | React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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
