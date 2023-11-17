const ColabLogoBoxStyle = {
  top: "30%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
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

export { AboutBoxStyle, ColabLogoBoxStyle };
