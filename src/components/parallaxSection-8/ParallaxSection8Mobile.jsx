import img_3 from "../../assets/beogradjanka.png";

function ParallaxSection8Mobile() {
  return (
    <section className="section-8 mobile">
      <div className="heading-box">
        <h2 className="title">
          <>Otvorena vrata uspešne <br />budućnosti.</>
        </h2>
      </div>

      <div className="text">
        <p>
          Novi prostorni koncept Savremene objedinjuje inovaciju, funkcionalnost i viziju budućnosti.
          Zone su osmišljene tako da prate obrazovne trendove i razvijaju kod učenika veštine koje
          nadilaze školske zidove.
        </p>
      </div>

      <img src={img_3} alt="Get in touch" className="img_prizemlje" />
    </section>
  );
}

export default ParallaxSection8Mobile;
