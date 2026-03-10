import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_1 from "../assets/sprat_0_prizemlje/img_1.png";
import nacrt_prizemlje from '../assets/prizemlje_nacrt.svg'

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection_8() {
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
    <section className="section-3-prizemlje" ref={sectionRef}>
        <h2 className="title">
        <>Idejama treba prostor. <br/>Mi smo ga stvorili.</>
        </h2>
        <div className="section-img">
        <img src={nacrt_prizemlje} alt="" />
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
        Prizemlje
        </h3>
    </section>
  );
}

export default ParallaxSection_8;
