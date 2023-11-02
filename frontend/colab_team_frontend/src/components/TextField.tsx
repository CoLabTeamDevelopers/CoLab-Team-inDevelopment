import { TextField, TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";

export type BasicTextFieldPropertyTypes = TextFieldProps & {
  name: string;
  control: any;
  endAdornment?: React.ReactNode;
};

export default function BasicTextFields({
  name,
  type = "text",
  control,
  endAdornment,
  ...otherProps
}: BasicTextFieldPropertyTypes) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <TextField
          autoComplete="true"
          type={type}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : undefined}
          variant="outlined"
          InputProps={{ endAdornment }}
          {...otherProps}
        />
      )}
    />
  );
}
