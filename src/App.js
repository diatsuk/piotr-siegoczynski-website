import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import Offer from './pages/Offer';
import Media from './pages/Media';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Strona Główna</Link></li>
            <li><Link to="/about">O mnie</Link></li>
            <li><Link to="/gallery">Galeria</Link></li>
            <li><Link to="/offer">Oferta</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
         
        </footer>
      </div>
      
    </Router>
    
  );
}

export default App;