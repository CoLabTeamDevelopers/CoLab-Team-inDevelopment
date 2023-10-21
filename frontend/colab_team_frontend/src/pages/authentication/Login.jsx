import { useReducer } from "react";

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

import {
  authFormReducer,
  continueSignupForm,
} from "../../reducers/authFormReducer";

import { useValidation } from "../../utils/FormValidation";

export default function Login() {
  const { register, handleSubmit, errors } = useValidation();

  const [state, dispatch] = useReducer(authFormReducer, continueSignupForm);

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
          <Box sx={AuthRegisterStyle}>
            <BasicTextFields
              id={"email"}
              label={"Email"}
              name={"email"}
              type={"email"}
              register={register}
              errors={errors}
              sx={AuthTextFieldStyle}
            />
            <BasicTextFields
              id={"password"}
              label={"Password"}
              name={"password"}
              type={"password"}
              register={register}
              errors={errors}
              sx={AuthTextFieldStyle}
            />
          </Box>
        </Slide>
        <BasicButtons
          handleSubmit={handleSubmit}
          dispatch={dispatch}
          dispatchState={continueSignupForm.login}
          dispatchType={"login"}
          label={"Login"}
          sx={AuthButtonsStyle}
        />

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
      </Box>
    </Box>
  );
}
