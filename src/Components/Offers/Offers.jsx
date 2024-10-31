import React from "react";
import "./offers.css";
import exlusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offres pour vous</h1>
        <p>UNIQUEMENT SUR LES PRODUITS LES PLUS VENDUS</p>
        <button>Vérifiez maintenant</button>
      </div>
      <div className="offers-right">
        <img src={exlusive_image} alt="" height={480}/>
      </div>
    </div>
  );
};

export default Offers;
