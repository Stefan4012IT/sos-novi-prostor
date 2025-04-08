import React, {useState} from 'react';
import SG_logo from '../assets/SG_logo.svg'
import img_1 from '../assets/dump_img_1.avif'
import img_2 from '../assets/dump_img_2.avif'
import img_3 from '../assets/dump_img_3.avif'

import num_1 from '../assets/nums/num_1_black.svg'
import num_2 from '../assets/nums/num_2_black.svg'
import num_3 from '../assets/nums/num_3_black.svg'
import num_4 from '../assets/nums/num_4_black.svg'

import prizelje_1 from '../assets/prizemlje_1.jpg'
import prizelje_2 from '../assets/prizemlje_2.jpg'

import intro_img_1 from '../assets/intro_img_01.jpg'
import intro_img_2 from '../assets/intro_2.jpg'
import intro_img_3 from '../assets/intro_3.jpg'
import intro_img_4 from '../assets/intro_4.jpg'

import nacrt_prizemlje from '../assets/prizemlje_nacrt.svg'
import nacrt_II_sprat from '../assets/sprat_II/nacrt_II_sprat.svg'
import nacrt_III_sprat from '../assets/sprat_III/nacrt_III_sprat.svg'
import Benefit from '../components/Benefit';
import RotatingWords from '../components/RotatingWords';
import StackScroll from '../components/StackScroll';
import ScrollNarrative from '../components/ScrollNarrative';
import FloatingImagesSection from '../components/FloatingImagesSection';

import ctaImg from '../assets/open-day-hero-bw.jpg'
import PinnedCtaSection from '../components/PinnedCtaSection';
import ParallaxSection_8 from '../components/ParallaxSection-8';
import InfiniteZoneScrollPrizemlje from '../components/InfiniteZoneScrollPrizemlje';
import InfiniteZoneScroll_II_Sprat from '../components/InfiniteZoneScroll_II_sprat';
import InfiniteZoneScroll_III_Sprat from '../components/InfiniteZoneScroll_III_sprat';
import InfiniteZoneScroll_IV_Sprat from '../components/InfiniteZoneScroll_IV_sprat';
import ParallaxSection_9 from '../components/ParallaxSection-9';


const benefitsData = [
    { num: num_1, title: "Designed to inspire:", subtitle: "najmodernija tehnologija za uspeh u budućnosti", text: "Prostor je dizajniran tako da podstiče inovativne načine razmišljanja i pomeranje granica. Savremene tehnologije i fleksibilni elementi stvaraju dinamično okruženje, dajuci učenicima mogucnost za stvaranje… nesto future." },
    { num: num_2, title: "Where ideas take shape:", subtitle: "od ideje do akcije", text: "Ideje postaju konkretni projekti, a projekti postaju ciljevi koji se realizuju. Opremljen savremenim tehnologijama i osmišljen za budućnost – prostor koji raste zajedno s generacijama koje dolaze." },
    { num: num_3, title: "Where trust begins:", subtitle: "uz partnerstvo i saradnju sa roditeljima", text: "Kada roditelji i škola imaju isti cilj, dete dobija najznačajniju podršku na svom putu. A poverenje ne nastaje slučajno - ono je nusprodukt otvorene komunikacije, međusobnog uvažavanja i zajedničke brige o detetu." },
    { num: num_4, title: "Ready to grow:", subtitle: "Više mesta za više mogućnosti.", text: "Rastemo zajedno i stvaramo zajednicu koja pomera granice. Prošireni kapaciteti odgovaraju potražnji i omogućavaju većem broju učenika da postanu deo savremenog obrazovanja – drugačijeg, inovativnog i spremnog za budućnost." },
  ];

  const zones = [
    {
      bgColor: "#9d1516",
      text: [
        {
          title: "Presentation zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put video oduševljenje ljudi na izložene radove. I svoj talenat pretvorio u uspešnu buducnost.",
        },
        {
          title: "Moderno uređeno i prostrano prizemlje",
          text: "Prostor Savremene gimnazije nalazi se u prizemlju Beograđanke i koncipirana je kao otvoreni prostor za prezentaciju školskih aktivnosti. Prostor saglediv sa ulice, sa tipskim izložbenim postamentima za privremene izložbe i prezentacije, daje priliku učenicima da predstave svoje projekte, ideje i postignuća.",
          list: ["88m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [prizelje_1, prizelje_2],
    },
    {
      bgColor: "#427042",
      text: [
        {
          title: "Presentation zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put video oduševljenje ljudi na izložene radove. I svoj talenat pretvorio u uspešnu buducnost.",
        },
        {
          title: "Moderno uređeno i prostrano prizemlje",
          text: "Prostor Savremene gimnazije nalazi se u prizemlju Beograđanke i koncipirana je kao otvoreni prostor za prezentaciju školskih aktivnosti. Prostor saglediv sa ulice, sa tipskim izložbenim postamentima za privremene izložbe i prezentacije, daje priliku učenicima da predstave svoje projekte, ideje i postignuća.",
          list: ["88m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [prizelje_1, prizelje_2],
    },
    {
      bgColor: "#f7b815",
      text: [
        {
          title: "Presentation zone",
          subtitle: "Ovo nije",
          text: "Ovo je mesto gde je neko prvi put video oduševljenje ljudi na izložene radove. I svoj talenat pretvorio u uspešnu buducnost.",
        },
        {
          title: "Moderno uređeno i prostrano prizemlje",
          text: "Prostor Savremene gimnazije nalazi se u prizemlju Beograđanke i koncipirana je kao otvoreni prostor za prezentaciju školskih aktivnosti. Prostor saglediv sa ulice, sa tipskim izložbenim postamentima za privremene izložbe i prezentacije, daje priliku učenicima da predstave svoje projekte, ideje i postignuća.",
          list: ["88m2", "aktivna zona", "kolektivno"]
        },
      ],
      images: [prizelje_1, prizelje_2],
    },
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
            Novi prostorni koncept, nova era obrazovanja.
          </h2>
        </section>
        
        <StackScroll>
            {benefitsData.map((benefit, index) => (
            <Benefit
                key={index}
                num={benefit.num}
                subtitle={benefit.subtitle}
                title={benefit.title}
                text={benefit.text}
                className={`benefit--${index}`}
            />
            ))}
        </StackScroll>
        <section className="section-3">
          <h2 className="title">
          Otvoreni prostor za prve utiske.
          </h2>
          <div className="section-img">
            <img src={nacrt_prizemlje} alt="" />
          </div>
          <h3 className="title-2">
            Prizemlje
          </h3>
        </section>
        <InfiniteZoneScrollPrizemlje />
        <section className="section-3-II">
          <h2 className="title">
          Okruženje u kome se oblikuje budućnost. 
          </h2>
          <div className="section-img">
            <img src={nacrt_II_sprat} alt="" />
          </div>
          <h3 className="title-2">
            II Sprat
          </h3>
        </section>
        <InfiniteZoneScroll_II_Sprat />
        <section className="section-3-III">
          <h2 className="title">
          Mesto povezivanja i istraživanja.
          </h2>
          <div className="section-img">
            <img src={nacrt_III_sprat} alt="" />
          </div>
          <h3 className="title-2">
            III Sprat
          </h3>
        </section>
        <InfiniteZoneScroll_III_Sprat />
        <section className="section-3-IV">
          <h2 className="title">
          Svaka ideja dobija priliku da se čuje.
          </h2>
          <div className="section-img">
            <img src={nacrt_III_sprat} alt="" />
          </div>
          <h3 className="title-2">
            IV Sprat
          </h3>
        </section>
        <InfiniteZoneScroll_IV_Sprat />

        
        {/* <ScrollNarrative zones={zones} /> */}

        {/* <section className="section-4">
          <h2 className="title">
            At the heart of the thriving
          </h2>
          <div className="section-img">

          </div>
          <h3 className="title-2">
            I Sprat
          </h3>
        </section>
        <ScrollNarrative zones={zones} />

        <section className="section-5">
          <h2 className="title">
            At the heart of the thriving
          </h2>
          <div className="section-img">

          </div>
          <h3 className="title-2">
            II Sprat
          </h3>
        </section>
        <ScrollNarrative zones={zones} />

        <section className="section-6">
          <h2 className="title">
            At the heart of the thriving
          </h2>
          <div className="section-img">

          </div>
          <h3 className="title-2">
            III Sprat
          </h3>
        </section>
        <ScrollNarrative zones={zones} /> */}
        <PinnedCtaSection />
        <ParallaxSection_8 />
        <ParallaxSection_9 />
        <section className="section-10">
          <div className="section-10--base">
            <h1>savremena</h1>
          </div>
          <div className="section-10--overlay">
            <FloatingImagesSection />
          </div>
        </section>
      </main>
    );
  }
  
  export default Home;
  