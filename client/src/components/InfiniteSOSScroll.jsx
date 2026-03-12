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
      bgColor: "#f7b815",
      image: sprat_II_1,
      subtitle: "Vežbaonice",
      title: "Učenje kroz prostor",
      text: (
        <>
          Nije svako dete isto — i nije svaki čas isti. Vežbaonice u Savremenoj su prostori osmišljeni za aktivno učenje: za rad u grupama, projekte, praktične zadatke i sve ono što ne staje za školsku klupu. 
          <br />
          <br />
          Manje zidova, više kretanja kroz znanje. Jer deca ne uče samo sedeći — uče kada su u pokretu, u dijalogu, u akciji.
        </>
      )
    },
    {
      bgColor: "#9d1516",
      image: sprat_II_3,
      subtitle: "Science kabinet",
      title: "Eksperimenti koji ostaju u sećanju",
      text: (
        <>
          Zamislite čas hemije gde dete zaista meša, posmatra, zaključuje. Čas biologije gde se ne čita — već istražuje. Savremeni science kabinet je opremljena laboratorija u kojoj teorija dobija miris, boju i oblik.
          <br />
          <br />
          Ovde se rađaju prava pitanja, a ne samo tačni odgovori. Jer nauka nije gradivo — nauka je način razmišljanja.
        </>
      )
    },
    {
      bgColor: "#2b446b",
      image: sprat_II_5,
      subtitle: "Art kabinet",
      title: "Studio ideja i stvaralaštva",
      text: (
        <>
          Boje, materijali, ideje bez granica — i prostor koji to sve nosi. Art kabinet u Savremenoj nije učionica sa crtankama. To je pravi studio gde deca crtaju, projektuju, prave, izražavaju. Gde se maštanje tretira ozbiljno.
          <br />
          <br />
          Svaki učenik ovde ima pravo na svoju viziju — i alate da je ostvari. Kreativnost nije talent. Ona je veština koja se gradi. I mi joj dajemo prostor.
        </>
      )
    },
    {
      bgColor: "#427042",
      image: sprat_II_7,
      subtitle: "Sala za sastanke",
      title: "Prostor koji gradi poverenje",
      text: (
        <>
          Savremena je oduvek bila škola koja komunicira sa roditeljima — ne samo kroz dnevnik, već licem u lice. Nova sala za sastanke je prostor gde se grade partnerstva između škole i porodice.
          <br />
          <br />
          Gde se razgovara, sluša i zajedno traže rešenja. Jer obrazovanje funkcioniše kada su roditelji i škola tim. A tim se gradi razgovorom, razumevanjem i poverenjem.
        </>
      )
    },
    {
      bgColor: "#f7b815",
      image: sprat_II_7,
      subtitle: "Kantine",
      title: "Prava pauza, pravi obrok",
      text: (
        <>
          Pauza nije samo odmor od časa. Ona je deo dana koji se računa. Kantine Savremene je topao, osmišljen prostor gde deca sede, jedu i razgovaraju bez žurbe. Gde se ručak ne guta stojeći — već deli uz smeh i priču.
          <br />
          <br />
          Jer kultura stola, zdrava ishrana i trenutak zajedništva nisu sitnice. To su navike koje ostaju za ceo život.
        </>
      )
    },
    {
      bgColor: "#9d1516",
      image: sprat_II_7,
      subtitle: "Učionice + novo odeljenje I razreda",
      title: "Više mesta",
      text: (
        <>
          Ista posvećenost. Savremena raste — i to znači novo odeljenje prvog razreda, sa svim onim što je Savremenu i definisalo: mali razredi, posvećeni nastavnici, inovativan pristup i sredina u kojoj se svako dete oseća viđenim.
          <br />
          <br />
          Novo odeljenje nije samo još jedna učionica. To je novi start za još jednu generaciju koja zaslužuje više od prosečnog.
        </>
      )
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