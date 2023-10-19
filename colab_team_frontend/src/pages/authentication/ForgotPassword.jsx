import CoLab from "../../assets/images/CoLab - Logo Light.png";

import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/TextField";
import SimpleContainer from "../../components/authentication/Container";
import { Box, Typography, Slide } from "@mui/material";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  AuthButtonsStyle,
} from "../../components/authentication/customStyles/AuthStyles";

export default function ForgotPassword() {
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
      <SimpleContainer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Box>
            <BasicTextFields
              id={"email"}
              label={"Email"}
              sx={AuthTextFieldStyle}
            />
          </Box>
        </Slide>
        <BasicButtons label={"Send Link"} sx={AuthButtonsStyle} />
      </Box>
    </Box>
  );
}
