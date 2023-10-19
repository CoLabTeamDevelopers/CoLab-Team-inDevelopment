import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
        {label}
      </Button>
    </Stack>
  );
}
