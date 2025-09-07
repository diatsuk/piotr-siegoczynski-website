import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <div className="page offer-page">
      <h1 className="offer-title">Współpraca i treningi</h1>
      <p className="offer-intro">Dzielę się ponad 30-letnim doświadczeniem, aby pomóc Ci osiągnąć swoje cele – zarówno na ringu, jak i w życiu. Oto, co oferuję:</p>
      <ul className="offer-list">
        <li className="offer-item">🔹 <strong>Treningi personalne</strong>: Kickboxing, samoobrona i ogólna sprawność – dostosowane do Twojego poziomu i ambicji.</li>
        <li className="offer-item">🔹 <strong>Seminaria i warsztaty motywacyjne</strong>: Sesje pełne energii, inspiracji i praktycznych wskazówek dla sportowców i pasjonatów.</li>
        <li className="offer-item">🔹 <strong>Szkolenia dla klubów i trenerów</strong>: Profesjonalne wsparcie w rozwoju technik i mentalnej siły dla zespołów.</li>
        <li className="offer-item">🔹 <strong>Wystąpienia gościnne</strong>: Udział w eventach sportowych, konferencjach i szkołach – motywacja prosto od mistrza.</li>
        <li className="offer-item">🔹 <strong>Wystąpienia motywacyjne</strong>: Prelekcje o dyscyplinie, motywacji i drodze do sukcesu, oparte na moich doświadczeniach.</li>
      </ul>
      <p className="motivational-text">Szukasz czegoś więcej niż zwykłego treningu? Ze mną nauczysz się nie tylko technik kickboxingu, ale także dyscypliny, koncentracji i walki z własnymi słabościami. Niezależnie od wieku czy poziomu – pomogę Ci odkryć Twój pełny potencjał.</p>
      <div className="cta-section">
        <p className="cta-prompt">Chcesz trenować z mistrzem świata lub podjąć współpracę?</p>
        <Link to="/contact">
          <button className="cta-button">Napisz do mnie teraz</button>
        </Link>
      </div>
    </div>
  );
};

export default Offer;