import React from "react";
import useIsMobile from "../infiniteScroll/common/useIsMobile";
import ParallaxSection9Desktop from "./ParallaxSection9Desktop";
import ParallaxSection9Mobile from "./ParallaxSection9Mobile";

const PinnedCtaSection = () => {
  const isMobile = useIsMobile();
  return isMobile ? <ParallaxSection9Mobile /> : <ParallaxSection9Desktop />;
};

export default PinnedCtaSection;