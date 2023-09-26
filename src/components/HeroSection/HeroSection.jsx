import { Link } from "react-router-dom";
import HeroSectionIllus from "../../assets/images/HeroSectionIllus.jpg";

import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <h1 className="title-hero">MediVault</h1>
      <div className="img-n-desc">
        <div className="sub-title-n-desc">
          <h2 className="sub-title-hero">Your Health, Our Priority</h2>
          <p className="desc">
            Empowering you to make informed health decisions. Explore our
            services to analyze symptoms, connect with experts, and take control
            of your well-being.
          </p>
          <Link to="/about" className="cta-button">
            Learn more
          </Link>
        </div>
        <div className="front-illus-div">
          <img className="illus" src={HeroSectionIllus} alt="Front illustration" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
