import React from "react";
import useIsMobile from "../../components/infiniteScroll/common/useIsMobile";
import FloatingImagesSectionDesktop from "./FloatingImagesSectionDesktop";
import FloatingImagesSectionMobile from "./FloatingImagesSectionMobile";
import logo from "../../assets/SG_logo.svg";

const FloatingWrapper = () => {
  const isMobile = useIsMobile();
  const FloatingComponent = isMobile ? FloatingImagesSectionMobile : FloatingImagesSectionDesktop;

  return (
    <section className="section-10">
      <div className="section-10--base">
        <div className="under-title">
          {/* <h1>savremena</h1>
          <h2>gimnazija</h2> */}
          <img src={logo} alt="savremena osnovna skola" />
        </div>
        <div className="title">
            <h1>Savremena</h1>
            <h3>osnovna škola</h3>
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