import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import store from "./store";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
