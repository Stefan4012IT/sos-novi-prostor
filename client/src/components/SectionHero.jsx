import React, { useState } from "react";
import SG_logo from "../assets/SG_logo.svg";
import intro_img_1 from "../assets/hero/intro_sos_1.jpg";
import intro_img_2 from "../assets/hero/intro_sos_2.jpg";
import intro_img_3 from "../assets/hero/intro_sos_3.jpg";
import intro_img_4 from "../assets/hero/intro_sos_4.jpg";
import intro_skola from "../assets/hero/skola.svg";
import sos_novi_prostor_video from "../assets/hero/sos_novi_prostor_720p_30fr.mov";

import RotatingWords from "./RotatingWords";

const SectionHero = () => {
  const [activeImage, setActiveImage] = useState(null);

  const heroImages = [
    { src: intro_img_1, alt: "Savremena novi prostor 1" },
    { src: intro_img_2, alt: "Savremena novi prostor 2" },
    { src: intro_img_3, alt: "Savremena novi prostor 3" },
    { src: intro_img_4, alt: "Savremena novi prostor 4" },
  ];

  const openModal = (src) => {
    setActiveImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="hero section-1">
      <div className="logo-box">
        <img src={SG_logo} alt="SG_logo" />
      </div>

      <div className="sg_watermark">
        <div className="line_1"></div>
        <div className="square-name">
          <div className="name">
            <h6 className="big">Savremena</h6>
            <h6 className="small">osnovna</h6>
            <img src={intro_skola} alt="Skola" />
          </div>
        </div>
      </div>

      <div className="hero--title-right">
        <h1>Savremena se širi. Mesto te čeka.</h1>
      </div>

      <div className="hero--second-title-line">
        <div className="hero--title-left">
          <RotatingWords
            words={[
              "uspesi",
              "ideje",
              "uspomene",
              "pitanja",
              "projekati",
              "osmeh",
              "pobede",
              "inovacije",
            ]}
          />
          <video
            src={sos_novi_prostor_video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>

        <div className="hero--paragraph-text">
          <h3>
            Više mesta, više mogućnosti:{" "}
            <span>Otvara se novo odeljenje I razreda</span>
          </h3>
          <p>
            Savremena osnovna škola se širi. U septembru 2026. otvara se novi
            prostor koji je osmišljen od prve do poslednje prostorije sa jednim
            ciljem: da deca imaju sve što im treba da se razvijaju, istražuju i
            rastu.
          </p>
          <br />
          <p>
            Ovaj dodatni prostor donosi mogućnost da se otvori upis u još jedno
            odeljenje prvog razreda.
          </p>
        </div>
      </div>

      <div className="hero-img">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-img-trigger img-${index + 1}`}
            onClick={() => openModal(image.src)}
            aria-label={`Otvori sliku ${index + 1}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="image-modal" onClick={closeModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="image-modal-close"
              onClick={closeModal}
              aria-label="Zatvori prikaz slike"
            >
              ×
            </button>

            <img src={activeImage} alt="Prikaz u punoj veličini" />
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionHero;