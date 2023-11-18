import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import EmailField from "@/components/form/EmailField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
import { forgotPasswordSchema } from "@/schemas/auth";
import { ForgotPasswordSchema } from "@/types/auth";
import AppAlerts from "@/components/AppAlerts";

export default function ForgotPasswordPage() {
  const { handleSubmit, control, reset } = useForm<ForgotPasswordSchema>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: Record<string, any>) {
    console.log(data);
    formRef.current?.reset();
    reset();
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
