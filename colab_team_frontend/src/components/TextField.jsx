import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ id, type, label, sx }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        autoComplete="true"
        sx={sx || ""}
        id={id || ""}
        label={label || ""}
        variant="outlined"
        type={type || "text"}
      />
    </Box>
  );
}
