import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import PasswordField from "@/components/form/PasswordField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
import { resetPasswordSchema } from "@/schemas/auth";
import { ResetPasswordSchema } from "@/types/auth";
import AppAlerts from "@/components/AppAlerts";

export default function ResetPasswordPage() {
  const { handleSubmit, control, reset } = useForm<ResetPasswordSchema>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: Record<string, any>) {
    console.log(data);
    reset();
  }

  return (
    <React.Fragment>
      {/* Only appear when some error is occured */}
      <AppAlerts severity="error" title="Write your error message here." />
      <AuthFormLayout title="Reset Password">
        <FormControl
          sx={{ gap: "10px" }}
          component="form"
          ref={formRef}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <Slide direction="right" in mountOnEnter unmountOnExit>
            <TextFieldContainer>
              <PasswordField control={control} label="New Password" />
              <PasswordField
                control={control}
                name="confirmPassword"
                label="Confirm New Password"
              />
            </TextFieldContainer>
          </Slide>
          <ActionButton label="Reset Password" />
        </FormControl>
      </AuthFormLayout>
    </React.Fragment>
  );
}
