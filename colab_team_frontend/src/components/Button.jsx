import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ label, sx }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={sx}>
        {label}
      </Button>
    </Stack>
  );
}
