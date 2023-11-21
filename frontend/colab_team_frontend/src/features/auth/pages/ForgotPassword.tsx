import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/common/form/ActionButton";
import EmailField from "@/common/form/EmailField";

import { useForgotPasswordMutation } from "../api";
import TextFieldContainer from "../components/TextFieldContainer";
import AuthFormLayout from "../layout";
import { ForgotPasswordSchema, forgotPasswordSchema } from "../schemas";

export function Component() {
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
    <AuthFormLayout title="Forgot Password">
      <FormControl
        sx={{ gap: "10px" }}
        component="form"
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Slide direction="right" in mountOnEnter unmountOnExit>
          <TextFieldContainer>
            <EmailField name="email" control={control} />
          </TextFieldContainer>
        </Slide>
        <ActionButton label="Send Link" type="submit" variant="contained" />
      </FormControl>
    </AuthFormLayout>
  );
}
