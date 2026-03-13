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
      subtitle: "Sports Hub",
      title: "Pokreni telo. Oslobodi um.",
      text: (
        <>
          Savremena vežbaonica nije privilegija — ona je deo obrazovanja. Jer kretanje nije odmor od učenja. Ono je deo njega.
          <br />
          <br />
          Istraživanja pokazuju da deca koja se redovno kreću — uče bolje, koncentruju se duže i osećaju se sigurnije.
        </>
      )
    },
    {
      bgColor: "#9d1516",
      image: sprat_II_3,
      subtitle: "Science Hub",
      title: "Eksperimenti koji ostaju u sećanju",
      text: (
        <>
          Zamislite čas hemije gde dete zaista pravi eksperimente, posmatra, zaključuje. Čas biologije gde se ne čita — već istražuje. Savremeni science kabinet je opremljena laboratorija u kojoj teorija dobija miris, boju i oblik.
          <br />
          <br />
          Ovde se rađaju prava pitanja, a ne samo tačni odgovori. Jer nauka nije gradivo — nauka je način razmišljanja.
        </>
      )
    },
    {
      bgColor: "#2b446b",
      image: sprat_II_5,
      subtitle: "Creative Art Hub",
      title: "Studio ideja i stvaralaštva",
      text: (
        <>
          Boje, materijali, ideje bez granica — i prostor koji to sve nosi. Creative Art kabinet u Savremenoj nije obična učionica. To je pravi studio gde deca crtaju, projektuju, prave, izražavaju. Gde se maštanje pretvara u umetnost.
          <br />
          <br />
          Svaki učenik ovde ima pravo na svoju viziju — i alate da je ostvari. Kreativnost nije talent. Ona je veština koja se gradi. I mi joj dajemo novi prostor.
        </>
      )
    },
    {
      bgColor: "#427042",
      image: sprat_II_7,
      subtitle: "Parents Hub",
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
      title: "Važan deo školskog dana",
      text: (
        <>
          Pitajte decu šta im se najviše sviđa u školi — često je odgovor: ručak sa drugarima. Kantine Savremene je taj prostor — topao, osmišljen, bez žurbe. 
          <br />
          <br />
          Mesto gde se prave prijateljstva, gde se smeje bez povoda i gde se dan nakratko usporava. I to nije manje važno od bilo kog časa.
        </>
      )
    },
    {
      bgColor: "#9d1516",
      image: sprat_II_7,
      subtitle: "Nova prilika za upis u Savremenu",
      title: (<>Novo odeljenje <br/>I razreda</>),
      text: (
        <>
          Savremena raste — i to znači novo odeljenje prvog razreda, sa svim onim što je Savremenu i definisalo: mali razredi, posvećeni nastavnici, inovativan pristup, ista posvećenost i sredina u kojoj se svako dete iskazuje svoj pun potencijal.
          <br />
          <br />
          To je novi start za još jednu generaciju koja zaslužuje više od prosečnog obrazovanja.
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