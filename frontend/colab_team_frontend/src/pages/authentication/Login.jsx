<<<<<<< HEAD
import CoLab from "../../assets/images/CoLab - Logo Light.png";

import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/TextField";
import SimpleContainer from "../../components/authentication/Container";
import { Box, Link, Typography, Slide } from "@mui/material";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  AuthButtonsStyle,
  AuthRegisterStyle,
} from "../../components/authentication/customStyles/AuthStyles";

export default function Login() {
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
        Login
      </Typography>
=======
import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/TextField";
import SimpleContainer from "../../components/authentication/Container";
import CoLab from "../../assets/images/CoLab - Logo Light.png";
import { Box, Link, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        width: "20%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        minWidth: "20%",
        "@media (max-width: 400px)": {
          width: "90%",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={CoLab} alt="app_img" width={200} height={200} />
      </Box>
>>>>>>> bd9ee96446c63a3d4b21079ceac79d01f81062f1
      <SimpleContainer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
<<<<<<< HEAD
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Box sx={AuthRegisterStyle}>
            <BasicTextFields
              id={"email"}
              label={"Email"}
              sx={AuthTextFieldStyle}
            />
            <BasicTextFields
              id={"password"}
              label={"Password"}
              type={"password"}
              sx={AuthTextFieldStyle}
            />
          </Box>
        </Slide>
        <BasicButtons label={"Login"} sx={AuthButtonsStyle} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            fontSize={15}
            color={"#757575"}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link href="#" sx={{ color: "#9575cd" }}>
              &nbsp;Forgot Password ?
            </Link>
          </Typography>
          <Typography
            fontSize={15}
            color={"#757575"}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Not a user ?
            <Link href="#" sx={{ color: "#9575cd" }}>
              &nbsp;Signup
            </Link>
          </Typography>
        </Box>
=======
        <BasicTextFields
          id={"email"}
          label={"Email"}
          sx={{
            width: "100%",
            ".MuiFormLabel-root.Mui-focused": {
              color: "#9575cd",
            },
            ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#9575cd",
              },
          }}
        />
        <BasicTextFields
          id={"password"}
          label={"Password"}
          type={"password"}
          sx={{
            width: "100%",
            ".MuiFormLabel-root.Mui-focused": {
              color: "#9575cd",
            },
            ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#9575cd",
              },
          }}
        />
        <BasicButtons
          label={"Login"}
          sx={{
            background: "#b39ddb",
            width: "100%",
            textTransform: "none",
            "&:hover": { background: "#9575cd" },
          }}
        />
        <Typography
          fontSize={15}
          color={"#757575"}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Not a user ?
          <Link href="#" sx={{ color: "#9575cd" }}>
            &nbsp;Signup
          </Link>
        </Typography>
>>>>>>> bd9ee96446c63a3d4b21079ceac79d01f81062f1
      </Box>
    </Box>
  );
}
