import { SxProps, TextField, TextFieldProps, Theme } from "@mui/material";
import { Controller, ControllerRenderProps } from "react-hook-form";

export interface Props {
  name: string;
  control: any;
  render?: ControllerRenderProps;
  fieldProps: TextFieldProps;
}

export default function BasicTextField({ fieldProps, ...props }: Props) {
  const styles: SxProps<Theme> = {
    width: "100%",
    ".MuiFormLabel-root.Mui-focused": {
      color: "#9575cd",
    },
    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9575cd",
    },
  };

  return (
    <Controller
      {...props}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...fieldProps}
          autoComplete="true"
          error={!!error}
          helperText={error ? error.message : undefined}
          variant="outlined"
          sx={styles}
        />
      )}
    />
  );
}
