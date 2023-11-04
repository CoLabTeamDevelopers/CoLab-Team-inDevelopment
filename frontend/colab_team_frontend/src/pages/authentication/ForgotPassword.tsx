<<<<<<< HEAD
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
=======
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import EmailField from "@/components/form/EmailField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
import { forgotPasswordSchema } from "@/schemas/authSchemas";
import { forgotPasswordTypes } from "@/typings/authTypes";
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae

export default function ForgotPasswordPage() {
  const { handleSubmit, control, reset } = useForm<forgotPasswordTypes>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

<<<<<<< HEAD
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
=======
    <AuthFormLayout title="Forgot Password">
      <FormControl
        sx={{ gap: "10px" }}
        component="form"
        ref={formRef}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <Slide direction="right" in mountOnEnter unmountOnExit>
          <TextFieldContainer>
            <EmailField control={control} />
          </TextFieldContainer>
        </Slide>
        <ActionButton label="Send Link" type="submit" variant="contained" />
      </FormControl>
    </AuthFormLayout>
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
  );
}
