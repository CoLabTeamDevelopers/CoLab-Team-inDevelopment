import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import ActionButton from "@/components/form/ActionButton";
import PasswordField from "@/components/form/PasswordField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
<<<<<<< HEAD
import {
  resetPasswordFormSchema,
  resetPasswordQueryParametersSchema,
} from "@/schemas/auth";
import { useResetPasswordMutation } from "@/store/api/auth";
import { ResetPasswordFormSchema } from "@/types/auth";
=======
import { resetPasswordSchema } from "@/schemas/auth";
import { ResetPasswordSchema } from "@/types/auth";
import AppAlerts from "@/components/AppAlerts";
>>>>>>> feature/ST#161123

export default function ResetPasswordPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { handleSubmit, control } = useForm<ResetPasswordFormSchema>({
    resolver: yupResolver(resetPasswordFormSchema),
  });
  const [resetPassword] = useResetPasswordMutation();
  const [searchParameters] = useSearchParams();

  async function onSubmit(data: ResetPasswordFormSchema) {
    try {
      const queryParameters = await resetPasswordQueryParametersSchema.validate(
        {
          uid: searchParameters.get("uid"),
          token: searchParameters.get("token"),
        }
      );

      await resetPassword({ ...queryParameters, ...data });
    } catch (error) {
      console.error(error);
    }
  }

  if (searchParameters.size <= 0) {
    // TODO: Display an unauthorized error here.
    return; // <-- placeholder for now.
  }

  return (
<<<<<<< HEAD
    <AuthFormLayout title="Reset Password">
      <FormControl
        sx={{ gap: "10px" }}
        component="form"
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Slide direction="right" in mountOnEnter unmountOnExit>
          <TextFieldContainer>
            <PasswordField
              control={control}
              name="oldPassword"
              label="Old Password"
            />
            <PasswordField
              control={control}
              name="newPassword"
              label="New Password"
            />
            <PasswordField
              control={control}
              name="confirmNewPassword"
              label="Confirm New Password"
            />
          </TextFieldContainer>
        </Slide>
        <ActionButton label="Reset Password" />
      </FormControl>
    </AuthFormLayout>
=======
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
>>>>>>> feature/ST#161123
  );
}
