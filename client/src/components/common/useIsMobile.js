import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 991) {
  const getIsMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= breakpoint;
  };

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}