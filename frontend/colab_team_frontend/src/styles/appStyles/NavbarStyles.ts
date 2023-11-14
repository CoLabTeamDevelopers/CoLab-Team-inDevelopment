const NavigationLinksStyle = {
  display: "flex",
  gap: "50px",
  justifyContent: "center",
  "@media(max-width:1024px)": {
    display: "none",
  },
};

const NavigationDrawerStyle = {
  "@media (max-width: 1024px)": {
    background: "#ede7f6",
    display: "block",
    width: "10%",
  },
};

export { NavigationLinksStyle, NavigationDrawerStyle };
