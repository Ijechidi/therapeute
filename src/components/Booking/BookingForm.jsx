import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    therapist: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch("https://formspree.io/f/xldjzbow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nouvelle réservation de ${formData.name}`,
        }),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          therapist: '',
          message: ''
        });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom complet</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date souhaitée</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Heure préférée</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez une heure</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="therapist">Thérapeute</label>
        <select
          id="therapist"
          name="therapist"
          value={formData.therapist}
          onChange={handleChange}
          required
        >
          <option value="">Choisissez un thérapeute</option>
          <option value="sophie">Dr. Sophie Martin</option>
          <option value="thomas">Dr. Thomas Bernard</option>
          <option value="marie">Dr. Marie Dubois</option>
          <option value="lucas">Dr. Lucas Petit</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message (optionnel)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className={`booking-btn ${status === 'sending' ? 'sending' : ''}`}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Envoi en cours...' : 'Prendre Rendez-vous'}
      </button>

      {status === 'success' && (
        <div className="form-message success">
          Votre demande a été envoyée avec succès !
        </div>
      )}
      
      {status === 'error' && (
        <div className="form-message error">
          Une erreur s'est produite. Veuillez réessayer.
        </div>
      )}
    </form>
  );
};

export default BookingForm;