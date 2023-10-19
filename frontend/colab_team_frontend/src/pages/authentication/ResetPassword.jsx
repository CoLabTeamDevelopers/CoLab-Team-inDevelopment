import { useReducer } from "react";

import CoLab from "../../assets/images/CoLab - Logo Light.png";

import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/TextField";
import SimpleContainer from "../../components/authentication/Container";
import { Box, Typography, Slide } from "@mui/material";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  AuthButtonsStyle,
  AuthRegisterStyle,
} from "../../components/authentication/customStyles/AuthStyles";
import {
  authFormReducer,
  continueSignupForm,
} from "../../reducers/authFormReducer";

export default function ResetPassword() {
  const [state, dispatch] = useReducer(authFormReducer, continueSignupForm);

  return (
    <Box sx={AuthBoxStyle}>
      <Box sx={AuthLogoStyle}>
        <img src={CoLab} alt="app_img" width={200} height={200} />
      </Box>
      <Typography
        fontSize={25}
        sx={{ textAlign: "center", color: "#673ab7" }}
        fontFamily="Roboto"
      >
        Reset Password
      </Typography>
      <SimpleContainer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Box sx={AuthRegisterStyle}>
            <BasicTextFields
              type="password"
              id={"newPassword"}
              label={"New Password"}
              sx={AuthTextFieldStyle}
            />
            <BasicTextFields
              type="password"
              id={"confirmNewPassword"}
              label={"Confirm New Password"}
              sx={AuthTextFieldStyle}
            />
          </Box>
        </Slide>
        <BasicButtons
          dispatch={dispatch}
          dispatchState={continueSignupForm.signupForm}
          dispatchType={"continueSignupForm"}
          label={"Reset Password"}
          sx={AuthButtonsStyle}
        />
      </Box>
    </Box>
  );
}
