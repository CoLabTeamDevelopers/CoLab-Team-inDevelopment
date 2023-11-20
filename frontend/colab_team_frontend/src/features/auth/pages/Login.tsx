import { yupResolver } from "@hookform/resolvers/yup";
import { Box, FormControl, Slide, Typography } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/common/components/form/ActionButton";
import BasicTextField from "@/common/components/form/BaseTextField";
import PasswordField from "@/common/components/form/PasswordField";
import TextFieldContainer from "@/common/components/form/TextFieldContainer";
import AppLink from "@/common/components/Link";

import { useLoginMutation } from "../api";
import AuthFormLayout from "../layout";
import { LoginSchema, loginSchema } from "../schemas";

export default function LoginPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { handleSubmit, control, setValue } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });
  const [login] = useLoginMutation();

  async function onSubmit(data: LoginSchema) {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const ipAddress = await response.json();

      setValue("ipAddress", ipAddress.ip);

      await login(data);
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
