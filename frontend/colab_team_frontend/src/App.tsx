import Router from "./Router";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}

export default App;
