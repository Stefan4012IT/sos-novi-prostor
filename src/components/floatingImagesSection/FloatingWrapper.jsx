import React from "react";
import useIsMobile from "../../components/infiniteScroll/common/useIsMobile";
import FloatingImagesSectionDesktop from "./FloatingImagesSectionDesktop";
import FloatingImagesSectionMobile from "./FloatingImagesSectionMobile";

const FloatingWrapper = () => {
  const isMobile = useIsMobile();
  const FloatingComponent = isMobile ? FloatingImagesSectionMobile : FloatingImagesSectionDesktop;

  return (
    <section className="section-10">
      <div className="section-10--base">
        <div className="under-title">
          <h1>savremena</h1>
          <h2>gimnazija</h2>
        </div>
      </div>
      <div className="section-10--overlay">
        {isMobile ? <FloatingImagesSectionMobile /> : <FloatingImagesSectionDesktop />}
        {/* <FloatingComponent /> */}
      </div>
    </section>
  );
};

export default FloatingWrapper;