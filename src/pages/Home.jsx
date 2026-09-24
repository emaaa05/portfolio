import React from 'react';
import '../styles/home.css';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/dev.jpg';
import devImage from '../assets/dev2.jpg';

function Home({ language = 'es' }) {
  const isEnglish = language === 'en';

  return (
    <>
      <section className="home-section">
        <div className="home-left">
          <p className="greeting">{isEnglish ? 'University Programming Technician · UTN' : 'Tecnicatura Universitaria en Programación · UTN'}</p>
          <h1 className="name">EMANUEL<br />CORRADINI</h1>
          <h2 className="role">
            <Typewriter
              words={isEnglish ? ['Fullstack Developer', 'Backend, APIs and data', 'Interfaces that make sense'] : ['Desarrollador Fullstack', 'Backend, APIs y datos', 'Interfaces que se entienden']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h2>
        </div>

        <div className="home-right">
          <img src={profileImage} alt="Ema profile" className="profile-img" />
        </div>
      </section>

      <section className="about-section">
        <div className="about-left">
          <p className="section-kicker">{isEnglish ? 'PROFILE' : 'PERFIL'}</p>
          <h2 className="about-title">{isEnglish ? 'Code with intent, products with purpose.' : 'Código con criterio, producto con propósito.'}</h2>
          <p className="about-text">
            {isEnglish ? 'I build digital products end to end: from APIs, data and business logic to interfaces that are simple to use.' : 'Construyo productos digitales de punta a punta: desde APIs, datos y lógica de negocio hasta interfaces simples de usar.'}
          </p>
          <p className="about-text">
            {isEnglish ? 'I am currently studying Programming at UTN, combining technical foundations with projects that can reach the real world.' : 'Actualmente curso la Tecnicatura Universitaria en Programación en la UTN, donde combino fundamentos técnicos con proyectos que puedo llevar al mundo real.'}
          </p>
          <p className="about-text">
            {isEnglish ? 'I am especially interested in the intersection of interfaces, data and useful products.' : 'Me interesa especialmente el cruce entre interfaces, datos y productos útiles.'}
          </p>
        </div>

        <div className="about-right">
          <img src={devImage} alt="Ema about" className="about-img" />
        </div>
      </section>
    </>
  );
}

export default Home;
