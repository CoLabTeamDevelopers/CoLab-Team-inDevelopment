<<<<<<< HEAD
import React, { useReducer, useRef } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/authSchemas";

import {
  Box,
  Button,
  Link,
  Slide,
  FormControl,
  Typography,
} from "@mui/material";
import BasicTextFields from "../../components/TextField";
import PasswordAdornment from "../../components/authentication/PasswordAdornment";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  ButtonsStyle,
  AuthTextFieldStyle,
  AuthRegisterStyle,
} from "../../styles/customStyles/CustomStyles";
import Waves from "../../assets/svg/Wave";
import CoLabLightLogo from "../../assets/images/CoLab - Logo Light.png";

import { loginTypes } from "../../typings/authTypes";

import {
  FORGOT_PASSWORD,
  REGISTER,
} from "../../api/authentication/authEndpoints";

import { authReducer } from "../../reducers/authFormReducer";
import { AuthInitialState } from "../../states/authInitialState";
=======
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, FormControl, Link, Slide, Typography } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import EmailField from "@/components/form/EmailField";
import PasswordField from "@/components/form/PasswordField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
import { loginSchema } from "@/schemas/authSchemas";
import { loginTypes } from "@/typings/authTypes";
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae

export default function LoginPage() {
  const { handleSubmit, control, reset } = useForm<loginTypes>({
    resolver: yupResolver(loginSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

<<<<<<< HEAD
  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

=======
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
  function onSubmit(data: Record<string, any>) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  return (
<<<<<<< HEAD
    <Box sx={AuthBoxStyle}>
      <Box sx={AuthLogoStyle}>
        <img src={CoLabLightLogo} alt="app_img" width={200} height={200} />
      </Box>
      <Typography
        fontSize={25}
        sx={{ textAlign: "center", color: "#673ab7" }}
        fontFamily="Roboto"
      >
        Login
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
          component="form"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Box sx={AuthRegisterStyle}>
              <BasicTextFields
                id={"email"}
                label={"Email"}
                name={"email"}
                type={"email"}
                control={control}
                inputProps={null}
                sx={AuthTextFieldStyle}
              />
              <BasicTextFields
                id={"password"}
                label={"Password"}
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
            </Box>
          </Slide>
          <Button type="submit" variant="contained" sx={ButtonsStyle}>
            Login
          </Button>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            fontSize={15}
            color="#757575"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link href={FORGOT_PASSWORD} sx={{ color: "#9575cd" }}>
              &nbsp;Forgot Password ?
            </Link>
          </Typography>
          <Typography
            fontSize={15}
            color="#757575"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Not a user ?
            <Link href={REGISTER} sx={{ color: "#9575cd" }}>
              &nbsp;Signup
            </Link>
          </Typography>
        </Box>
=======
    <AuthFormLayout title="Login">
      <FormControl
        component="form"
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Slide direction="right" in mountOnEnter unmountOnExit>
          <TextFieldContainer>
            <EmailField control={control} />
            <PasswordField control={control} />
          </TextFieldContainer>
        </Slide>
        <ActionButton type="submit" variant="contained" label="Login" />
      </FormControl>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          fontSize={15}
          color="#757575"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Link href="/forgot-password" sx={{ color: "#9575cd" }}>
            &nbsp;Forgot Password ?
          </Link>
        </Typography>
        <Typography
          fontSize={15}
          color="#757575"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Not a user ?
          <Link href="/register" sx={{ color: "#9575cd" }}>
            &nbsp;Signup
          </Link>
        </Typography>
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
      </Box>
    </AuthFormLayout>
  );
}
