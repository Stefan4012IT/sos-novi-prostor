import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import prizemlje_1 from '../assets/prizemlje_1.jpg'
import prizemlje_2 from '../assets/prizemlje_2.jpg'

import sprat_IV_1 from '../assets/sprat_IV/sprat_IV_1.jpg'
import sprat_IV_2 from '../assets/sprat_IV/sprat_IV_2.jpg'
import sprat_IV_3 from '../assets/sprat_IV/sprat_IV_3.jpg'
import sprat_IV_4 from '../assets/sprat_IV/sprat_IV_4.jpg'

gsap.registerPlugin(ScrollTrigger);

function InfiniteZoneScrollSprat() {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState("#f7b815");

  const zones = [
    {
      bgColor: "#f7b815",
      text: [
        {
          title: "Interaction zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde su se prvi put oznojeni dlanovi pretvorili u samopouzdanje, koje neće stati ni pred pravom publikom.",
        },
        {
          title: "Centralni deo koncipiran kao otvoreni forum",
          text: <>Centralni, kružno organizovan prostor škole, koncipiran kao savremeni forum za razmenu ideja, diskusiju i timski rad, sa elementima za sedenje omogućavaju različite prostorne konfiguracije prilagođene predavanjima, panelima, radionicama i timskim sastancima. <br/><br/>Kroz aktivnosti u ovoj zoni učenici razvijaju veštine javnog nastupa, argumentovane komunikacije, timske saradnje i liderstva.</>,
          list: ["64m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [sprat_IV_1, sprat_IV_2],
    },
    {
      bgColor: "#427042",
      text: [
        {
          title: "Education zone",
          subtitle: "Ovo nije",
          text: "Ovo nije Classroom zone, ovo je mesto gde je neko prvi put shvatio značaj rada u timu. I to kasnije primenio u razvoju svog StartUp-a.",
        },
        {
          title: "Obrazovni ambijent koji podstiče aktivno učešće",
          text: <>Fleksibilna organizacija prostora uz funkcionalan raspored, prirodno osvetljenje i savremenu tehničku opremu omogućava realizaciju različitih nastavnih formata, što podstiče veću angažovanost učenika, efikasnije usvajanje znanja i aktivnije učešće u nastavnom procesu. <br/><br/>Digitalni alati dodatno doprinose prilagođavanju individualnim stilovima učenja i unapređuju interakciju između nastavnika i učenika.</>,
          list: ["231m2", "interaktivna zona", 'u grupama']
        },
      ],
      images: [sprat_IV_3, sprat_IV_4],
     
    },
  ];

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
            `.zone-text-IV-sprat[data-zone='${zoneIndex}'][data-index='${textIndex}']`
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
                ?.querySelectorAll(".zone-text-IV-sprat")
                .forEach((el) => el.classList.remove("active-IV-sprat"));
              triggerEl?.classList.add("active-IV-sprat");
            },
            onEnterBack: () => {
              fadeImage(zone.images[textIndex]);
              setActiveBg(zone.bgColor);
              wrapperRef.current
                ?.querySelectorAll(".zone-text-IV-sprat")
                .forEach((el) => el.classList.remove("active-IV-sprat"));
              triggerEl?.classList.add("active-IV-sprat");
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
      className="infinite-zone-IV-sprat-wrapper"
      style={{ "--active-bg-IV-sprat": activeBg }}
    >
      <div className="color-box"></div>
      <div className="zone-content">
        <div className="zone-texts-IV-sprat">
          {zones.map((zone, zoneIndex) =>
            zone.text.map((txt, i) => (
              <div
                key={`${zoneIndex}-${i}`}
                className={`zone-text-IV-sprat ${i === 0 ? "zone-text-primary" : "zone-text-secondary"}`}
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
