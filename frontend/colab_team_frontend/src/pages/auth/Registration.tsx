import { yupResolver } from "@hookform/resolvers/yup";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Box, Button, FormControl, Slide, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/form/ActionButton";
import BasicTextField from "@/components/form/BaseTextField";
import EmailField from "@/components/form/EmailField";
import PasswordField from "@/components/form/PasswordField";
import TextFieldContainer from "@/components/form/TextFieldContainer";
import AppLink from "@/components/Link";
import AuthFormLayout from "@/layouts/AuthForm";
import { registrationSchema } from "@/schemas/auth";
import { useRegisterMutation } from "@/store/api/auth";
import { RegistrationSchema } from "@/types/auth";
import AppAlerts from "@/components/AppAlerts";

export default function RegistrationPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [continueForm, setContinueForm] = useState(false);
  const { handleSubmit, control, watch, setError } =
    useForm<RegistrationSchema>({
      resolver: yupResolver(registrationSchema),
    });
  const watchField = watch(["username", "email"]);
  const [register] = useRegisterMutation();

  async function onSubmit(data: RegistrationSchema) {
    try {
      await register(data).unwrap();
      alert(
        "An email has been sent with a verification link. Please check your inbox & activate your account."
      );
    } catch (error) {
      console.error(error);
    }
  }

  function handleContinue() {
    if (watchField[0] && watchField[1]) {
      setContinueForm(true);
    } else {
      if (!watchField[0]) {
        setError("username", {
          type: "required",
          message: "Username is required",
        });
      }
      if (!watchField[1]) {
        setError("email", {
          type: "required",
          message: "Email is required",
        });
      }
    }
  }

  return (
    <React.Fragment>
      {/* Only appear when some error is occured */}
      <AppAlerts severity="error" title="Write your error message here."/>
      <AuthFormLayout title="Register">
        <FormControl
          sx={{ gap: "10px" }}
          component="form"
          ref={formRef}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          {continueForm ? undefined : (
            <Slide direction="right" in mountOnEnter unmountOnExit>
              <TextFieldContainer>
                <BasicTextField
                  name="username"
                  control={control}
                  fieldProps={{ label: "Username" }}
                />
                <EmailField control={control} />
              </TextFieldContainer>
            </Slide>
          )}
          {continueForm ? (
            <Slide direction="right" in mountOnEnter unmountOnExit>
              <TextFieldContainer>
                <PasswordField control={control} />
                <PasswordField
                  control={control}
                  label="Confirm Password"
                  name="confirmPassword"
                />
              </TextFieldContainer>
            </Slide>
          ) : undefined}
          <ActionButton
            type={continueForm ? "submit" : "button"}
            onClick={continueForm ? undefined : handleContinue}
            label={continueForm ? "Submit" : "Continue"}
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: continueForm ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {continueForm ? (
            <Button
              variant="contained"
              sx={{
                padding: "2px",
                margin: "2px",
                minWidth: "15px",
                background: "#b39ddb",
                borderRadius: "50px",
                "&:hover": { background: "#9575cd" },
              }}
              onClick={() => setContinueForm(false)}
            >
              <NavigateBeforeIcon sx={{ fontSize: "14px" }} />
            </Button>
          ) : undefined}
          <Typography
            fontSize={15}
            color="#757575"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Already a user ?&nbsp;
            <AppLink href="/login" sx={{ color: "#9575cd" }}>
              Login
            </AppLink>
          </Typography>
        </Box>
      </AuthFormLayout>
    </React.Fragment>
  );
}
