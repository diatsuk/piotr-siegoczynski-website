import React from 'react';

const About = () => {
  return (
    <div className="page offer-page">
      <div className="about-me">
        <h2>Moja droga do mistrzostwa</h2>

        <div className="about-content">

          <div className="bio">

            <div className="bio-section fadeIn">
              <h3>Początki kariery</h3>
              <p>Karierę sportową rozpocząłem w latach 80., a moje pierwsze sukcesy przyszły szybko – zarówno na arenie krajowej, jak i międzynarodowej.</p>
              <p>W ciągu lat zdobyłem tytuły mistrza Polski, Europy i świata w kickboxingu.</p>
            </div>
            <div className="bio-image">
              <img src="/old photo.jpg" alt="Początki kariery" />
            </div>

            <div className="bio-section fadeIn delay-1s">
              <h3>Moja filozofia</h3>
              <p>Dziś, oprócz własnych treningów, dzielę się doświadczeniem z innymi – jako trener, mentor i ambasador zdrowego stylu życia.</p>
              <p>Uczę nie tylko techniki walki, ale także odwagi, pokory i konsekwencji.</p>
            </div>
            <div className="bio-image">
              <img src="/pfp.jpg" alt="Filozofia treningu" />
            </div>

            <div className="bio-section fadeIn delay-2s">
              <h3>Największe osiągnięcia</h3>
              <p>Od ponad 30 lat jestem związany ze sportami walki – jako zawodnik, reprezentant Polski, a obecnie także trener i mentor.</p>
              <p>Na swoim koncie mam m.in. tytuł Mistrza Świata WAKO, wielokrotne Mistrzostwo Polski oraz udział w międzynarodowych galach i turniejach.</p>
            </div>
            <div className="bio-image">
              <img src="/champ.jpg" alt="Największe osiągnięcia" />
            </div>

            <div className="bio-section fadeIn delay-3s">
              <h3>Droga do mistrzostwa</h3>
              <p>Wierzę, że prawdziwy mistrz to nie ten, kto nigdy nie upadł — ale ten, kto zawsze wstaje.</p>
              <p>Zaczynałem od zwykłych treningów w małej sali, z marzeniem, że kiedyś zawalczę o coś więcej. Przez lata przeszedłem drogę od amatora do mistrza świata w kickboxingu.</p>
            </div>
            <div className="bio-image">
              <img src="/ring.jpg" alt="Droga do mistrzostwa" />
            </div>

            <div className="bio-section fadeIn delay-4s">
              <h3>Najważniejsze lekcje</h3>
              <p>Kickboxing nauczył mnie, że najważniejsze walki to te, które toczymy w sobie — ze zmęczeniem, wymówkami, lenistwem i brakiem wiary w siebie.</p>
              <p>Dziś nie tylko trenuję, ale i szkolę innych — przekazując im to, czego sam nauczyłem się przez dekady.</p>
            </div>
            <div className="bio-image">
              <img src="/trophy.jpg" alt="Najważniejsze lekcje" />
            </div>

            <div className="bio-section fadeIn delay-5s">
              <a href="/contact" className="cta-button">Umów się na trening</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
