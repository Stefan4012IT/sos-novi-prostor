import img_1 from "../../assets/sg_mapa.jpg";

function ParallaxSection9Mobile() {
  return (
    <section className="section-9 mobile">
      <h2 className="title">Your future just got bigger.</h2>

      <div className="text_1">
        <div className="contact-box">
          <div>
            <p>Adresa škole:</p>
            <span>Masarikova 5 (ulaz iz Kralja Milana)</span>
            <span>Palata Beograd, Srbija</span>
            <span>(0)11/40-11-223</span>
          </div>

          <div>
            <p>Za informacije:</p>
            <span>office@savremena-gimnazija.edu.rs</span>
          </div>

          <div>
            <p>Sektor za upis:</p>
            <span>upis@savremena-gimnazija.edu.rs</span>
          </div>
        </div>
      </div>

      <div className="text_2">
        <div className="line"></div>
        <p>
        Savremena ne raste slučajno – raste planski, sa ciljem da svakom učeniku pruži prostor u kojem može da uči, razmišlja, pita, stvara: četiri sprata, sedam novih zona i bezbroj novih mogućnosti.
        </p>
      </div>

      <img src={img_1} alt="Mapa lokacije" className="img_gttouch" />
    </section>
  );
}

export default ParallaxSection9Mobile;
