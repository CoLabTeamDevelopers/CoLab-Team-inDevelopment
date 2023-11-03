import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import EmailField from "@/components/form/EmailField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AuthFormLayout from "@/layouts/AuthForm";
import { forgotPasswordSchema } from "@/schemas/authSchemas";
import { forgotPasswordTypes } from "@/typings/authTypes";

export default function ForgotPasswordPage() {
  const { handleSubmit, control, reset } = useForm<forgotPasswordTypes>({
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
  );
}
