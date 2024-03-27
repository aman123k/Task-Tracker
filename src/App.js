import Home from "./Pages/Home";
import { GlobalContextProvider } from "./context/globalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Home />
      </GlobalContextProvider>
    </>
  );
}

export default App;
