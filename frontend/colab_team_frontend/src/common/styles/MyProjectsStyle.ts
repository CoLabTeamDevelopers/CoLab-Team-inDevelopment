const MyProjectsCardStyle = {
  display: "flex",
  width: "50%",
  margin: "auto",
  justifyContent: "space-around",
  padding: "10px",
  gap: "20px",
  "@media(max-width:1024px)": {
    width: "90%",
  },
};

const MyProjectsButtonSectionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  flexWrap: "wrap",
};

export { MyProjectsButtonSectionStyle, MyProjectsCardStyle };
