import React from 'react';
import { FaUserFriends, FaComments, FaHandHoldingHeart } from 'react-icons/fa';

const CoupleTherapy = () => {
  return (
    <div className="service-page">
      <h1>Thérapie de Couple</h1>
      <div className="service-content">
        <div className="service-intro">
          <FaUserFriends className="service-main-icon" />
          <p>Renforcez votre relation et améliorez votre communication de couple.</p>
        </div>
        
        <div className="service-benefits">
          <h2>Notre Approche</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaComments className="benefit-icon" />
              <h3>Communication</h3>
              <p>Techniques pour une meilleure écoute et expression</p>
            </div>
            <div className="benefit-card">
              <FaHandHoldingHeart className="benefit-icon" />
              <h3>Connexion Émotionnelle</h3>
              <p>Renforcement des liens affectifs</p>
            </div>
          </div>
        </div>

        <div className="service-details">
          <h2>Nos Services</h2>
          <ul>
            <li>Consultation préliminaire gratuite</li>
            <li>Séances de 75 minutes</li>
            <li>Exercices de couple</li>
            <li>Suivi régulier</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoupleTherapy;