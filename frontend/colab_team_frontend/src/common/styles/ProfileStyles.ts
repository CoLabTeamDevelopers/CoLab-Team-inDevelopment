const ProfileBoxStyle = {
  width: "50%",
  margin: "auto",
  "@media(max-width:1024px)": {
    width: "100%",
  },
};

const UserDetailsBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
  "@media(max-width: 1024px)": {
    display: "grid",
    justifyContent: "center",
    flexDirection: "row-reverse",
  },
};

const UserImageStyle = {
  "@media(max-width:1024px)": {
    display: "flex",
    justifyContent: "center",
  },
};

const UserDetailsStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "end",
  gap: "10px",
  marginTop: "1rem",
  "@media(max-width:1024px)": {
    display: "grid",
    alignItems: "start",
  },
};

const ChangeEmailBoxStyle = {
  display: "flex",
  gap: "20px",
  "@media(max-width:1024px)": {
    flexDirection: "row-reverse",
  },
};

const AboutUserStyle = {
  display: "grid",
  gap: "5px",
  marginTop: "10px",
};

export {
  AboutUserStyle,
  ChangeEmailBoxStyle,
  ProfileBoxStyle,
  UserDetailsBoxStyle,
  UserDetailsStyle,
  UserImageStyle,
};
