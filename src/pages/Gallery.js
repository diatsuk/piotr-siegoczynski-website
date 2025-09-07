import React from 'react';

const Gallery = () => {
  return (
    <div className="page offer-page">
      <h1>Moje sportowe chwile</h1>
      <p>Na ringu i poza nim – moje sportowe życie w kadrach</p>
      <div className="gallery-grid">
        <div className="gallery-item"><img src="/zzzzzzzzzzzzzzimg1490male.jpg" alt=" " /></div>
        <div className="gallery-item"><img src="/champ.jpg" alt=" " /></div>
        <div className="gallery-item"><img src="/trophy.jpg" alt=" " /></div>
        <div className="gallery-item"><img src="/old photo.jpg" alt=" " /></div>
        <div className="gallery-item"><img src="/ring.jpg" alt=" " /></div>
        <div className="gallery-item"><img src="/inmvfvfvg.jpg" alt=" " /></div>
        {/* Add more items */}
      </div>
    </div>
  );
};

export default Gallery;
