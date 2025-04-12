import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import IndividualTherapy from './pages/services/IndividualTherapy';
import CoupleTherapy from './pages/services/CoupleTherapy';
import MeditationTherapy from './pages/services/MeditationTherapy';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/individual" element={<IndividualTherapy />} />
          <Route path="/services/couple" element={<CoupleTherapy />} />
          <Route path="/services/meditation" element={<MeditationTherapy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
