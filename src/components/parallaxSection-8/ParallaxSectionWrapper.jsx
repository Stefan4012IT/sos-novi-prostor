import React from "react";
import useIsMobile from "../../components/infiniteScroll/common/useIsMobile";
import ParallaxSection8Desktop from "./ParallaxSection8Desktop";
import ParallaxSection8Mobile from "./ParallaxSection8Mobile";

const PinnedCtaSection = () => {
  const isMobile = useIsMobile();
  return isMobile ? <ParallaxSection8Mobile /> : <ParallaxSection8Desktop />;
};

export default PinnedCtaSection;