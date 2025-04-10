import React, {useState} from 'react';
import SG_logo from '../assets/SG_logo.svg'
import img_1 from '../assets/dump_img_1.avif'
import img_2 from '../assets/dump_img_2.avif'
import img_3 from '../assets/dump_img_3.avif'

import num_1 from '../assets/benefits/nums/num_1_black.svg'
import num_2 from '../assets/benefits/nums/num_2_black.svg'
import num_3 from '../assets/benefits/nums/num_3_black.svg'
import num_4 from '../assets/benefits/nums/num_4_black.svg'

import benefits_1_img from '../assets/benefits/benefits_1.png'
import benefits_2_img from '../assets/benefits/benefits_2.png'
import benefits_3_img from '../assets/benefits/benefits_3.png'
import benefits_4_img from '../assets/benefits/benefits_4.png'

import intro_img_1 from '../assets/intro_img_01.jpg'
import intro_img_2 from '../assets/intro_2.jpg'
import intro_img_3 from '../assets/intro_3.jpg'
import intro_img_4 from '../assets/intro_4.jpg'

import Benefit from '../components/Benefit';
import RotatingWords from '../components/RotatingWords';
import StackScroll from '../components/StackScroll';
import FloatingImagesSection from '../components/FloatingImagesSection';
import SectionPrizemlje from '../components/SectionPrizemlje';
import Section_II_sprat from '../components/Section_II_sprat';
import Section_III_sprat from '../components/Section_III_sprat';
import Section_IV_sprat from '../components/Section_IV_sprat';

import PinnedCtaSection from '../components/PinnedCtaSection';
import ParallaxSection_8 from '../components/ParallaxSection-8';
import InfiniteZoneScrollPrizemlje from '../components/InfiniteZoneScrollPrizemlje';
import InfiniteZoneScroll_II_Sprat from '../components/InfiniteZoneScroll_II_sprat';
import InfiniteZoneScroll_III_Sprat from '../components/InfiniteZoneScroll_III_sprat';
import InfiniteZoneScroll_IV_Sprat from '../components/InfiniteZoneScroll_IV_sprat';
import ParallaxSection_9 from '../components/ParallaxSection-9';
import TitleRevealHome from '../components/TitleRevealHome';
import Footer from '../components/Footer';


const benefitsData = [
  { img: benefits_1_img, num: num_1, title: "Designed to inspire:", subtitle: "najmodernija tehnologija za uspeh u budućnosti", text: "Prostor je dizajniran tako da podstiče inovativne načine razmišljanja i pomeranje granica. Savremene tehnologije i fleksibilni elementi stvaraju dinamično okruženje, dajuci učenicima mogucnost za stvaranje… nesto future." },
  { img: benefits_2_img, num: num_2, title: "Where ideas take shape:", subtitle: "od ideje do akcije", text: "Ideje postaju konkretni projekti, a projekti postaju ciljevi koji se realizuju. Opremljen savremenim tehnologijama i osmišljen za budućnost – prostor koji raste zajedno s generacijama koje dolaze." },
  { img: benefits_3_img, num: num_3, title: "Where trust begins:", subtitle: "uz partnerstvo i saradnju sa roditeljima", text: "Kada roditelji i škola imaju isti cilj, dete dobija najznačajniju podršku na svom putu. A poverenje ne nastaje slučajno - ono je nusprodukt otvorene komunikacije, međusobnog uvažavanja i zajedničke brige o detetu." },
  { img: benefits_4_img, num: num_4, title: "Ready to grow:", subtitle: "Više mesta za više mogućnosti.", text: "Rastemo zajedno i stvaramo zajednicu koja pomera granice. Prošireni kapaciteti odgovaraju potražnji i omogućavaju većem broju učenika da postanu deo savremenog obrazovanja – drugačijeg, inovativnog i spremnog za budućnost." },
];


function Home() {
    
    return (
      <main className="home">

        <section className="hero section-1">
            <div className="logo-box"><img src={SG_logo} alt="SG_logo" /></div>
            <div className="hero--title-right">
                <h1>NEW Savremeni prostor za više:</h1>
            </div>
            <div className="hero--title-left">
                <RotatingWords words={["uspeha", "ideja", "uspomena", "pitanja", "projekata", "osmeha", "pobeda", "inovacija"]} />
            </div>
            <div className="hero--paragraph-text">
              <p>
              Od septembra 2025. učenici Savremene gimnazije dobijaju i II sprat u okviru modernog prostora Robne kuće Beograd. Nastava će se odvijati na 1557 kvadrata rasporedjenih na prizemlje, II, III, i IV sprata, sa 7 novih obrazovnih zona potpuno renoviranih i opremljenom po najvišim svetskim standardima.
              </p>
            </div>
          <div className="hero-img">
            <img src={intro_img_1} alt="" className="img-1" />
            <img src={intro_img_2} alt="" className="img-2" />
            <img src={intro_img_3} alt="" className="img-3" />
            <img src={intro_img_4} alt="" className="img-4" />
          </div>
          <h2 className="title">
            Novi prostorni koncept,
            <TitleRevealHome />
          </h2>
          
        </section>


        <StackScroll>
            {benefitsData.map((benefit, index) => (
            <Benefit
                key={index}
                img={benefit.img}
                num={benefit.num}
                subtitle={benefit.subtitle}
                title={benefit.title}
                text={benefit.text}
                className={`benefit--${index}`}
            />
            ))}
        </StackScroll>
        <SectionPrizemlje />
        <InfiniteZoneScrollPrizemlje />
        <Section_II_sprat />
        <InfiniteZoneScroll_II_Sprat />
        <Section_III_sprat />
        <InfiniteZoneScroll_III_Sprat />
        <Section_IV_sprat />
        <InfiniteZoneScroll_IV_Sprat />

        <PinnedCtaSection />
        <ParallaxSection_8 />
        <ParallaxSection_9 />

        <section className="section-10">
          <div className="section-10--base">
            <div className="under-title">
              <h1>savremena</h1>
              <h2>gimnazija</h2>
            </div>
          </div>
          <div className="section-10--overlay">
            <FloatingImagesSection />
          </div>
        </section>
        <Footer />
      </main>
    );
  }
  
  export default Home;
  