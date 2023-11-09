import { ReactElement } from "react";
import { Chip } from "@mui/material";

type ChipProps = {
  size: "small" | "medium";
  label: string;
  avatar?: ReactElement | undefined;
};

export default function DataChip({ size, label, avatar }: ChipProps) {
  return <Chip size={size} label={label} variant="outlined" avatar={avatar} />;
}
