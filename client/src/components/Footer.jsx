import React from "react";
import logoSOS from '../assets/logoes/SOS_log_color_white.svg'
import logoCMPN from '../assets/logoes/camb_mpn.png'
import logoMinistarstvo from '../assets/logoes/ministarstvo_logo_wh.webp'
import logoCambridge from '../assets/logoes/cambridge_logo_white.webp'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo-left">
          <h4><a href="https://www.savremena-gimnazija.edu.rs/">SAVREMENA OSNOVNA ŠKOLA</a></h4>
          <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} <a href="https://www.savremena-osnovna.edu.rs/">Savremena osnovna škola. </a>Sva prava zadržana.</p>
          </div>
        </div>
        <div className="footer-logo-rigt">
          <a href="https://www.savremena-gimnazija.edu.rs/">
            <img src={logoSOS} alt="logo-footer-savremenaOsnovneSkole" className="logo-sg"/>
          </a>
          <img src={logoMinistarstvo} alt="logo-footer-cambridge-ministarstvo-prosvete-i-nauke" className="logo-cmpn"/>
          <img src={logoCambridge} alt="logo-footer-cambridge-ministarstvo-prosvete-i-nauke" className="logo-cmpn"/>
        </div>

      </div>

    </footer>
  );
};

export default Footer;