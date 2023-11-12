import { ReactElement } from "react";
import { Chip } from "@mui/material";

type ChipProps = {
  size: "small" | "medium";
  label: string;
  avatar?: ReactElement | undefined;
  sx?: any;
  onDelete?: () => void;
};

export default function DataChip({
  size,
  label,
  avatar,
  sx,
  ...otherProps
}: ChipProps) {
  return (
    <Chip
      {...otherProps}
      size={size}
      label={label}
      variant="outlined"
      avatar={avatar}
      sx={sx}
    />
  );
}
