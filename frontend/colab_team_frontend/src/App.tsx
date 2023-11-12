import Router from "./router";
import { ThemeProvider } from "@mui/material";

import { StoreProvider } from "./store";
import { GlobalTheme } from "./styles/GlobalStyles";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={GlobalTheme}>
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
