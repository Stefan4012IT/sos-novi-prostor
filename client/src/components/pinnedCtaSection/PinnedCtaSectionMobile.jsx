import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import ctaImg from "../../assets/img_cta_960x500.jpg";

gsap.registerPlugin(ScrollTrigger);

function PinnedCtaSectionMobile() {
  const currentYear = new Date().getFullYear();
  const nextShort = (currentYear + 1).toString().slice(-2);
  const dynamicYears = `${currentYear}/${nextShort}`;

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bodyTextRef = useRef(null);
  const ctaBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(bodyTextRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bodyTextRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(ctaBoxRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaBoxRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-7 mobile" ref={sectionRef}>
      <div className="heading-box">
        <h2 className="title" ref={titleRef}>
          U Savremenoj, vaše dete uvek dobija više.
        </h2>
      </div>

      <img src={ctaImg} alt="Kids" className="kids-img" />

      <div className="text" ref={bodyTextRef}>
        <p>
          Savremena gimnazija nisu samo aktuelni programi i tehnologije – ona
          podrazumeva podršku, razumevanje i put ka samostalnosti. Odabir prave
          škole je osnovni korak za budući uspeh.
        </p>
        <p>
          Kombinacijom Cambridge standarda, savremenih nastavnih programa,
          inovativnog pristupa i okruženja punog podrške stvara se temelj za
          uspešnu i sigurnu budućnost svakog učenika.
        </p>
      </div>

      <div className="btn-box" ref={ctaBoxRef}>
        <div className="cta-text">
          <h4>
            Pridružite nam se. Postanite deo Savremene zajednice koja raste.
          </h4>

          <Link
            to="prijava-2"
            smooth={true}
            duration={700}
            offset={-80}
            className="cta-link"
          >
            {`Upis za generaciju ${dynamicYears} je toku →`}
          </Link>
        </div>

        <div className="floated-box"></div>
      </div>
    </section>
  );
}

export default PinnedCtaSectionMobile;