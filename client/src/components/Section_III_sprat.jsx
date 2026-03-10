import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_1 from "../assets/sprat_III/img_1_III_sprat.png";
import nacrt_III_sprat from '../assets/sprat_II/nacrt_II_sprat.svg'

gsap.registerPlugin(ScrollTrigger);

function Sprat_III() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

useEffect(() => {
    const ctx = gsap.context(() => {
      // Prati sekciju od ulaska do izlaska
      gsap.fromTo(
        imgRef.current,
        { opacity: 1, y: -400 },
        {
          opacity: 1,
          y: 800,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
            ease: "power2.out",
          },
        }
      );
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-3-III" ref={sectionRef}>
    <h2 className="title">
    <>Stvarno drugačiji prostor <br/>za inovativno obrazovanje.</>
    </h2>
    <div className="section-img">
      <img src={nacrt_III_sprat} alt="" />
    </div>
    <div className="img_box">
            <div className="img-wrapper">
                <img
                ref={imgRef}
                className="sticky-img"
                src={img_1}
                alt="II sprat"
                />
            </div>
        </div>
    <h3 className="title-2">
      III sprat
    </h3>
  </section>
  );
}

export default Sprat_III;