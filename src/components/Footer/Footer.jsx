import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
     
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Therapias. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;