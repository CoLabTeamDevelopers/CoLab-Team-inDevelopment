import { TextField, TextFieldProps } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

export interface BasicFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  control?: Control<T>;
  label?: string;
}

export interface BasicTextFieldProps<T extends FieldValues>
  extends BasicFieldProps<T> {
  fieldProps?: TextFieldProps;
  type?: HTMLInputTypeAttribute;
}

export default function BasicTextField<T extends FieldValues>({
  fieldProps,
  label,
  type = "text",
  ...props
}: BasicTextFieldProps<T>) {
  return (
    <Controller
      {...props}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
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
