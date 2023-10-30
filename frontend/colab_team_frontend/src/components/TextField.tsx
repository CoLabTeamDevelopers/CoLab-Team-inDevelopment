import React from "react";

import { Controller } from "react-hook-form";

import { TextField, InputAdornment, IconButton } from "@mui/material";

import { BasicTextFieldPropTypes } from "../typings/authTypes";

export default function BasicTextFields({
  id,
  label,
  name,
  type,
  control,
  sx,
  inputProps,
}: BasicTextFieldPropTypes) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <TextField
          InputProps={{
            endAdornment: inputProps || "",
          }}
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
