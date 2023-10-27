import CoLab from "../../assets/images/CoLab - Logo Light.png";

import BasicButtons from "../../components/Button";
import BasicTextFields from "../../components/TextField";
import SimpleContainer from "../../components/authentication/Container";
import { Box, Typography, Slide, FormControl } from "@mui/material";

import {
  AuthBoxStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  AuthButtonsStyle,
} from "../../components/authentication/customStyles/AuthStyles";

import validationSchema from "../../utils/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

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
        <FormControl
          sx={{ gap: "10px" }}
          component="form"
          onSubmit={handleSubmit(() => console.log("Click"))}
        >
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Box>
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
          <BasicButtons
            dispatchFlag={false}
            type={"submit"}
            dispatch={null}
            dispatchState={null}
            dispatchType={null}
            label={"Send Link"}
            sx={AuthButtonsStyle}
          />
        </FormControl>
      </Box>
    </Box>
  );
}
