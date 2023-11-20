import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

import BasicTextField, { BasicTextFieldProps } from "./BaseTextField";

interface Props<T extends FieldValues> extends BasicTextFieldProps<T> {}

export default function PasswordField<T extends FieldValues>({
  label = "Password",
  ...otherProps
}: Props<T>) {
  const [show, setShow] = useState(false);

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton onClick={() => setShow((show) => !show)}>
        {show ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <BasicTextField
      label={label}
      type={show ? "text" : "password"}
      fieldProps={{
        InputProps: { endAdornment },
      }}
      {...otherProps}
    />
  );
}
