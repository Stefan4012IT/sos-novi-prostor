import { useLayoutEffect, useRef, useState } from "react";

const InfiniteZoneScrollMobile_IV_Sprat_mini = ({ zones }) => {
  const wrapperRef = useRef(null);
  const [activeBg, setActiveBg] = useState(zones?.[0]?.bgColor || "#f7b815");

  useLayoutEffect(() => {
    if (!wrapperRef.current || !zones || zones.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const zoneIndex = entry.target.dataset.zone;
          if (entry.isIntersecting && zones[zoneIndex]) {
            setActiveBg(zones[zoneIndex].bgColor);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    const textElements = wrapperRef.current.querySelectorAll(".zone-text");
    textElements.forEach((el) => observer.observe(el));

    return () => {
      textElements.forEach((el) => observer.unobserve(el));
    };
  }, [zones]);

  return (
    <section
      ref={wrapperRef}
      className="infinite-zone-mobile-wrapper IV-sprat mobile"
      style={{ "--active-bg-IV-sprat": activeBg }}
    >
      <div className="color-box" />
      <div className="zone-content">
        {zones.map((zone, zoneIndex) =>
          zone.text.map((text, textIndex) => (
            <div
              className="zone-block-mobile"
              key={`z-${zoneIndex}-t-${textIndex}`}
              data-zone={zoneIndex}
              data-index={textIndex}
            >
              <div
                className={`zone-text ${
                  textIndex === 0 ? "zone-text-primary" : "zone-text-secondary"
                }`}
                data-zone={zoneIndex}
                data-index={textIndex}
              >
                <div className="heading-box">
                  {text.subtitle && <h4>{text.subtitle}</h4>}
                  {text.title && <h2>{text.title}</h2>}
                </div>
                {text.text && <p>{text.text}</p>}
                {Array.isArray(text.list) && (
                  <div className="list">
                    <div className="povrsina">
                      <p>površina</p>
                      <span>{text.list[0]}</span>
                    </div>
                    <div className="tip">
                      <p>tip</p>
                      <span>{text.list[1]}</span>
                    </div>
                    <div className="koriscenje">
                      <p>korišćenje</p>
                      <span>{text.list[2]}</span>
                    </div>
                  </div>
                )}
              </div>

              {zone.images?.[textIndex] && (
                <div className="zone-img-wrapper">
                  <img
                    src={zone.images[textIndex]}
                    alt={`img-${zoneIndex}-${textIndex}`}
                    className="zone-img"
                    data-zone={zoneIndex}
                    data-index={textIndex}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default InfiniteZoneScrollMobile_IV_Sprat_mini;
