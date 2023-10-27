import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({
  label,
  sx,
  type,
  dispatch,
  dispatchType,
  dispatchState,
  dispatchFlag,
}) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => {
          if (dispatchFlag) {
            dispatch({
              type: dispatchType,
              state: dispatchState,
            });
          }
        }}
        type={type || ""}
        variant="contained"
        sx={sx}
      >
        {label}
      </Button>
    </Stack>
  );
}
