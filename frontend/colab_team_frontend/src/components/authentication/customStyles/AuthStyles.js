const AuthBoxStyle = {
  width: "20%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  minWidth: "20%",
  "@media screen and (max-width: 400px)": {
    width: "90%",
  },
  "@media screen and (min-width: 401px) and (max-width: 1000px)": {
    width: "40%",
  },
};

const AuthLogoStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const AuthTextFieldStyle = {
  width: "100%",
  ".MuiFormLabel-root.Mui-focused": {
    color: "#9575cd",
  },
  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#9575cd",
  },
};

const AuthButtonsStyle = {
  background: "#b39ddb",
  width: "100%",
  textTransform: "none",
  "&:hover": { background: "#9575cd" },
};

const AuthRegisterStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const AuthResgisterBackButtonStyle = {
  padding: "4px",
  margin: "4px",
  minWidth: "15px",
  background: AuthButtonsStyle.background,
  borderRadius: "50px",
  "&:hover": { background: "#9575cd" },
};

export {
  AuthBoxStyle,
  AuthButtonsStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  AuthRegisterStyle,
  AuthResgisterBackButtonStyle,
};
