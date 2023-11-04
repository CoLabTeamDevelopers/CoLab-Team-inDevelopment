<<<<<<< HEAD
import React, { useReducer, useRef } from "react";

import { resetPasswordSchema } from "../../schemas/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  ButtonsStyle,
  AuthRegisterStyle,
} from "../../styles/customStyles/CustomStyles";
import BasicTextFields from "../../components/TextField";
import PasswordAdornment from "../../components/authentication/PasswordAdornment";

import CoLab from "../../assets/images/CoLab - Logo Light.png";
import Waves from "../../assets/svg/Wave";

import { Box, Button, Slide, FormControl, Typography } from "@mui/material";

import { resetPasswordTypes } from "../../typings/authTypes";

import { authReducer } from "../../reducers/authFormReducer";
import { AuthInitialState } from "../../states/authInitialState";
=======
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import PasswordField from "@/components/form/PasswordField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
import { resetPasswordSchema } from "@/schemas/authSchemas";
import { resetPasswordTypes } from "@/typings/authTypes";
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae

export default function ResetPasswordPage() {
  const { handleSubmit, control, reset } = useForm<resetPasswordTypes>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

<<<<<<< HEAD
  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

=======
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
  function onSubmit(data: Record<string, any>) {
    console.log(data);
    reset();
  }

  return (
<<<<<<< HEAD
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
          <Button type="submit" variant="contained" sx={ButtonsStyle}>
            Reset Password
          </Button>
        </FormControl>
      </Box>
    </Box>
=======
    <AuthFormLayout title="Reset Password">
      <FormControl
        sx={{ gap: "10px" }}
        component="form"
        ref={formRef}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <Slide direction="right" in mountOnEnter unmountOnExit>
          <TextFieldContainer>
            <PasswordField control={control} label="New Password" />
            <PasswordField
              control={control}
              name="confirmPassword"
              label="Confirm New Password"
            />
          </TextFieldContainer>
        </Slide>
        <ActionButton label="Reset Password" />
      </FormControl>
    </AuthFormLayout>
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
  );
}
