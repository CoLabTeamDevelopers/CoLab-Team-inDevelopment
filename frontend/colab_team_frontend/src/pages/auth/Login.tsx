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

export default function LoginPage() {
  const { handleSubmit, control, reset } = useForm<loginTypes>({
    resolver: yupResolver(loginSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: Record<string, any>) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  return (
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
      </Box>
    </AuthFormLayout>
  );
}
