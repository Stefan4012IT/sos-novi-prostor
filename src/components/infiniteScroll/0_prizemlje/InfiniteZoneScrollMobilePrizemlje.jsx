import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfiniteZoneScrollMobile_prizemlje = ({ zones }) => {
  const wrapperRef = useRef(null);
  const [activeBg, setActiveBg] = useState(zones?.[0]?.bgColor || "#f7b815");

  useLayoutEffect(() => {
    if (!wrapperRef.current || !zones || zones.length === 0) return;

    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        zones.forEach((zone, zoneIndex) => {
          if (!Array.isArray(zone.text)) return;

          zone.text.forEach((_, textIndex) => {
            const blockEl = wrapperRef.current.querySelector(
              `.zone-block-mobile[data-zone="${zoneIndex}"][data-index="${textIndex}"]`
            );
          
            const textEl = blockEl?.querySelector(".zone-text");
            const imgEl = blockEl?.querySelector(".zone-img");
          
            if (!blockEl || !textEl || !imgEl) return;
          
            const direction = textIndex % 2 === 0 ? "-100%" : "100%";
          
            // INIT POSITION SLIKE
            gsap.set(imgEl, {
              x: direction,
              opacity: 0,
            });
          
            // ANIMACIJA SLIKE
            gsap.fromTo(
              imgEl,
              { x: direction, opacity: 0 },
              {
                x: "0%",
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: imgEl,
                  start: "top 85%",
                  end: "top 60%",
                  scrub: true,
                },
              }
            );
          
            // ANIMACIJA TEKSTA
            gsap.fromTo(
              textEl,
              { y: 80, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                  trigger: textEl,
                  start: "top 70%",
                  end: "top 50%",
                  scrub: true,
                },
              }
            );
          
            // BG + ACTIVE TEXT KONTROLA
            ScrollTrigger.create({
              trigger: blockEl,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                wrapperRef.current
                  ?.querySelectorAll(".zone-text")
                  .forEach((el) => el.classList.remove("active"));
                textEl.classList.add("active");
                setActiveBg(zones[zoneIndex].bgColor);
              },
              onEnterBack: () => {
                wrapperRef.current
                  ?.querySelectorAll(".zone-text")
                  .forEach((el) => el.classList.remove("active"));
                textEl.classList.add("active");
                setActiveBg(zones[zoneIndex].bgColor);
              },
            });
          });
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [zones]);

  return (
    <section
      ref={wrapperRef}
      className="infinite-zone-mobile-wrapper prizemlje mobile"
      style={{ "--active-bg-prizemlje": activeBg }}
    >
      <div className="color-box" />
      <div className="zone-content">
        {zones.map((zone, zoneIndex) =>
          zone.text.map((text, textIndex) => (
            <div className="zone-block-mobile" key={`z-${zoneIndex}-t-${textIndex}`}   data-zone={zoneIndex}
            data-index={textIndex}>
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
                      <p>Površina:</p>
                      <span>{text.list[0]}</span>
                    </div>
                    <div className="tip">
                      <p>Tip:</p>
                      <span>{text.list[1]}</span>
                    </div>
                    <div className="koriscenje">
                      <p>Korišćenje:</p>
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

export default InfiniteZoneScrollMobile_prizemlje;
