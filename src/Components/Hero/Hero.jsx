import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Nouveautés Uniquement</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Nouveau</p>
            <img src={hand_icon} alt="" width={60} />
          </div>
          <p>Collections pour tout le monde</p>
          
        </div>
        <div className="hero-latest-bnt">
            <div>Dernière collection</div>
            <img src={arrow} alt="" width={50} />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt=""  />
      </div>
    </div>
  );
};

export default Hero;
