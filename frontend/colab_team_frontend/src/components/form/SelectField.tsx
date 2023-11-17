import { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface SelectProps {
  label: string;
  items?: string[];
  control: any;
}

export default function SelectField({ label, items, control }: SelectProps) {
  const [item, setItem] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Controller
        name="projectLevel"
        control={control}
        defaultValue=""
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
      />
    </FormControl>
  );
}
