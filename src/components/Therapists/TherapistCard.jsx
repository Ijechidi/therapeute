import React from 'react';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="therapist-card" data-aos="fade-up">
      <div className="therapist-image-wrapper">
        <div className="therapist-image-container">
          <img 
            src={therapist.image} 
            alt={therapist.name}
            className="therapist-image"
          />
        </div>
      </div>
      <div className="therapist-info">
        <h3>{therapist.name}</h3>
        <p className="specialty">{therapist.specialty}</p>
        <p className="description">{therapist.description}</p>
      </div>
    </div>
  );
};

export default TherapistCard;