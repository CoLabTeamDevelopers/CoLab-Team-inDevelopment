import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import {
  PasswordElement,
  PasswordRepeatElement,
  useForm,
} from "react-hook-form-mui";
import { useSearchParams } from "react-router-dom";

import ActionButton from "~form/ActionButton";

import { useResetPasswordMutation } from "../api";
import TextFieldContainer from "../components/TextFieldContainer";
import AuthFormLayout from "../layout";
import {
  ResetPasswordFormSchema,
  resetPasswordFormSchema,
  resetPasswordQueryParametersSchema,
} from "../schemas";

export function Component() {
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
            <PasswordElement
              control={control}
              name="oldPassword"
              label="Old Password"
            />
            <PasswordElement
              control={control}
              name="newPassword"
              label="New Password"
            />
            <PasswordRepeatElement
              control={control}
              name="confirmNewPassword"
              label="Confirm New Password"
              passwordFieldName="newPassword"
            />
          </TextFieldContainer>
        </Slide>
        <ActionButton label="Reset Password" />
      </FormControl>
    </AuthFormLayout>
  );
}
