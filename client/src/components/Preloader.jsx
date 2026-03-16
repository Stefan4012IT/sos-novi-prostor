import React, { useEffect, useState } from "react";
import preloaderLogo from '../assets/logoes/preloaderSG_logo.svg';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Blokiraj scroll
    document.body.style.overflowY = "hidden";

    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflowY = "scroll";
    }, 2200); // 2.2 sekunde

    const handleLoad = () => {
      setIsLoaded(true);
      document.body.style.overflowY = "scroll";
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflowY = "scroll"; // fallback
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div className="preloader">
      <div className="preloader-img">
        <img src={preloaderLogo} alt="Preloader logo" />
        <div className="sunce"></div>

      </div>
      <div className="title">
          <h1>Savremena</h1>
          <h3>osnovna škola</h3>
        </div>
    </div>
  );
};

export default Preloader;
