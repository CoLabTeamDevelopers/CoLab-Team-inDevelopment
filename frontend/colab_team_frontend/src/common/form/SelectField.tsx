import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";

import { BasicFieldProps } from "./BaseTextField";

interface SelectProps<T extends FieldValues> extends BasicFieldProps<T> {
  items?: string[];
}

export default function SelectField<T extends FieldValues>({
  label,
  items,
  ...otherProps
}: SelectProps<T>) {
  const [item, setItem] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              {...field}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={label}
              value={item}
              name="projectLevel"
              error={!!error}
              onChange={handleChange}
            >
              {items?.map((item, key) => (
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
