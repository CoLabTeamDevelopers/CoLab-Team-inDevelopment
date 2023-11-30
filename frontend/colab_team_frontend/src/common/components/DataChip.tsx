import { Chip, type ChipOwnProps } from "@mui/material";

export default function DataChip(props: ChipOwnProps) {
  return <Chip variant="outlined" {...props} />;
}
