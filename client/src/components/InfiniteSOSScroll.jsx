import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img_1 from "../assets/sos_zone/Sports_Hub.jpg";
import img_2 from "../assets/sos_zone/Science_Hub.jpg";
import img_3 from "../assets/sos_zone/Art_Hub.jpg";
import img_4 from "../assets/sos_zone/Parents_Hub.jpg";
import img_5 from "../assets/sos_zone/Lunch_Time_Hub.jpg";
import img_6 from "../assets/sos_zone/Novo_odeljenje.jpg";

gsap.registerPlugin(ScrollTrigger);

function InfiniteSOSScroll() {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState("#2b446b");

  const zones = [
    {
      bgColor: "#f7b815",
      image: img_1,
      subtitle: "Sports Hub",
      title: "Prostor za buduće šampione",
      text: (
        <>
          Sports Hub u Savremenoj je potpuno opremljen prostor za sve što fizičko vaspitanje treba da bude. Najsavremenija oprema stiže u Savremeni Sports Hub.
          <br />
          <br />
          Strunjače, sprave, sportski rekviziti, prostor za timske sportove i individualne aktivnosti — sve na jednom mestu. Deca razvijaju snagu, brzinu, koordinaciju, ravnotežu i timski duh. 
        </>
      )
    },
    {
      bgColor: "#9d1516",
      image: img_2,
      subtitle: "Science Hub",
      title: "STEAM Lab za uzbudljive eksperimente",
      text: (
        <>
          Savremeni Science Hub je opremljena laboratorija sa svom potrebnom opremom za izvođenje pravih eksperimenata — od hemijskih i bioloških ogleda do fizičkih istraživanja. Deca rade u grupama, koriste laboratorijsku opremu, izvode eksperimente i dokumentuju rezultate kao pravi istraživači
          <br />
          <br />
          Svaki čas je praktičan, vođen od strane stručnog nastavnika i osmišljen tako da deca razumeju — ne pamte napamet. Jer dete koje je samo otkrilo kako nešto funkcioniše, to ne zaboravlja.
        </>
      )
    },
    {
      bgColor: "#2b446b",
      image: img_3,
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
      image: img_4,
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
      image: img_5,
      subtitle: "Lunch Time Hub",
      title: "Kutak za obrok, odmor i razgovor",
      text: (
        <>
          U Lunch Time Hubu Topao i pažljivo osmišljen prostor namenjen je odmoru, razgovoru i kratkom predahu tokom školskog dana. Mesto gde učenici prave pauzu od časova, druže se i uživaju u obroku sa drugarima. Učenici mogu unapred poručiti zdrav i raznovrstan ketering obrok, koji ih čeka spreman u vreme ručka.
          <br />
          <br />
          Sve je organizovano tako da pauza bude prijatna, bez žurbe i u opuštenoj atmosferi.
        </>
      )
    },
    {
      bgColor: "#9d1516",
      image: img_6,
      subtitle: "Nova prilika za upis u Savremenu",
      title: (<>Novo odeljenje <br/>I razreda</>),
      text: (
        <>
          Mesta za generaciju 2026/27. su bila popunjena. Sada, Savremena se širi — i to znači novo odeljenje prvog razreda, sa svim onim što je Savremenu i definisalo: mali razredi, posvećeni nastavnici, inovativan pristup, ista posvećenost i sredina u kojoj svako dete iskazuje svoj pun potencijal.
          <br />
          <br />
          To je novi start za još jednu generaciju koja zaslužuje više od prosečnog obrazovanja. Broj mesta je ograničen — obezbedite jedno od 20 slobodnih mesta!
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