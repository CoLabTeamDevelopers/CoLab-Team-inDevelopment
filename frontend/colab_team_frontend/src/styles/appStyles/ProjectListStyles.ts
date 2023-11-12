const ProjectListCardStyle = {
  display: "flex",
  margin: "auto",
  width: "60%",
  "@media (max-width: 640px)": {
    width: "100%",
  },
  "@media (min-width: 601px) and (max-width: 1024px)": {
    width: "80%",
  },
};

const ProjectCardContentStyle = {
  display: "grid",
  padding: "10px",
  gap: "5px",
  "@media (max-width: 600px)": {
    width: "100%",
    gap: "10px",
  },
};

export { ProjectListCardStyle, ProjectCardContentStyle };
