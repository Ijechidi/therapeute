import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Votre nom"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
        />
      </div>
      <div className="form-group">
        <select
          value={formData.time}
          onChange={(e) => setFormData({...formData, time: e.target.value})}
        >
          <option value="">Choisir un horaire</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
        </select>
      </div>
      <div className="form-group">
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>
      <button type="submit" className="primary-button">Réserver</button>
    </form>
  );
};

export default BookingForm;