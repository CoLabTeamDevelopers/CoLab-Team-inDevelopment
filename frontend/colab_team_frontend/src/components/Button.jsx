import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({
  label,
  sx,
  dispatch,
  dispatchType,
  dispatchState,
  handleSubmit,
}) {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => {
          handleSubmit(onSubmit);
          // dispatch({
          //   type: dispatchType,
          //   state: dispatchState,
          // });
        }}
        variant="contained"
        sx={sx}
      >
        {label}
      </Button>
    </Stack>
  );
}
