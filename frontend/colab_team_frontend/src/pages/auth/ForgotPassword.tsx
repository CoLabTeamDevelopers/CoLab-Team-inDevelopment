import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import EmailField from "@/components/form/EmailField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
import { forgotPasswordSchema } from "@/schemas/auth";
import { useForgotPasswordMutation } from "@/store/api/auth";
import { ForgotPasswordSchema } from "@/types/auth";

export default function ForgotPasswordPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { handleSubmit, control } = useForm<ForgotPasswordSchema>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const [forgotPassword] = useForgotPasswordMutation();

  async function onSubmit(data: ForgotPasswordSchema) {
    try {
      await forgotPassword(data).unwrap();
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
            <EmailField control={control} />
          </TextFieldContainer>
        </Slide>
        <ActionButton label="Send Link" type="submit" variant="contained" />
      </FormControl>
    </AuthFormLayout>
  );
}
