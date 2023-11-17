const RequestCardStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "20px",
  width: "60%",
  margin: "auto",
  padding: "10px",
  marginTop: "10px",
  "@media(max-width:640px)": {
    width: "90%",
    display: "grid",
    gap: "10px",
  },
};

const RequestUserSectionStyle = {
  display: "grid",
  gap: "10px",
  justifyItems: "center",
  alignContent: "center",
};

const RequestProjectSectionStyle = {
  display: "grid",
  gap: "10px",
  justifyItems: "center",
  alignContent: "center",
};

const RequestButtonSectionStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
};

export {
  RequestCardStyle,
  RequestUserSectionStyle,
  RequestProjectSectionStyle,
  RequestButtonSectionStyle,
};
