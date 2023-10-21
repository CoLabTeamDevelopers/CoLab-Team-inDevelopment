import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({
  name,
  id,
  type,
  label,
  sx,
  register,
  errors,
}) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        autoComplete="true"
        sx={sx || ""}
        id={id || ""}
        name={name || ""}
        label={label || ""}
        type={type || "text"}
        ref={register("name")}
        error={errors}
        helperText={"Hello"}
        variant="outlined"
      />
    </Box>
  );
}
