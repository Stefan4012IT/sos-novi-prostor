import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterCtaSection = () => {
  const sectionRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="footer-cta-section" ref={sectionRef}>
      <div className="footer-cta-inner">
        <h4 ref={textRef}>
          Stvarno drugačije obrazovanje za generacije koje menjaju svet! <a href="https://www.savremena-gimnazija.edu.rs/prijava/">Prijavite se →</a>
        </h4>
      </div>
    </section>
  );
};

export default FooterCtaSection;