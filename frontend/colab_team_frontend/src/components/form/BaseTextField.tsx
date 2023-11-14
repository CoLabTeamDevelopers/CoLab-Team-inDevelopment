import { TextField, TextFieldProps } from "@mui/material";
import { Controller, ControllerRenderProps, Control } from "react-hook-form";

export interface Props {
  name: string;
  control: Control;
  render?: ControllerRenderProps;
  fieldProps: TextFieldProps;
}

export default function BasicTextField({ fieldProps, ...props }: Props) {
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
        />
      )}
    />
  );
}
