import { Button, ButtonProps, Stack } from "@mui/material";

export interface BasicButtonType extends ButtonProps {
  label: string | React.ReactNode;
  dispatch?: any;
  dispatchType?: any;
  dispatchState?: any;
  dispatchFlag?: boolean;
}

export default function BasicButtons({
  label,
  sx,
  dispatch,
  dispatchType,
  dispatchState,
  dispatchFlag,
  ...otherProps
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
        variant="contained"
        sx={sx}
        {...otherProps}
      >
        {label}
      </Button>
    </Stack>
  );
}
