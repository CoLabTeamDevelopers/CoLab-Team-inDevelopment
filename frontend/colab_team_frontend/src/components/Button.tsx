import { Button, Stack } from "@mui/material";

import { BasicButtonType } from "@/typings/authTypes";

export default function BasicButtons({
  id,
  label,
  sx,
  type,
  dispatch,
  dispatchType,
  dispatchState,
  dispatchFlag,
}: BasicButtonType) {
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
