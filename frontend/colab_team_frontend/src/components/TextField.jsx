import { Controller } from "react-hook-form";

import { TextField } from "@mui/material";

export default function BasicTextFields({
  name,
  id,
  type,
  label,
  sx,
  control,
  register,
  errors,
  fieldType,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <TextField
          autoComplete="true"
          sx={sx || ""}
          id={id || ""}
          name={name || ""}
          label={label || ""}
          type={type || "text"}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          variant="outlined"
        />
      )}
    />
  );
}
