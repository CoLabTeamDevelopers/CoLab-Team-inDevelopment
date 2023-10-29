import React, { useRef } from "react";

import { resetPasswordSchema } from "../../schemas/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  AuthButtonsStyle,
  AuthRegisterStyle,
} from "../../components/authentication/customStyles/AuthStyles";
import CoLab from "../../assets/images/CoLab - Logo Light.png";
import Waves from "../../assets/svg/Wave";

import { Box, Button, Slide, FormControl, Typography } from "@mui/material";
import BasicTextFields from "../../components/TextField";

import { resetPasswordTypes } from "../../typings/authTypes";

export default function ResetPasswordPage() {
  const { handleSubmit, control, reset } = useForm<resetPasswordTypes>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

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
                type="password"
                control={control}
                sx={AuthTextFieldStyle}
              />
              <BasicTextFields
                id={"confirmNewPassword"}
                label={"Confirm New Password"}
                name={"confirmPassword"}
                type="password"
                control={control}
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
