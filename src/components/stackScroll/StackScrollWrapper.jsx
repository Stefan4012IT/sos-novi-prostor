import React from "react";
import useIsMobile from "../../components/infiniteScroll/common/useIsMobile";
// import StackScroll from "./StackScroll";
import Benefit from "./Benefit";
import benefitsData from "./benefitsData";
import benefitsImages from "./benefitsImages";
import StackScrollMobile from "./StackScrollMobile";
import StackScrollDesktop from "./StackScrollDesktop";

const StackScrollWrapper = () => {
  const isMobile = useIsMobile();

  // Merge images with content
  const mergedData = benefitsData.map((item, index) => ({
    ...item,
    ...benefitsImages[index],
  }));

//   if (isMobile) {
//     return <StackScrollMobile data={mergedData} />;
//   }
return isMobile ? (
    <StackScrollMobile>
      {mergedData.map((benefit, index) => (
        <Benefit
          key={index}
          img={benefit.img}
          num={benefit.num}
          subtitle={benefit.subtitle}
          title={benefit.title}
          text={benefit.text}
          className={`benefit--${index}`}
        />
      ))}
    </StackScrollMobile>
  ) : (
    <StackScrollDesktop>
      {mergedData.map((benefit, index) => (
        <Benefit
          key={index}
          img={benefit.img}
          num={benefit.num}
          subtitle={benefit.subtitle}
          title={benefit.title}
          text={benefit.text}
          className={`benefit--${index}`}
        />
      ))}
    </StackScrollDesktop>
  );
  
};

export default StackScrollWrapper;