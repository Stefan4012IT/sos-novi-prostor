import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StackScrollDesktop({ children }) {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      const count = panels.length;
      const scrollLength = window.innerHeight * count;

      // Inicijalni set panela
      panels.forEach((panel, i) => {
        gsap.set(panel, {
          x: i === 0 ? 0 : "100vh",
          y: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;

        tl.to(
          panel,
          {
            x: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          i
        );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stack-scroll" ref={containerRef}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`stack-panel panel-${index}`}
          ref={(el) => (panelsRef.current[index] = el)}
        >
          {child}
        </div>
      ))}
    </section>
  );
}

export default StackScrollDesktop;