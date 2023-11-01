import { useReducer, useRef } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas/authSchemas";

import {
  Box,
  Button,
  FormControl,
  Link,
  Slide,
  Typography,
} from "@mui/material";
import BasicTextFields from "../../components/TextField";
import PasswordAdornment from "../../components/authentication/PasswordAdornment";

import CoLabLightLogo from "../../assets/images/CoLab - Logo Light.png";
import Waves from "../../assets/svg/Wave";
import {
  AuthBoxStyle,
  AuthButtonsStyle,
  AuthLogoStyle,
  AuthRegisterStyle,
  AuthTextFieldStyle,
} from "../../components/authentication/customStyles/AuthStyles";

import { loginTypes } from "../../typings/authTypes";

import { authReducer } from "../../reducers/authFormReducer";
import { AuthInitialState } from "../../states/authInitialState";

export default function LoginPage() {
  const { handleSubmit, control, reset } = useForm<loginTypes>({
    resolver: yupResolver(loginSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

  function onSubmit(data: Record<string, any>) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  return (
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
          <Button type="submit" variant="contained" sx={AuthButtonsStyle}>
            Login
          </Button>
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
        </Box>
      </Box>
    </Box>
  );
}
