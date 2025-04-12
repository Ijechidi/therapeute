import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Link to="/">
            <FaHandHoldingHeart className="logo-icon" />
            <span>Therapias</span>
          </Link>
        </div>
        
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={() => scrollToSection('hero')}>Accueil</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href="#therapists" onClick={() => scrollToSection('therapists')}>Thérapeutes</a></li>
          <li><a href="#booking" onClick={() => scrollToSection('booking')}>Réservation</a></li>
          <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Témoignages</a></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;