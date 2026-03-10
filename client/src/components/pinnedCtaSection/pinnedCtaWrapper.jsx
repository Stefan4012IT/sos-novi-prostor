import React from "react";
import useIsMobile from "../infiniteScroll/common/useIsMobile";
import PinnedCtaSectionDesktop from "./PinnedCtaSectionDesktop";
import PinnedCtaSectionMobile from "./PinnedCtaSectionMobile";

const PinnedCtaSection = () => {
  const isMobile = useIsMobile();
  return isMobile ? <PinnedCtaSectionMobile /> : <PinnedCtaSectionDesktop />;
};

export default PinnedCtaSection;