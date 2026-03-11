import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import sprat_II_1 from "../assets/sprat_II/sprat_II_1.jpg";
import sprat_II_3 from "../assets/sprat_II/sprat_II_3.jpg";
import sprat_II_5 from "../assets/sprat_II/sprat_II_5.jpg";
import sprat_II_7 from "../assets/sprat_II/sprat_II_7.jpg";

gsap.registerPlugin(ScrollTrigger);

function InfiniteSOSScroll() {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState("#2b446b");

  const zones = [
    {
      bgColor: "#2b446b",
      image: sprat_II_1,
      subtitle: "Ovo nije",
      title: "Future zone",
      text: (
        <>
          U ovoj zoni učenici razvijaju veštine timskog rada, kreativnog mišljenja
          i rešavanja problema kroz multidisciplinarne zadatke.
          <br />
          <br />
          Savremeni prostor za prezentacije i projekcije opremljen je modernim
          gledalištem i projekcionim zidom.
        </>
      ),
      list: ["76m2", "aktivna zona", "kolektivno"],
    },
    {
      bgColor: "#f7b815",
      image: sprat_II_3,
      subtitle: "Ovo nije",
      title: "Classroom zone",
      text: (
        <>
          Učionice su opremljene u skladu sa savremenim standardima, kombinujući
          prirodno osvetljenje, funkcionalan raspored i tehničku podršku za
          različite oblike nastave.
          <br />
          <br />
          Digitalna opremljenost i pažljivo birani elementi enterijera omogućavaju
          lako prilagođavanje različitim nastavnim formatima i metodama rada.
        </>
      ),
      list: ["247m2", "interaktivna zona", "u grupama"],
    },
    {
      bgColor: "#427042",
      image: sprat_II_5,
      subtitle: "Ovo nije",
      title: "Innovation zone",
      text: (
        <>
          Innovation zone sastoji se iz niza manjih ambijenata prilagođenih
          timskom radu, razmeni znanja i praktičnoj primeni različitih oblasti.
          <br />
          <br />
          Prostor uključuje interaktivne zidne površine, brainstorming zone i
          studio, osmišljen da podstakne inovativno razmišljanje i saradnju.
        </>
      ),
      list: ["126m2", "aktivna zona", "individualno / u malim grupama"],
    },
    {
      bgColor: "#9d1516",
      image: sprat_II_7,
      subtitle: "Ovo nije",
      title: "Reading zone",
      text: (
        <>
          Reading zone predstavlja savremeno uređeni bibliotečki prostor namenjen
          tišini, samostalnom radu i čitanju.
          <br />
          <br />
          Ovde se razvijaju fokus, strpljenje i navika razumevanja pročitanog.
        </>
      ),
      list: ["33m2", "tiha zona", "individualno / u malim grupama"],
    },
  ];

  useEffect(() => {
    zones.forEach((zone) => {
      const img = new Image();
      img.src = zone.image;
    });
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = zones[0].image;
    }
  }, []);

  useEffect(() => {
    const fadeImage = (newSrc) => {
      if (!imageRef.current) return;

      imageRef.current.classList.add("fade-in");

      setTimeout(() => {
        imageRef.current.src = newSrc;
        imageRef.current.classList.remove("fade-in");
      }, 120);
    };

    const ctx = gsap.context(() => {
      zones.forEach((zone, index) => {
        const triggerEl = wrapperRef.current?.querySelector(
          `.zone-text-sos[data-index='${index}']`
        );

        ScrollTrigger.create({
          trigger: triggerEl,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            fadeImage(zone.image);
            setActiveBg(zone.bgColor);

            wrapperRef.current
              ?.querySelectorAll(".zone-text-sos")
              .forEach((el) => el.classList.remove("active-sos"));

            triggerEl?.classList.add("active-sos");
          },
          onEnterBack: () => {
            fadeImage(zone.image);
            setActiveBg(zone.bgColor);

            wrapperRef.current
              ?.querySelectorAll(".zone-text-sos")
              .forEach((el) => el.classList.remove("active-sos"));

            triggerEl?.classList.add("active-sos");
          },
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="infinite-sos-scroll-wrapper"
      style={{ "--active-bg-sos": activeBg }}
    >
      <div className="color-box" />
      <div className="zone-content">
        <div className="zone-texts-sos">
          {zones.map((zone, index) => (
            <div
              key={index}
              className={`zone-text-sos ${index % 2 === 0 ? "is-even" : "is-odd"}`}
              data-index={index}
            >
              <div className="heading-box">
                {zone.subtitle && <h4>{zone.subtitle}</h4>}
                {zone.title && <h2>{zone.title}</h2>}
              </div>

              <p>{zone.text}</p>

              {zone.list && (
                <div className="list">
                  <div className="povrsina">
                    <p>površina</p>
                    <span>{zone.list[0]}</span>
                  </div>
                  <div className="tip">
                    <p>tip</p>
                    <span>{zone.list[1]}</span>
                  </div>
                  <div className="koriscenje">
                    <p>korišćenje</p>
                    <span>{zone.list[2]}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="zone-image-box">
          <img ref={imageRef} alt="SOS zone preview" loading="lazy" />
        </div>

        <div className="zone-background" />
      </div>
    </section>
  );
}

export default InfiniteSOSScroll;