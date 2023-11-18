import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import EmailField from "@/components/form/EmailField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
import { forgotPasswordSchema } from "@/schemas/auth";
import { useForgotPasswordMutation } from "@/store/api/auth";
import { ForgotPasswordSchema } from "@/types/auth";
import AppAlerts from "@/components/AppAlerts";

export default function ForgotPasswordPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { handleSubmit, control } = useForm<ForgotPasswordSchema>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const [forgotPassword] = useForgotPasswordMutation();

  async function onSubmit(data: ForgotPasswordSchema) {
    try {
      await forgotPassword(data);
      alert("An email has been sent to your inbox.");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      {/* Only appear when some error is occured */}
      <AppAlerts severity="error" title="Write your error message here." />
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
    </React.Fragment>
  );
}
