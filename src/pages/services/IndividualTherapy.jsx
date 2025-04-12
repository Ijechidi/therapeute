import React from 'react';
import '../../styles/ServicePages.css';
import { FaUserAlt, FaBrain, FaHeart } from 'react-icons/fa';

const IndividualTherapy = () => {
  return (
    <div className="service-page">
      <h1>Consultation Individuelle</h1>
      <div className="service-content">
        <div className="service-intro">
          <FaUserAlt className="service-main-icon" />
          <p>Une approche personnalisée pour votre développement personnel et bien-être mental.</p>
        </div>
        
        <div className="service-benefits">
          <h2>Nos Approches</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaBrain className="benefit-icon" />
              <h3>Thérapie Cognitive</h3>
              <p>Techniques pour transformer les schémas de pensée négatifs</p>
            </div>
            <div className="benefit-card">
              <FaHeart className="benefit-icon" />
              <h3>Soutien Émotionnel</h3>
              <p>Gestion du stress et des émotions difficiles</p>
            </div>
          </div>
        </div>

        <div className="service-details">
          <h2>Déroulement des Séances</h2>
          <ul>
            <li>Première consultation gratuite</li>
            <li>Séances de 50 minutes</li>
            <li>Suivi personnalisé</li>
            <li>Exercices pratiques à domicile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndividualTherapy;