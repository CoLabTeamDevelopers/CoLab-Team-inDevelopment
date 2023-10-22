import { useReducer } from "react";

import { Controller } from "react-hook-form";

import { TextField } from "@mui/material";

import {
  authFormFields,
  authInputFormReducer,
} from "../reducers/authInputFormReducers";

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
  const [state, dispatch] = useReducer(authInputFormReducer, authFormFields);

  const handleInputChange = (fieldValue, fieldType) => {
    dispatch({
      type: fieldType,
      value: fieldValue,
    });
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          autoComplete="true"
          sx={sx || ""}
          id={id || ""}
          name={name || ""}
          label={label || ""}
          type={type || "text"}
          value={value || ""}
          onChange={onChange}
          // {...register}
          error={!!error}
          helperText={error ? error.message : null}
          variant="outlined"
        />
      )}
    />
  );
}
