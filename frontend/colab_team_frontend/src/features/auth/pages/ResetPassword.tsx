import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import ActionButton from "@/common/form/ActionButton";
import PasswordField from "@/common/form/PasswordField";
import TextFieldContainer from "@/common/form/TextFieldContainer";

import { useResetPasswordMutation } from "../api";
import AuthFormLayout from "../layout";
import {
  ResetPasswordFormSchema,
  resetPasswordFormSchema,
  resetPasswordQueryParametersSchema,
} from "../schemas";

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
  );
}
