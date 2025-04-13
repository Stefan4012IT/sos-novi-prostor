import { BrowserRouter as Router } from "react-router-dom";
import GlobalScrollTriggerReaper from "./components/common/GlobalScrollTriggerReaper";
import Home from "./pages/Home";

function App() {


  return (
    <>
      <Home />
      {/* <GlobalScrollTriggerReaper debug={false} /> */ }
    </>

      // <Home />
  );
}

export default App;