import React from "react";
import SG_logo from "../assets/SG_logo.svg"; // prilagodi putanju
import intro_img_1 from '../assets/intro_img_01.jpg'
import intro_img_2 from '../assets/intro_2.jpg'
import intro_img_3 from '../assets/intro_3.jpg'
import intro_img_4 from '../assets/intro_4.jpg'

import RotatingWords from "./RotatingWords";
import TitleRevealHome from "./TitleRevealHome";


const SectionHero = () => {
  return (
    <section className="hero section-1">
      <div className="logo-box">
        <img src={SG_logo} alt="SG_logo" />
      </div>
      <div className="sg_watermark">
        <div className="line_1"></div>
        <div className="square-name">
            <div className="square"></div>
            <div className="name">
                <h6 className="big">savremena</h6>
                <h6 className="small">gimnazija</h6>
            </div>
        </div>

      </div>

      <div className="hero--title-right">
        <h1>NEW Savremeni prostor za više:</h1>
      </div>

      <div className="hero--title-left">
        <RotatingWords
          words={[
            "uspeha",
            "ideja",
            "uspomena",
            "pitanja",
            "projekata",
            "osmeha",
            "pobeda",
            "inovacija",
          ]}
        />
      </div>

      <div className="hero--paragraph-text">
        <p>
          Od septembra 2025. učenici Savremene gimnazije dobijaju i II sprat u
          okviru modernog prostora Robne kuće Beograd. Nastava će se odvijati na
          1557 kvadrata rasporedjenih na prizemlje, II, III, i IV sprata, sa 7
          novih obrazovnih zona potpuno renoviranih i opremljenom po najvišim
          svetskim standardima.
        </p>
      </div>

      <div className="hero-img">
        <img src={intro_img_1} alt="" className="img-1" />
        <img src={intro_img_2} alt="" className="img-2" />
        <img src={intro_img_3} alt="" className="img-3" />
        <img src={intro_img_4} alt="" className="img-4" />
      </div>

      <h2 className="title">
        <h2>Novi prostorni koncept,</h2>
        <TitleRevealHome />
      </h2>
    </section>
  );
};

export default SectionHero;
