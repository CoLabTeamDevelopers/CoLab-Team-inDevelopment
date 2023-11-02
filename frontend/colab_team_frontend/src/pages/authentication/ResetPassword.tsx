import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, FormControl, Slide, Typography } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import CoLab from "@/assets/images/CoLab - Logo Light.png";
import Waves from "@/assets/svg/Wave";
import {
  AuthBoxStyle,
  AuthButtonsStyle,
  AuthLogoStyle,
  AuthRegisterStyle,
} from "@/components/authentication/customStyles/AuthStyles";
import PasswordField from "@/components/form/PasswordField";
import { resetPasswordSchema } from "@/schemas/authSchemas";
import { resetPasswordTypes } from "@/typings/authTypes";

export default function ResetPasswordPage() {
  const { handleSubmit, control, reset } = useForm<resetPasswordTypes>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: Record<string, any>) {
    console.log(data);
    reset();
  }

  return (
    <Box sx={AuthBoxStyle}>
      <Box sx={AuthLogoStyle}>
        <img src={CoLab} alt="app_img" width={200} height={200} />
      </Box>
      <Typography
        fontSize={25}
        sx={{ textAlign: "center", color: "#673ab7" }}
        fontFamily="Roboto"
      >
        Reset Password
      </Typography>
      <Waves />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <FormControl
          sx={{ gap: "10px" }}
          id="registrationForm"
          component="form"
          ref={formRef}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Box sx={AuthRegisterStyle}>
              <PasswordField control={control} label="New Password" />
              <PasswordField
                control={control}
                name="confirmPassword"
                label="Confirm New Password"
              />
            </Box>
          </Slide>
          <Button type="submit" variant="contained" sx={AuthButtonsStyle}>
            Reset Password
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
