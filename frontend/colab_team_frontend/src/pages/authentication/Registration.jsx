import { useReducer, useState } from "react";

import CoLab from "../../assets/images/CoLab - Logo Light.png";

import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/TextField";
import SimpleContainer from "../../components/authentication/Container";
import { Box, Link, Typography, Slide, FormControl } from "@mui/material";
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

import validationSchema from "../../utils/FormValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Registration() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [state, dispatch] = useReducer(authFormReducer, continueSignupForm);

  const [next, setNext] = useState(false);

  function onSubmit(data) {
    console.log(data);
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
        <FormControl
          sx={{ gap: "10px" }}
          component="form"
          onSubmit={handleSubmit((data) => onSubmit(data))}
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
                  name={"username"}
                  type={"text"}
                  control={control}
                  register={register}
                  errors={errors.username}
                  sx={AuthTextFieldStyle}
                />
                <BasicTextFields
                  id={"email"}
                  label={"Email"}
                  name={"email"}
                  type={"text"}
                  control={control}
                  register={register}
                  errors={errors.email}
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
                  name={"password"}
                  type={"password"}
                  control={control}
                  register={register}
                  errors={errors.password}
                  sx={AuthTextFieldStyle}
                />
                <BasicTextFields
                  id={"confirmPassword"}
                  label={"Confirm Password"}
                  name={"confirmPassword"}
                  type={"password"}
                  control={control}
                  register={register}
                  errors={errors.confirmPassword}
                  sx={AuthTextFieldStyle}
                />
              </Box>
            </Slide>
          ) : null}
          {!state.signupForm ? (
            <BasicButtons
              dispatchFlag={
                errors.username?.message === undefined
                  ? errors.username?.message.length > 0
                    ? true
                    : false
                  : false
              }
              dispatch={dispatch}
              dispatchState={continueSignupForm.signupForm}
              dispatchType={"continueSignupForm"}
              label={"Continue"}
              sx={AuthButtonsStyle}
            />
          ) : (
            <BasicButtons
              dispatchFlag={false}
              type={"submit"}
              dispatch={null}
              dispatchState={null}
              dispatchType={null}
              label={"Submit"}
              sx={AuthButtonsStyle}
            />
          )}
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: state.signupForm ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {state.signupForm && (
            <BasicButtons
              dispatchFlag={true}
              dispatch={dispatch}
              dispatchState={continueSignupForm.signupForm}
              dispatchType={"continueSignupForm"}
              sx={AuthResgisterBackButtonStyle}
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
