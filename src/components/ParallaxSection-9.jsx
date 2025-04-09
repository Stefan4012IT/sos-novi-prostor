import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_1 from "../assets/sg_mapa.jpg";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection_9() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef_1 = useRef(null);
  const textRef_2 = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        xPercent: -100,
        opacity: .5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 100%",
          end: "top 10%",
          scrub: true,
        },
      });

      gsap.from(textRef_1.current, {
        y: -100,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: textRef_1.current,
          start: "top 100%",
          end: "top 60%",
          scrub: true,
        },
      });



      gsap.from(textRef_2.current, {
        y: -100,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: textRef_2.current,
          start: "top 100%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.fromTo(imgRef.current,
        { scale: .2, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-9" ref={sectionRef}>
      <h2 className="title" ref={titleRef}>Kontakt</h2>
      <div className="text_1" ref={textRef_1}>
        <div className="contact-box">
        
          <div>
            <p>Adresa škole:</p>
            <span>Masarikova 5 (ulaz iz Kralja Milana)</span>
            <span>Palata Beograd, Srbija</span>
            <span>(011) 4011 223</span> 
          </div>
          
          <div>
            <p>Za informacije:</p>
            <span>office@savremena-gimnazija.edu.rs</span>
          </div>
          <div>
            <p>Sektor za upis:</p>
            <span>upis@savremena-gimnazija.edu.rs</span>
          </div>
        </div>

 
      </div>
      <div className="text_2">
        <div className="line" ref={textRef_2}></div>
        <p ref={textRef_2}>Savremena ne raste slučajno – raste planski, sa ciljem da svakom učeniku pruži prostor u kojem može da uči, razmišlja, pita, stvara: uz četiri nova sprata, sedam novih zona i bezbroj novih mogućnosti.</p>
      </div>
      <img src={img_1} alt="Get in touch" className="img_gttouch" ref={imgRef} />
    </section>
  );
}

export default ParallaxSection_9;
