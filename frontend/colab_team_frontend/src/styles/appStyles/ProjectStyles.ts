const ProjectBoxStyle = {
  display: "flex",
  margin: "auto",
  width: "60%",
  "@media(max-width:640px)": {
    display: "grid",
    width: "100%",
    gap: "15px",
  },
};

const ProjectBoxImageStyle = {
  "@media (max-width: 600px)": {
    display: "flex",
    justifyContent: "center",
  },
};

const ThumbnailStyle = {
  border: "1px solid #b39ddb",
  borderRadius: "1000px",
  maxWidth: "100%",
  width: "50%",
  minWidth: "200px",
};

const ProjectDetailsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  overflow: "auto",
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
  ThumbnailStyle,
  ProjectBoxStyle,
  ProjectDetailsStyle,
  ProjectBoxImageStyle,
  ProjectContentBoxStyle,
};
