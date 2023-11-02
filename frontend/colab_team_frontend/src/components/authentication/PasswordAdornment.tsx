import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";

export default function PasswordAdornment({
  dispatch,
  togglePasswordView,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any;
  togglePasswordView: boolean;
}) {
  return (
    <InputAdornment position="end">
      <IconButton onClick={() => dispatch({ type: "TOGGLE_PASSWORD_VIEW" })}>
        {togglePasswordView ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
}
