import { useEffect, useRef } from "react";
import gsap from "gsap";
import ctaImg from "../../assets/img_cta_1.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PinnedCtaSectionMobile() {
  const currentYear = new Date().getFullYear();
  const nextShort = (currentYear + 1).toString().slice(-2);
  const dynamicYears = `${currentYear}/${nextShort}`;

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const txtBoxRef = useRef(null);
  const titleRef = useRef(null);

    useEffect(() => {
      const section = sectionRef.current;

      const ctx = gsap.context(() => {
        
      gsap.from(titleRef.current, {
        xPercent: -90,
        opacity: .5,
        scrollTrigger: {
          trigger: section,
          start: "top 100%",
          end: "top 10%",
          scrub: true,
        },
      });
      

      gsap.from(textRef.current, {
        xPercent: 80,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: "top 10%",
          end: "bottom 30%",
          scrub: true,
        },
      });
      }, sectionRef);

      return () => ctx.revert();
    }, []);

  return (
    <section className="section-7 mobile" ref={sectionRef}>
      <div className="heading-box">
        <h2 className="title" ref={titleRef}>
          Savremen dizajn za<br />najbolje rezultate u učenju
        </h2>
      </div>

      <img src={ctaImg} alt="Kids" className="kids-img" />

      <div className="text">
        <p>
        Savremena gimnazija nisu samo aktuelni programi i tehnologije – ona podrazumeva podršku, razumevanje i put ka samostalnosti. Odabir prave škole je osnovni korak za budući uspeh.
        </p>
        <p>
        Kombinacijom Cambridge standarda, savremenih nastavnih programa, inovativnog pristupa i okruženja punog podrške stvara se temelj za uspešnu i sigurnu budućnost svakog učenika.
        </p>
      </div>

      <div className="btn-box" ref={txtBoxRef}>
        <div className="cta-text" ref={textRef}>
          <h4>Pridružite nam se. Postanite deo Savremene zajednice koja raste</h4>
          <a href="https://www.savremena-gimnazija.edu.rs/prijava/">{`Upis za generaciju ${dynamicYears} je toku →`}</a>
        </div>
        <div className="floated-box" ></div>
      </div>
      
    </section>
  );
}

export default PinnedCtaSectionMobile;
