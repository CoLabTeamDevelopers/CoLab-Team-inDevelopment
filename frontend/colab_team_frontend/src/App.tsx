import Router from "./Router";
import StoreProvider from "./Store";

function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}

export default App;
