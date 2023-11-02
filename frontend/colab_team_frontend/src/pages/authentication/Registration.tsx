import React, { useReducer, useRef, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../schemas/authSchemas";
import { useForm } from "react-hook-form";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
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

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  ButtonsStyle,
  AuthRegisterStyle,
  AuthResgisterBackButtonStyle,
} from "../../styles/customStyles/CustomStyles";
import CoLabLightLogo from "../../assets/images/CoLab - Logo Light.png";
import Waves from "../../assets/svg/Wave";

import { registrationTypes } from "../../typings/authTypes";
import { LOGIN } from "../../api/authentication/authEndpoints";

import { authReducer } from "../../reducers/authFormReducer";
import { AuthInitialState } from "../../states/authInitialState";

export default function RegistrationPage() {
  const [continueForm, setContinueForm] = useState(false);

  const { handleSubmit, control, watch, setError, reset } =
    useForm<registrationTypes>({
      resolver: yupResolver(registrationSchema),
    });

  const watchField = watch(["username", "email"]);

  const formRef = useRef<HTMLFormElement | null>(null);

  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

  const onSubmit = (data: Record<string, any>) => {
    console.log(data);
    formRef.current?.reset();
    reset();
  };

  const handleContinue = () => {
    if (watchField[0] && watchField[1]) {
      setContinueForm(true);
    } else {
      if (!watchField[0]) {
        setError("username", {
          type: "required",
          message: "Username is required",
        });
      }
      if (!watchField[1]) {
        setError("email", {
          type: "required",
          message: "Email is required",
        });
      }
    }
  };

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
        Register
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
          {!continueForm && (
            <Slide
              direction="right"
              in={!continueForm}
              mountOnEnter
              unmountOnExit
            >
              <Box sx={AuthRegisterStyle}>
                <BasicTextFields
                  id={"username"}
                  label={"Username"}
                  name={"username"}
                  type={"text"}
                  control={control}
                  inputProps={null}
                  sx={AuthTextFieldStyle}
                />
                <BasicTextFields
                  id={"email"}
                  label={"Email"}
                  name={"email"}
                  type={"text"}
                  control={control}
                  inputProps={null}
                  sx={AuthTextFieldStyle}
                />
              </Box>
            </Slide>
          )}
          {continueForm ? (
            <Slide
              direction="right"
              in={continueForm}
              mountOnEnter
              unmountOnExit
            >
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
                  id={"confirmPassword"}
                  label={"Confirm Password"}
                  name={"confirmPassword"}
                  type={state.togglePasswordView ? "text" : "password"}
                  control={control}
                  inputProps={null}
                  sx={AuthTextFieldStyle}
                />
              </Box>
            </Slide>
          ) : undefined}
          {continueForm ? (
            <Button type="submit" variant="contained" sx={ButtonsStyle}>
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={ButtonsStyle}
              onClick={() => handleContinue()}
            >
              Continue
            </Button>
          )}
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: continueForm ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {continueForm && (
            <Button
              variant="contained"
              sx={AuthResgisterBackButtonStyle}
              onClick={() => setContinueForm(false)}
            >
              <NavigateBeforeIcon sx={{ fontSize: "14px" }} />
            </Button>
          )}
          <Typography
            fontSize={15}
            color="#757575"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Already a user ?&nbsp;
            <Link href={LOGIN} sx={{ color: "#9575cd" }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
