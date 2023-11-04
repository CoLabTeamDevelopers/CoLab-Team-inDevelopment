import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  label: string | React.ReactNode;
}

export default function ActionButton({
  label,
  type = "submit",
  ...otherProps
}: Props) {
  return (
    <Button
      type={type}
      variant="contained"
      sx={{
        background: "#b39ddb",
        width: "100%",
        textTransform: "none",
        "&:hover": { background: "#9575cd" },
      }}
      {...otherProps}
    >
      {label}
    </Button>
  );
}
