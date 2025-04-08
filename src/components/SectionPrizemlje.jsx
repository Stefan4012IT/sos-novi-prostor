import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_3 from "../assets/dump_img_3.avif";
import nacrt_prizemlje from '../assets/prizemlje_nacrt.svg'

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection_8() {
  const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const textRef = useRef(null);
  const imgRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//     //   gsap.from(titleRef.current, {
//     //     y: 250,
//     //     opacity: 0,
//     //     duration: 2.5,
//     //     scrollTrigger: {
//     //       trigger: sectionRef.current,
//     //       start: "top 60%",
//     //       end: "top 30%",
//     //       scrub: true,
//     //     },
//     //   });

//     //   gsap.from(textRef.current, {
//     //     y: 180,
//     //     opacity: 0,
//     //     scale: 1,
//     //     duration: 2.2,
//     //     scrollTrigger: {
//     //       trigger: sectionRef.current,
//     //       start: "top 90%",
//     //       end: "top 60%",
//     //       scrub: true,
//     //     },
//     //   });

//     //   gsap.fromTo(imgRef.current,
//     //     { y: -800, scale: 1.2, opacity: 1 },
//     //     {
//     //       y: 0,
//     //       opacity: 1,
//     //       scale: 1,
//     //       duration: 2.5,
//     //       ease: "power3.out",
//     //       scrollTrigger: {
//     //         trigger: sectionRef.current,
//     //         start: "top 10%",
//     //         end: "top 20%",
//     //         scrub: true,
//     //       },
//     //     }
//     //   );

//       gsap.fromTo(
//         imgRef.current,
//         { y: -500, opacity: 1 },
//         {
//           y: 0,
//           opacity: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
  
//       // 2. Izlazak slike kad sekcija napušta viewport
//       gsap.to(imgRef.current, {
//         y: -150,
//         opacity: 0,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 20%",
//           end: "bottom 0%",
//           scrub: true,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

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
        Otvoreni prostor za prve utiske.
        </h2>
        <div className="section-img">
        <img src={nacrt_prizemlje} alt="" />
        </div>
        <div className="img_box">
            <div className="img-wrapper">
                <img
                ref={imgRef}
                className="sticky-img"
                src={img_3}
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
