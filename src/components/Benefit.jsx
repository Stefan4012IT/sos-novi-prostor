import img_1 from '../assets/benefits/benefits_1.png'
// src/components/Benefit.jsx
function Benefit({ img, num, title, subtitle, text, className }) {
    return (
      <div className={`benefit ${className}`}>
        <div className="big-num"><img src={num} alt="" /></div>
        <div className="benefit--content">
          <div className="img-box"><img src={img} alt="" /></div>
          <div className="line"></div>
          <h6 className="benefit--content---title">{title}</h6>
          <h6 className="benefit--content---subtitle">{subtitle}</h6>
          <p className="benefit--content---text">{text}</p>
        </div>

      </div>
    );
  }
  
  export default Benefit;
  
  