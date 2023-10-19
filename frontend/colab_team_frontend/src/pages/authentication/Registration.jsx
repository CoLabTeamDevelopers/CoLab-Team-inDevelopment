import { useReducer } from "react";

import CoLab from "../../assets/images/CoLab - Logo Light.png";

import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/TextField";
import SimpleContainer from "../../components/authentication/Container";
import { Box, Link, Typography, Slide } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  AuthButtonsStyle,
  AuthRegisterStyle,
  AuthResgisterBackButtonStyle,
} from "../../components/authentication/customStyles/AuthStyles";
import {
  authFormReducer,
  continueSignupForm,
} from "../../reducers/authFormReducer";

export default function Registration() {
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
        Register
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
        {!state.signupForm ? (
          <Slide
            direction="right"
            in={!state.signupForm}
            mountOnEnter
            unmountOnExit
          >
            <Box sx={AuthRegisterStyle}>
              <BasicTextFields
                id={"username"}
                label={"Username"}
                sx={AuthTextFieldStyle}
              />
              <BasicTextFields
                id={"email"}
                label={"Email"}
                sx={AuthTextFieldStyle}
              />
            </Box>
          </Slide>
        ) : null}
        {state.signupForm ? (
          <Slide
            direction="right"
            in={state.signupForm}
            mountOnEnter
            unmountOnExit
          >
            <Box sx={AuthRegisterStyle}>
              <BasicTextFields
                id={"password"}
                label={"Password"}
                type={"password"}
                sx={AuthTextFieldStyle}
              />
              <BasicTextFields
                id={"confirmPassword"}
                label={"Confirm Password"}
                type={"password"}
                sx={AuthTextFieldStyle}
              />
            </Box>
          </Slide>
        ) : null}
        {!state.signupForm ? (
          <BasicButtons
            dispatch={dispatch}
            dispatchState={continueSignupForm.signupForm}
            dispatchType={"continueSignupForm"}
            label={"Continue"}
            sx={AuthButtonsStyle}
          />
        ) : (
          <BasicButtons
            dispatch={dispatch}
            dispatchState={continueSignupForm.submit}
            dispatchType={"submit"}
            label={"Submit"}
            sx={AuthButtonsStyle}
          />
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: state.signupForm ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {state.signupForm && (
            <BasicButtons
              sx={AuthResgisterBackButtonStyle}
              dispatch={dispatch}
              dispatchState={continueSignupForm.signupForm}
              dispatchType={"continueSignupForm"}
              label={<NavigateBeforeIcon sx={{ fontSize: "15px" }} />}
            ></BasicButtons>
          )}
          <Typography
            fontSize={15}
            color={"#757575"}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Already a user ?
            <Link href="#" sx={{ color: "#9575cd" }}>
              &nbsp;Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
