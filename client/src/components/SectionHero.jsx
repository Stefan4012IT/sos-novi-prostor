import React from "react";
import SG_logo from "../assets/SG_logo.svg"; // prilagodi putanju
import intro_img_1 from '../assets/hero/intro_img_01.jpg'
import intro_img_2 from '../assets/hero/intro_2.jpg'
import intro_img_3 from '../assets/hero/intro_3.jpg'
import intro_img_4 from '../assets/hero/intro_4.jpg'
import intro_img_5 from '../assets/hero/intro_1.jpg'
import intro_img_6 from '../assets/hero/intro_6.jpg'
import intro_img_7 from '../assets/hero/intro_7.jpg'
import intro_img_8 from '../assets/hero/intro_8.jpg'

import RotatingWords from "./RotatingWords";
import TitleRevealHome from "./TitleRevealHome";


const SectionHero = () => {
  return (
    <section className="hero section-1">
      <div className="logo-box">
        <img src={SG_logo} alt="SG_logo" />
      </div>
      {/* <div className="sg_watermark">
        <div className="line_1"></div>
        <div className="square-name">
            <div className="square"></div>
            <div className="name">
                <h6 className="big">savremena</h6>
                <h6 className="small">gimnazija</h6>
            </div>
        </div>

      </div> */}

      <div className="hero--title-right">
        <h1>Novi prostor. Novo odeljenje.</h1>
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
          <img src="https://placehold.co/900x400" alt="" />
        </div>
        <div className="hero--paragraph-text">
          <h3>Više mesta, više mogućnosti, više iskustava za svako dete</h3>
          <p>
          Savremena osnovna škola se širi. U septembru 2026. otvara se novi prostor koji je osmišljen od prve do poslednje prostorije sa jednim ciljem: da deca imaju sve što im treba da se razvijaju, istražuju i rastu. Uz novi prostor, otvara se još jedno odeljenje prvog razreda — jer verujemo da svako dete zaslužuje savremeno obrazovanje. 
          </p>
        </div>
      </div>

      

      

      <div className="hero-img">
        <img src={intro_img_1} alt="" className="img-1" />
        <img src={intro_img_2} alt="" className="img-2" />
        <img src={intro_img_3} alt="" className="img-3" />
        <img src={intro_img_4} alt="" className="img-4" />
      </div>

    </section>
  );
};

export default SectionHero;
