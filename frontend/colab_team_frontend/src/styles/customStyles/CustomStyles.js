const AuthBoxStyle = {
  width: "20%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  minWidth: "300px",
  "@media (max-width: 600px)": {
    width: "80%",
  },
  "@media (min-width: 601px) and (max-width: 1024px)": {
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

const ButtonsStyle = {
  background: "#b39ddb",
  textTransform: "none",
  "&:hover": { background: "#9575cd" },
};

const AuthRegisterStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const AuthResgisterBackButtonStyle = {
  padding: "2px",
  margin: "2px",
  minWidth: "15px",
  background: ButtonsStyle.background,
  borderRadius: "50px",
  "&:hover": { background: "#9575cd" },
};

const ColabLogoBoxStyle = {
  top: "30%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
};

const NavigationDrawerStyle = {
  display: "none",
  "@media (max-width: 1024px)": {
    background: "#ede7f6",
    display: "block",
    width: "10%",
  },
};

const AboutBoxStyle = {
  display: "flex",
  width: "80%",
  margin: "auto",
  alignItems: "center",
  "@media (max-width: 1024px)": {
    flexDirection: "column-reverse",
    width: "100%",
  },
};

const ProjectListBoxStyle = {
  marginTop: "6rem",
  "@media (max-width: 1024px)": {
    width: "100%",
  },
};

const ProjectListCardStyle = {
  width: "55%",
  margin: "auto",
  // marginTop: "6rem",
  "@media (max-width: 600px)": {
    width: "100%",
  },
  "@media (min-width: 601px) and (max-width: 1024px)": {
    flexDirection: "column-reverse",
    width: "60%",
  },
};

const ProjectListCardDescriptionStyle = {
  height: "3vh",
  textOverflow: "ellipsis",
  overflow: "hidden",
  textWrap: "nowrap",
};

const ProjectCardTitleStyle = {
  height: "3vh",
  textOverflow: "ellipsis",
  overflow: "hidden",
  textWrap: "nowrap",
  cursor: "pointer",
  ProjectListCardDescriptionStyle: ProjectListCardDescriptionStyle,
  "&:hover": { color: "#673ab7" },
};

const ProjectCardStyle = {
  display: "flex",
  alignItems: "center",
};

const ProjectCardImageStyle = {
  width: "20%",
  display: "flex",
  alignContent: "center",
  "@media (max-width: 600px)": {
    display: "none",
  },
};

const ProjectCardContentStyle = {
  width: "80%",
  height: "auto",
  display: "grid",
  padding: "10px",
  gap: "10px",
  "@media (max-width: 600px)": {
    width: "100%",
  },
};

const ProjectCardChipStyle = { background: "#ede7f6" };

const ProjectRootBoxStyle = {
  width: "60%",
  margin: "auto",
  gap: "15px",
  "@media (max-width: 600px)": {
    width: "100%",
  },
};

const ProjectBoxStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  margin: "auto",
  marginTop: "6rem",
  gap: "15px",
  "@media (max-width: 600px)": {
    display: "grid",
    justifyContent: "center",
  },
};

const ProjectBoxImageStyle = {
  "@media (max-width: 600px)": {
    display: "flex",
    justifyContent: "center",
  },
};

const ProjectTitleFontStyle = {
  "@media (max-width: 600px)": {
    fontSize: "17px",
  },
};

const ProjectSubContentFontStyle = {
  "@media (max-width: 600px)": {
    fontSize: "14px",
  },
};

const ProjectContentBoxStyle = {
  display: "grid",
  gap: "15px",
  padding: "0px 20px",
  "@media (max-width: 600px)": {
    padding: "0",
  },
};

export {
  AuthBoxStyle,
  ButtonsStyle,
  AuthLogoStyle,
  AuthTextFieldStyle,
  AuthRegisterStyle,
  AuthResgisterBackButtonStyle,
  NavigationDrawerStyle,
  AboutBoxStyle,
  ColabLogoBoxStyle,
  ProjectListBoxStyle,
  ProjectListCardStyle,
  ProjectCardTitleStyle,
  ProjectListCardDescriptionStyle,
  ProjectCardStyle,
  ProjectCardImageStyle,
  ProjectCardContentStyle,
  ProjectCardChipStyle,
  ProjectRootBoxStyle,
  ProjectBoxStyle,
  ProjectBoxImageStyle,
  ProjectTitleFontStyle,
  ProjectSubContentFontStyle,
  ProjectContentBoxStyle,
};
