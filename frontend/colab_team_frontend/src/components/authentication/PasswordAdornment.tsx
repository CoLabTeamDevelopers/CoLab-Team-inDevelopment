import React from "react";

import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PasswordAdornment({ dispatch, togglePasswordView }) {
  return (
    <InputAdornment position="end">
      <IconButton onClick={() => dispatch({ type: "TOGGLE_PASSWORD_VIEW" })}>
        {togglePasswordView ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
}
