import { Stack, Button } from "@mui/material";

export default function BasicButtons({
  id,
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
        id={id || ""}
        type={type || ""}
        variant="contained"
        sx={sx}
      >
        {label}
      </Button>
    </Stack>
  );
}
