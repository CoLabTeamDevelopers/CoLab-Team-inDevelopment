import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";

import { BasicFieldProps } from "./BaseTextField";

interface SelectProps<T extends FieldValues> extends BasicFieldProps<T> {
  options?: string[];
  defaultValue?: PathValue<T, Path<T>>;
}

export default function SelectField<T extends FieldValues>({
  label,
  options,
  defaultValue,
  ...otherProps
}: SelectProps<T>) {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Controller
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select {...field} label={label} error={!!error}>
              {options?.map((item, key) => (
                <MenuItem key={key} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <Typography
              sx={{ marginLeft: "15px", marginTop: "3px" }}
              variant="caption"
              color="error"
            >
              {error ? error.message : undefined}
            </Typography>
          </>
        )}
        {...otherProps}
      />
    </FormControl>
  );
}
