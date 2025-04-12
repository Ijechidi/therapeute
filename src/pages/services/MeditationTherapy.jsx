import React from 'react';
import { FaHeartbeat, FaPeace, FaYinYang } from 'react-icons/fa';

const MeditationTherapy = () => {
  return (
    <div className="service-page">
      <h1>Méditation Guidée</h1>
      <div className="service-content">
        <div className="service-intro">
          <FaHeartbeat className="service-main-icon" />
          <p>Découvrez la paix intérieure à travers nos techniques de méditation guidée.</p>
        </div>
        
        <div className="service-benefits">
          <h2>Nos Techniques</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaPeace className="benefit-icon" />
              <h3>Pleine Conscience</h3>
              <p>Pratiques de mindfulness pour le quotidien</p>
            </div>
            <div className="benefit-card">
              <FaYinYang className="benefit-icon" />
              <h3>Relaxation Profonde</h3>
              <p>Techniques de respiration et relaxation</p>
            </div>
          </div>
        </div>

        <div className="service-details">
          <h2>Nos Sessions</h2>
          <ul>
            <li>Sessions individuelles ou en groupe</li>
            <li>Durée de 45 minutes</li>
            <li>Supports audio disponibles</li>
            <li>Pratiques adaptées à tous niveaux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MeditationTherapy;