import { BrowserRouter as Router } from "react-router-dom";
import GlobalScrollTriggerReaper from "./components/common/GlobalScrollTriggerReaper";
import Home from "./pages/Home";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000); // sačekaj da se sve komponente učitaju
  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Home />
      {/* <GlobalScrollTriggerReaper debug={false} /> */ }
    </>

      // <Home />
  );
}

export default App;