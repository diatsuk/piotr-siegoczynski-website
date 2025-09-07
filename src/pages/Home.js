import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Video playback failed:', error);
      });
    }
  }, []);

  return (
    <div className="page offer-page">
       <div className="hero">

       
       
        <div className="hero-overlay">
          <div className="img">
            <img src="/pfp.png" alt="foto Piotra" />
          </div>
          <div className="hero-content">
            <h1>Piotr Siegoczyński – Mistrz Świata w Kickboxingu</h1>
            <h2>Sportowiec. Trener. Motywator.</h2>
            <p>„Mistrz nie rodzi się na ringu – mistrz rodzi się na treningu.”</p>
            <h2>Poznaj moją historię</h2>
            <section className="text-section">
        
            <Link to="/about" className="cta-button">
  ➝ O mnie
</Link>

      </section>
          </div>
          </div>
      </div>
      <div className="hero">
      <video ref={videoRef} autoPlay muted loop playsInline>
    <source src="/main.mp4" type="video/mp4" />
  </video>
  </div>

      <section className="intro-section">
        <h3>Witaj na mojej oficjalnej stronie!</h3>
        <p>
          Nazywam się Piotr Siegoczyński i od ponad 30 lat jestem związany ze sportami walki. Jako wielokrotny mistrz świata w kickboxingu, wiem, jaką wartość mają pasja, dyscyplina i nieustanne dążenie do celu.
          Zapraszam Cię do świata sportu, w którym pokonywanie własnych ograniczeń staje się codziennością.
        </p>
      </section>

      <div className="power-blocks">
        <div className="power-block">
          <span className="icon">🥇</span>
          <span>Mistrz świata</span>
        </div>
        <div className="power-block">
          <span className="icon">🧠</span>
          <span>Mentor i trener</span>
        </div>
        <div className="power-block">
          <span className="icon">🥊</span>
          <span>Ponad 30 lat w kickboxingu</span>
          
        </div>
        
      </div>
      

     

      <section className="text-section">

        <Link to="/Contact" className="cta-button">
        Umów się na trening
</Link>
      </section>
      
    </div>
  );
};

export default Home;