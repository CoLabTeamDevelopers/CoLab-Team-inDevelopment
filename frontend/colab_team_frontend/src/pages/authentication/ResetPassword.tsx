import { useReducer, useRef } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../../schemas/authSchemas";

import BasicTextFields from "../../components/TextField";
import PasswordAdornment from "../../components/authentication/PasswordAdornment";
import {
  AuthBoxStyle,
  AuthButtonsStyle,
  AuthLogoStyle,
  AuthRegisterStyle,
  AuthTextFieldStyle,
} from "../../components/authentication/customStyles/AuthStyles";

import CoLab from "../../assets/images/CoLab - Logo Light.png";
import Waves from "../../assets/svg/Wave";

import { Box, Button, FormControl, Slide, Typography } from "@mui/material";

import { resetPasswordTypes } from "../../typings/authTypes";

import { authReducer } from "../../reducers/authFormReducer";
import { AuthInitialState } from "../../states/authInitialState";

export default function ResetPasswordPage() {
  const { handleSubmit, control, reset } = useForm<resetPasswordTypes>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

  function onSubmit(data: Record<string, any>) {
    console.log(data);
    reset();
  }

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
      <Waves />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <FormControl
          sx={{ gap: "10px" }}
          id="registrationForm"
          component="form"
          ref={formRef}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Box sx={AuthRegisterStyle}>
              <BasicTextFields
                id={"newPassword"}
                label={"New Password"}
                name={"password"}
                type={state.togglePasswordView ? "text" : "password"}
                control={control}
                inputProps={
                  <PasswordAdornment
                    dispatch={dispatch}
                    togglePasswordView={state.togglePasswordView}
                  />
                }
                sx={AuthTextFieldStyle}
              />
              <BasicTextFields
                id={"confirmNewPassword"}
                label={"Confirm New Password"}
                name={"confirmPassword"}
                type={state.togglePasswordView ? "text" : "password"}
                control={control}
                inputProps={null}
                sx={AuthTextFieldStyle}
              />
            </Box>
          </Slide>
          <Button type="submit" variant="contained" sx={AuthButtonsStyle}>
            Reset Password
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
