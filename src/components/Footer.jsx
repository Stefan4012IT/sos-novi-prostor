import React from "react";
import logoSG from '../assets/logoes/sg_footer_colored.svg'
import logoCMPN from '../assets/logoes/camb_mpn.png'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo-left">
          <h3><a href="https://www.savremena-gimnazija.edu.rs/">SG</a></h3>
          <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} <a href="https://www.savremena-gimnazija.edu.rs/">Savremena gimnazija. </a>Sva prava zadržana.</p>
        </div>
        </div>
        <div className="footer-logo-rigt">
          <a href="https://www.savremena-gimnazija.edu.rs/">
            <img src={logoSG} alt="logo-footer-savremenaGimnazije" className="logo-sg"/>
          </a>
          <img src={logoCMPN} alt="logo-footer-cambridge-ministarstvo-prosvete-i-nauke" className="logo-cmpn"/>
        </div>

      </div>

    </footer>
  );
};

export default Footer;