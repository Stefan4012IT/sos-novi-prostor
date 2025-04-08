import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import prizemlje_1 from '../assets/prizemlje_1.jpg'
import prizemlje_2 from '../assets/prizemlje_2.jpg'

import sprat_III_1 from '../assets/sprat_III/sprat_III_1.jpg'
import sprat_III_2 from '../assets/sprat_III/sprat_III_2.jpg'
import sprat_III_3 from '../assets/sprat_III/sprat_III_3.jpg'
import sprat_III_4 from '../assets/sprat_III/sprat_III_4.jpg'
import sprat_III_5 from '../assets/sprat_III/sprat_III_5.jpg'
import sprat_III_6 from '../assets/sprat_III/sprat_III_6.jpg'
import sprat_III_7 from '../assets/sprat_III/sprat_III_7.jpg'
import sprat_III_8 from '../assets/sprat_III/sprat_III_8.jpg'

gsap.registerPlugin(ScrollTrigger);

function InfiniteZoneScrollSprat() {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState("#ffffff");

  const zones = [
    {
      bgColor: "#f7b815",
      text: [
        {
          title: "Parents zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde roditelji prvi put osete podršku i razumevanje od škole i ponos zbog onoga šta njihovo dete postaje",
        },
        {
          title: "Jasno definisan prostor za partnerstvo i saradnju s roditeljima",
          text: "U prirodnim materijalima i sa pažljivo odabranim nameštajem, ova zona predstavlja prostor za prijem i razgovor sa roditeljima. To je mesto gde škola i porodica grade međusobno razumevanje, dele informacije i postavljaju temelje zajedničke brige o razvoju deteta.",
          list: ["90m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [sprat_III_2, sprat_III_1],
    },
    {
      bgColor: "#9d1516",
      text: [
        {
          title: "Exploration zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je nastala ideja koja je završila na školskom takmičenju. I postala start-up godine. Koji je zaradio prvi million.",
        },
        {
          title: "Miran prostor fokusiran na rad, čitanje i istraživanje",
          text: "Jasno definisana zona koji podstiče na istraživanje, koncentraciju i individualni razvoj, a direktno je povezana sa muzičkom zonom i zonom sedenja, čime se omogućava prirodan prelaz između različitih vrsta aktivnosti – od tihog rada do otvorene razmene ideja. Prostor je opremljen udobnim, fleksibilnim elementima za sedenje što doprinosti fleksibilnosti u učenju i radu na projektima.",
          list: ["36m2", "tiha zona", <>individualno/<br />u malim grupama</>]
        },
      ],
      images: [sprat_III_3, sprat_III_4],
     
    },
    {
      bgColor: "#2b446b",
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
      images: [sprat_III_5, sprat_III_6],
    },
    {
      bgColor: "#427042",
      text: [
        {
          title: "STEM zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde se neko prvi put susreo s problemom koji ga je držao budnim noću. I kasnije razvio aplikaciju koja taj problem rešava.",
        },
        {
          title: "Naučno-tehnološka zona za praktičan rad i istraživanje",
          text: "Savremeni naučno-tehnološki hub škole, namenjen razvoju praktičnih veština kroz analitički i projektno orijentisan rad. Prostor je opremljen digitalnim alatima, tehničkom opremom i nastavnim sredstvima koja omogućavaju učenicima da istražuju, testiraju i stvaraju.Kroz rad na konkretnim izazovima, učenici razvijaju logičko razmišljanje, preciznost i sigurnost u donošenju rešenja – veštine koje direktno vode ka uspehu u tehnološkom i akademskom svetu.",
          list: ["42m2", "interaktivna zona", "u grupama/kolektivno"]
        },
      ],
      images: [sprat_III_8, sprat_III_7],
    }
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
    const ctx = gsap.context(() => {
      zones.forEach((zone, zoneIndex) => {
        zone.text.forEach((_, textIndex) => {
          const triggerEl = wrapperRef.current?.querySelector(
            `.zone-text-III-sprat[data-zone='${zoneIndex}'][data-index='${textIndex}']`
          );

          const fadeImage = (newSrc) => {
            if (!imageRef.current) return;
            imageRef.current.classList.add("fade-out");
            setTimeout(() => {
              imageRef.current.src = newSrc;
              imageRef.current.classList.remove("fade-out");
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
