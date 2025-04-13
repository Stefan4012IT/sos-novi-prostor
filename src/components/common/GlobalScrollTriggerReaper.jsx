import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

const GlobalScrollTriggerReaper = ({ debug = false }) => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Prati resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Kad god se promeni ruta ili širina ekrana – obriši sve triggere
  useEffect(() => {
    if (debug) console.log("🧹 ScrollTrigger CLEANUP (global) triggered");
    ScrollTrigger.getAll().forEach((trigger) => {
      if (debug) console.log("💥 Killing:", trigger);
      trigger.kill();
    });
  }, [location.pathname, windowWidth]);

  return null;
};

export default GlobalScrollTriggerReaper;
