import { yupResolver } from "@hookform/resolvers/yup";
import { Box, FormControl, Slide, Typography } from "@mui/material";
import { useRef } from "react";
import { PasswordElement, useForm } from "react-hook-form-mui";
import { useNavigate, useParams } from "react-router-dom";

import AppLink from "~components/Link";
import ActionButton from "~form/ActionButton";
import BasicTextField from "~form/BaseTextField";

import { useLoginMutation } from "../api";
import TextFieldContainer from "../components/TextFieldContainer";
import AuthFormLayout from "../layout";
import { LoginSchema, loginSchema } from "../schemas";

export function Component() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { handleSubmit, control, setValue } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });
  const [login] = useLoginMutation();
  const { from } = useParams();

  async function onSubmit(data: LoginSchema) {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const ipAddress = await response.json();

      setValue("ipAddress", ipAddress.ip);

      await login(data);
      if (from) navigate(from);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthFormLayout title="Login">
      <FormControl
        sx={{ gap: "10px" }}
        component="form"
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Slide direction="right" in mountOnEnter unmountOnExit>
          <TextFieldContainer>
            <BasicTextField
              name="username"
              control={control}
              fieldProps={{ label: "Username" }}
            />
            <PasswordElement
              name="password"
              label="Password"
              control={control}
            />
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
          <AppLink href="/forgot-password" sx={{ color: "#9575cd" }}>
            &nbsp;Forgot Password ?
          </AppLink>
        </Typography>
        <Typography
          fontSize={15}
          color="#757575"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Not a user ?
          <AppLink href="/register" sx={{ color: "#9575cd" }}>
            &nbsp;Signup
          </AppLink>
        </Typography>
      </Box>
    </AuthFormLayout>
  );
}
