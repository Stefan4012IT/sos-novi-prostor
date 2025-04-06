import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_3 from "../assets/dump_img_3.avif";

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
        y: 250,
        opacity: 0,
        duration: 2.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
        },
      });

      gsap.from(textRef_1.current, {
        y: 180,
        opacity: 0,
        scale: 1,
        duration: 2.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(textRef_2.current, {
        y: 180,
        opacity: 0,
        scale: 1,
        duration: 2.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.fromTo(imgRef.current,
        { y: -200, scale: 1.2, opacity: 0 },
        {
          y: 0,
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
      <h2 className="title" ref={titleRef}>Access</h2>
      <div className="text_1" ref={textRef_1}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      </div>
      <div className="text_2" ref={textRef_2}>
        <div className="line"></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      </div>
      <img src={img_3} alt="Get in touch" className="img_gttouch" ref={imgRef} />
    </section>
  );
}

export default ParallaxSection_9;
