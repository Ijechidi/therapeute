import React from 'react';
import TherapistCard from '../components/Therapists/TherapistCard';
import BookingForm from '../components/Booking/BookingForm';
import { FaUserFriends, FaUserAlt, FaHeartbeat } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    text: "Une expérience transformative qui a changé ma vie. L'approche professionnelle et bienveillante m'a permis de surmonter mes difficultés.",
    author: "Marie D.",
    role: "Cliente depuis 2022"
  },
  {
    id: 2,
    text: "Des thérapeutes professionnels et à l'écoute. Je recommande vivement leurs services pour quiconque cherche un accompagnement de qualité.",
    author: "Pierre L.",
    role: "Client depuis 2023"
  },
  {
    id: 3,
    text: "Grâce à leur accompagnement, j'ai retrouvé confiance en moi. Une équipe exceptionnelle et des résultats remarquables.",
    author: "Sophie M.",
    role: "Cliente depuis 2021"
  }
];

const Home = () => {
  const therapists = [
    {
      id: 1,
      name: "Dr. Sophie Martin",
      specialty: "Psychothérapie",
      description: "Spécialisée en thérapie cognitive comportementale",
      image: "/images/1.jpeg"
    },
    {
      id: 2,
      name: "Dr. Thomas Bernard",
      specialty: "Thérapie familiale",
      description: "Expert en relations familiales et conjugales",
      image: "/images/2.jpeg"
    },
    {
      id: 3,
      name: "Dr. Marie Dubois",
      specialty: "Art-thérapie",
      description: "Utilisation de l'art comme moyen d'expression et de guérison",
      image: "/images/3.jpeg"
    },
    {
      id: 4,
      name: "Dr. Lucas Petit",
      specialty: "Thérapie comportementale",
      description: "Spécialiste des troubles anxieux et phobies",
      image: "/images/4.jpeg"
    }
  ];

  const navigate = useNavigate();
  
  return (
    <div className="home">
      <section id="hero" className="hero">
        <h1>Bienvenue chez Therapias</h1>
        <p>Votre bien-être est notre priorité</p>
      </section>

      <section id="services" className="section">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card" data-aos="fade-up">
            <div className="service-icon">
              <FaUserAlt />
            </div>
            <h3>Consultation Individuelle</h3>
            <p>Thérapie personnalisée pour votre développement</p>
            <button className="service-btn" onClick={() => navigate('/services/individual')}>
              En savoir plus
            </button>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <div className="service-icon">
              <FaUserFriends />
            </div>
            <h3>Thérapie de Couple</h3>
            <p>Renforcement des relations et communication</p>
            <button className="service-btn" onClick={() => navigate('/services/couple')}>
              En savoir plus
            </button>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <div className="service-icon">
              <FaHeartbeat />
            </div>
            <h3>Méditation Guidée</h3>
            <p>Techniques de relaxation et mindfulness</p>
            <button className="service-btn" onClick={() => navigate('/services/meditation')}>
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <section id="therapists" className="section">
        <h2>Nos Thérapeutes</h2>
        <div className="therapists-section">
          {therapists.map(therapist => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>
      </section>

      <section id="booking" className="section">
        <h2>Prendre Rendez-vous</h2>
        <BookingForm />
      </section>

      <section id="testimonials" className="section">
        <h2>Témoignages</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">❝</div>
              <p>{testimonial.text}</p>
              <div className="testimonial-author">
                <span className="author-name">{testimonial.author}</span>
                <span className="author-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;