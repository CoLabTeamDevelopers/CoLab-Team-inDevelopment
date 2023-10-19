import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

<<<<<<< HEAD
export default function BasicButtons({
  label,
  sx,
  dispatch,
  dispatchType,
  dispatchState,
}) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => {
          dispatch({
            type: dispatchType,
            state: dispatchState,
          });
        }}
        variant="contained"
        sx={sx}
      >
=======
export default function BasicButtons({ label, sx }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={sx}>
>>>>>>> bd9ee96446c63a3d4b21079ceac79d01f81062f1
        {label}
      </Button>
    </Stack>
  );
}
