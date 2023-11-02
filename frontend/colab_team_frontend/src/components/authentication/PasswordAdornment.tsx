import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";

interface PasswordAdornmentProps {
  dispatch: any;
  togglePasswordView: boolean;
}

export default function PasswordAdornment({
  dispatch,
  togglePasswordView,
}: PasswordAdornmentProps) {
  return (
    <InputAdornment position="end">
      <IconButton onClick={() => dispatch({ type: "TOGGLE_PASSWORD_VIEW" })}>
        {togglePasswordView ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
}
