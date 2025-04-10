import React from "react";
// import logoSG from '../assets/SG_horizontalni_beli.png'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <h3>SG</h3>
        </div>
        <nav className="footer-nav">
        </nav>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Savremena gimnazija. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;