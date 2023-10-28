import { useReducer } from "react";

import CoLab from "../../assets/images/CoLab - Logo Light.png";

import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/TextField";
import SimpleContainer from "../../components/authentication/Container";
import { Box, Link, Typography, Slide, FormControl } from "@mui/material";

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

import validationSchema from "../../utils/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [state, dispatch] = useReducer(authFormReducer, continueSignupForm);

  function onSubmit(e) {
    e.preventDefault();
    console.log("Hello");
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
        <FormControl
          sx={{ gap: "10px" }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Box sx={AuthRegisterStyle}>
              <BasicTextFields
                id={"email"}
                label={"Email"}
                name={"email"}
                type={"email"}
                control={control}
                errors={errors.email}
                register={register}
                sx={AuthTextFieldStyle}
              />
              <BasicTextFields
                id={"password"}
                label={"Password"}
                name={"password"}
                type={"password"}
                control={control}
                errors={errors.password}
                register={register}
                sx={AuthTextFieldStyle}
              />
            </Box>
          </Slide>
          <BasicButtons
            dispatchFlag={false}
            type={"submit"}
            dispatch={null}
            dispatchState={null}
            dispatchType={null}
            label={"Login"}
            sx={AuthButtonsStyle}
          />
        </FormControl>

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
