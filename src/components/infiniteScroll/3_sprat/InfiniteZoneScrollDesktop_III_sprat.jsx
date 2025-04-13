import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function InfiniteZoneScrollSprat({ zones = [] }) {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState("#f7b815");

  

  useEffect(() => {
    zones.forEach((zone) => {
      zone.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  useEffect(() => {
    // Postavi prvu sliku odmah na load
    if (imageRef.current) {
      imageRef.current.src = zones[0].images[0];
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      zones.forEach((zone, zoneIndex) => {
        zone.text.forEach((_, textIndex) => {
          const triggerEl = wrapperRef.current?.querySelector(
            `.zone-text-III-sprat[data-zone='${zoneIndex}'][data-index='${textIndex}']`
          );

          const fadeImage = (newSrc) => {
            if (!imageRef.current) return;
            imageRef.current.classList.add("fade-in");
            setTimeout(() => {
              imageRef.current.src = newSrc;
              imageRef.current.classList.remove("fade-in");
            }, 100);
          };

          ScrollTrigger.create({
            trigger: triggerEl,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              fadeImage(zone.images[textIndex]);
              setActiveBg(zone.bgColor);
              wrapperRef.current
                ?.querySelectorAll(".zone-text-III-sprat")
                .forEach((el) => el.classList.remove("active-III-sprat"));
              triggerEl?.classList.add("active-III-sprat");
            },
            onEnterBack: () => {
              fadeImage(zone.images[textIndex]);
              setActiveBg(zone.bgColor);
              wrapperRef.current
                ?.querySelectorAll(".zone-text-III-sprat")
                .forEach((el) => el.classList.remove("active-III-sprat"));
              triggerEl?.classList.add("active-III-sprat");
            },
          });
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="infinite-zone-III-sprat-wrapper"
      style={{ "--active-bg-III-sprat": activeBg }}
    >
      <div className="color-box"></div>
      <div className="zone-content">
        <div className="zone-texts-III-sprat">
          {zones.map((zone, zoneIndex) =>
            zone.text.map((txt, i) => (
              <div
                key={`${zoneIndex}-${i}`}
                className={`zone-text-III-sprat ${i === 0 ? "zone-text-primary" : "zone-text-secondary"}`}
                data-zone={zoneIndex}
                data-index={i}
              >
                <div className="heading-box">
                  {txt.subtitle && <h4>{txt.subtitle}</h4>}
                  {txt.title && <h2>{txt.title}</h2>}
                </div>
                <p>{txt.text}</p>
                {txt.list && (
                  <div className="list">
                    <div className="povrsina"><p>povrsina</p><span>{txt.list[0]}</span></div>
                    <div className="tip"><p>tip</p><span>{txt.list[1]}</span></div>
                    <div className="koriscenje"><p>koriscenje</p><span>{txt.list[2]}</span></div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        <div className="zone-image-box">
          <img ref={imageRef} alt="Zone preview" loading="eager" />
        </div>
        <div className="zone-background"></div>
      </div>
    </section>
  );
}

export default InfiniteZoneScrollSprat;
