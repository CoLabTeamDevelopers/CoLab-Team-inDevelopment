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
} from "@/components/authentication/customStyles/AuthStyles";
import EmailField from "@/components/form/EmailField";
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
    <Box sx={AuthBoxStyle}>
      <Box sx={AuthLogoStyle}>
        <img src={CoLab} alt="app_img" width={200} height={200} />
      </Box>
      <Typography
        fontSize={25}
        sx={{ textAlign: "center", color: "#673ab7" }}
        fontFamily="Roboto"
      >
        Forgot Password
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
            <Box>
              <EmailField control={control} />
            </Box>
          </Slide>
          <Button type="submit" variant="contained" sx={AuthButtonsStyle}>
            Send Link
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
