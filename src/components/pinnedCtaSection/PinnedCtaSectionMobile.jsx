import ctaImg from "../../assets/img_cta_1.jpg";

function PinnedCtaSectionMobile() {
  const currentYear = new Date().getFullYear();
  const nextShort = (currentYear + 1).toString().slice(-2);
  const dynamicYears = `${currentYear}/${nextShort}`;

  return (
    <section className="section-7 mobile">
      <div className="heading-box">
        <h2 className="title">
          Savremen dizajn za<br />najbolje rezultate u učenju
        </h2>
      </div>

      <img src={ctaImg} alt="Kids" className="kids-img" />

      <div className="text">
        <p>
        Savremena gimnazija nisu samo aktuelni programi i tehnologije – ona podrazumeva podršku, razumevanje i put ka samostalnosti. Odabir prave škole je osnovni korak za budući uspeh.
        </p>
        <p>
        Kombinacijom Cambridge standarda, savremenih nastavnih programa, inovativnog pristupa i okruženja punog podrške stvara se temelj za uspešnu i sigurnu budućnost svakog učenika.
        </p>
      </div>

      <div className="btn-box">
        <div className="cta-text">
          <h4>Pridružite nam se. Postanite deo Savremene zajednice koja raste</h4>
          <a href="https://www.savremena-gimnazija.edu.rs/prijava/">{`Upis za generaciju ${dynamicYears} je toku!`}</a>
        </div>
        <div className="floated-box" ></div>
      </div>
      
    </section>
  );
}

export default PinnedCtaSectionMobile;
