import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import prizemlje_1 from '../assets/prizemlje_1.jpg'
import prizemlje_2 from '../assets/prizemlje_2.jpg'

import sprat_II_1 from '../assets/sprat_II/sprat_II_1.jpg'
import sprat_II_2 from '../assets/sprat_II/sprat_II_2.jpg'
import sprat_II_3 from '../assets/sprat_II/sprat_II_3.jpg'
import sprat_II_4 from '../assets/sprat_II/sprat_II_4.jpg'
import sprat_II_5 from '../assets/sprat_II/sprat_II_5.jpg'
import sprat_II_6 from '../assets/sprat_II/sprat_II_6.jpg'
import sprat_II_7 from '../assets/sprat_II/sprat_II_7.jpg'
import sprat_II_8 from '../assets/sprat_II/sprat_II_8.jpg'

gsap.registerPlugin(ScrollTrigger);

function InfiniteZoneScrollSprat() {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState("#ffffff");

  const zones = [
    {
      bgColor: "#2b446b",
      text: [
        {
          title: "Future zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put izgovorio ono što će jednog dana postati uvod u njegov TED Talk",
        },
        {
          title: "Multidisciplinarni prostor za kreativna i tehnološka rešenja",
          text: "U ovoj zoni učenici razvijaju veštine timskog rada, kreativnog mišljenja i rešavanja problema kroz multidisciplinarne zadatke. Savremeni prostor za prezentacije i projekcije opremljen je modernim gledalištem i projekcionim zidom. Zahvaljujući mobilnoj bini i inovativnom prostornom rešenju, zona omogućava različite formate javnog nastupa i kreativnog izražavanja.",
          list: ["76m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [sprat_II_1, sprat_II_2],
    },
    {
      bgColor: "#f7b815",
      text: [
        {
          title: "Classroom zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put preuzeo odgovornost za ceo tim.",
        },
        {
          title: "Učionice koje prate ritam savremenog učenja",
          text: "Učionice su opremljene u skladu sa savremenim standardima, kombinujući prirodno osvetljenje, funkcionalan raspored i tehničku podršku za različite oblike nastave. Digitalna opremljenost i pažljivo birani elementi enterijera omogućavaju lako prilagođavanje različitim nastavnim formatima i metodama rada. Savremeni uslovi doprinose produktivnijem učenju, većoj mentalnoj prisutnosti i boljoj organizaciji časa.",
          list: ["247m2", "interaktivna zona", "u grupama"]
        },
      ],
      images: [sprat_II_3, sprat_II_4],
     
    },
    {
      bgColor: "#427042",
      text: [
        {
          title: "Innovation zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde se neko prvi put zapitao zašto ovako nešto već ne postoji. I uz AI napravio prototip. A sada ga svi koristimo.",
        },
        {
          title: "Prostor za inovacije kroz savremene tehnologije i timsku dinamiku",
          text: <>Innovation zone sastoji se iz niza manjih ambijenata prilagođenih timskom radu, razmeni znanja i praktičnoj primeni različitih oblasti na način koji podstiče rešavanje problema i primenu znanja kroz savremene tehnologije i interdisciplinarni pristup. <br /><br/>Prostor uključuje interaktivne zidne površine, brainstorming zone i studio, osmišljen da podstakne inovativno razmišljanje i saradnju.</>,
          list: ["126m2", "aktivna zona", <>
            individualno/<br />u malim grupama
          </>]
        },
      ],
      images: [sprat_II_5, sprat_II_6],
    },
    {
      bgColor: "#9d1516",
      text: [
        {
          title: "Reading zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put poželeo da pročita još jedno poglavlje – iako ga je društvo čekalo ispred škole.",
        },
        {
          title: "Mirna zona za čitanje, učenje i koncentraciju",
          text: "Reading zone predstavlja savremeno uređeni bibliotečki prostor namenjen tišini, samostalnom radu i čitanju. Opremljena je različitim tipovima sedenja koji omogućavaju učenicima da pronađu ambijent koji im najviše odgovara – za učenje u ritmu koji sami određuju. Ovde se razvijaju fokus, strpljenje i navika razumevanja pročitanog – veštine koje su ključne za uspeh u svakom savremenom obrazovnom okruženju. ",
          list: ["33m2", "tiha zona", "individualno/u malim grupama"]
        },
      ],
      images: [sprat_II_7, sprat_II_8],
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      zones.forEach((zone, zoneIndex) => {
        zone.text.forEach((_, textIndex) => {
          const triggerEl = wrapperRef.current?.querySelector(
            `.zone-text-II-sprat[data-zone='${zoneIndex}'][data-index='${textIndex}']`
          );

          const fadeImage = (newSrc) => {
            if (!imageRef.current) return;
            imageRef.current.classList.add("fade-out");
            setTimeout(() => {
              imageRef.current.src = newSrc;
              imageRef.current.classList.remove("fade-out");
            }, 300);
          };

          ScrollTrigger.create({
            trigger: triggerEl,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              fadeImage(zone.images[textIndex]);
              setActiveBg(zone.bgColor);
              wrapperRef.current
                ?.querySelectorAll(".zone-text-II-sprat")
                .forEach((el) => el.classList.remove("active-II-sprat"));
              triggerEl?.classList.add("active-II-sprat");
            },
            onEnterBack: () => {
              fadeImage(zone.images[textIndex]);
              setActiveBg(zone.bgColor);
              wrapperRef.current
                ?.querySelectorAll(".zone-text-II-sprat")
                .forEach((el) => el.classList.remove("active-II-sprat"));
              triggerEl?.classList.add("active-II-sprat");
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
      className="infinite-zone-II-sprat-wrapper"
      style={{ "--active-bg-II-sprat": activeBg }}
    >
      <div className="color-box"></div>
      <div className="zone-content">
        <div className="zone-texts-II-sprat">
          {zones.map((zone, zoneIndex) =>
            zone.text.map((txt, i) => (
              <div
                key={`${zoneIndex}-${i}`}
                className={`zone-text-II-sprat ${i === 0 ? "zone-text-primary" : "zone-text-secondary"}`}
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
          <img ref={imageRef} alt="Zone preview" />
        </div>
        <div className="zone-background"></div>
      </div>
    </section>
  );
}

export default InfiniteZoneScrollSprat;
