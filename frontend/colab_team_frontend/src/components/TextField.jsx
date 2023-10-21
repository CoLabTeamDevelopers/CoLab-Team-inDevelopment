import { useReducer } from "react";

import { TextField, Box } from "@mui/material";

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
    <Box component="form" noValidate autoComplete="off">
      <TextField
        required
        autoComplete="true"
        sx={sx || ""}
        id={id || ""}
        name={name || ""}
        label={label || ""}
        type={type || "text"}
        value={state[name]}
        onChange={(e) => {
          handleInputChange(e.target.value, name);
        }}
        // {...register()}
        // error={!!errors.name}
        // helperText={errors.name?.message}
        variant="outlined"
      />
    </Box>
  );
}
