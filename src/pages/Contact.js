import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="page contact-page">
      <h1 className="contact-title">Skontaktuj się ze mną</h1>
      <p className="contact-intro">Masz pytania? Chcesz zaprosić mnie na wydarzenie, przeprowadzić trening lub podjąć współpracę? Jestem gotów wesprzeć Cię na Twojej drodze!</p>
      <div className="contact-details">
        <p className="contact-item">📩 <strong>E-mail:</strong> <a href="mailto:kontakt@piotrsiegoczynski.pl">kontakt@piotrsiegoczynski.pl</a></p>
        <p className="contact-item">📱 <strong>Telefon:</strong> <a href="tel:+48123456789">+48 123 456 789</a></p>
        <p className="contact-item">📍 <strong>Lokalizacja:</strong> Warszawa</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Twoje imię" className="form-input" />
        <input type="email" placeholder="Twój e-mail" className="form-input" />
        <textarea placeholder="Twoja wiadomość" className="form-textarea"></textarea>
        <button type="submit" className="cta-button">Wyślij wiadomość</button>
      </form>
      <p className="contact-note">Lub napisz bezpośrednio – czekam na Twój ruch!</p>
    </div>
  );
};

export default Contact;