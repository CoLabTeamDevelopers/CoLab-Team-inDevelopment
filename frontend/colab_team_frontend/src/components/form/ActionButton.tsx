import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  label: string | React.ReactNode;
}

export default function ActionButton({ label, type, ...otherProps }: Props) {
  return (
    <Button type={type || undefined} variant="contained" {...otherProps}>
      {label}
    </Button>
  );
}
