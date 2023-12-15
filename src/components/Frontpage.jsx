import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Frontpage = () => {
  return (
    <div className="main-container">
      <div className="card">
        <div className="card-image">
          <img src="/perfume.avif" alt="Perfume" />
        </div>

        <div className="card-title">
          <h2>PERFUME</h2>
          <h1>GABRIELLE ESSENCE Eau De Perfum</h1>

          <p className="card-description">
            A floral, solar and voluptuous interpretation composed by Oliver
            Polgo, Perfumer-Creator for the House of CHANEL.
          </p>

          <p className="card-price">
            $149.99 <span className="card-price-original">$169.99</span>
          </p>

          <button className="card-button">
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
