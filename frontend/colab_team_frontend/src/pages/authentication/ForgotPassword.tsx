import React, { useRef } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "../../schemas/authSchemas";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  ButtonsStyle,
} from "../../styles/customStyles/CustomStyles";
import CoLab from "../../assets/images/CoLab - Logo Light.png";
import Waves from "../../assets/svg/Wave";

import BasicTextFields from "../../components/TextField";
import { Box, Typography, Slide, FormControl, Button } from "@mui/material";

import { forgotPasswordTypes } from "../../typings/authTypes";

export default function ForgotPasswordPage() {
  const { handleSubmit, control, reset } = useForm<forgotPasswordTypes>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  function onSubmit(data: Record<string, any>) {
    console.log(data);
    formRef.current?.reset();
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
        Forgot Password
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
            <Box>
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
          <Button type="submit" variant="contained" sx={ButtonsStyle}>
            Send Link
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
