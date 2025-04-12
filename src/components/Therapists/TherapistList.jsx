import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';

const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    fetchTherapists();
  }, []);

  const fetchTherapists = async () => {
    try {
      const { data, error } = await supabase
        .from('therapists')
        .select('*');
      
      if (error) throw error;
      setTherapists(data);
    } catch (error) {
      console.error('Erreur:', error.message);
    }
  };

  return (
    <div className="therapist-list">
      <h2>Nos Thérapeutes</h2>
      <div className="therapist-grid">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="therapist-card">
            <img src={therapist.photo_url} alt={therapist.name} />
            <h3>{therapist.name}</h3>
            <p>{therapist.speciality}</p>
            <p>{therapist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapistList;