import '../styles/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/portfolio.png';
import MatrixRain from '../components/MatrixRain';

function Home({ language = 'es' }) {
  const isEnglish = language === 'en';

  return (
    <section className="home-section" id="inicio">
      <div className="home-left">
        <p className="greeting"><span className="status-dot" />{isEnglish ? 'PROGRAMMING · UTN · ARGENTINA' : 'PROGRAMACIÓN · UTN · ARGENTINA'}</p>
        <h1 className="name">EC<br /><span>DEV</span></h1>
        <h2 className="role">
          <Typewriter
            words={isEnglish ? ['Fullstack Developer', 'Backend, APIs and data', 'Interfaces that make sense'] : ['Desarrollador Fullstack', 'Backend, APIs y datos', 'Interfaces que se entienden']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h2>
        <p className="hero-copy">
          {isEnglish
            ? 'I turn real problems into useful digital products, from data and APIs to the interface people use.'
            : 'Transformo problemas reales en productos digitales útiles, desde los datos y las APIs hasta la interfaz que usa la gente.'}
        </p>
        <div className="home-actions">
          <a className="hero-link primary" href="#proyectos">{isEnglish ? 'Explore projects' : 'Explorar proyectos'} <span>↘</span></a>
          <a className="hero-link" href="#contacto">{isEnglish ? 'Get in touch' : 'Hablemos'} <span>↗</span></a>
        </div>
        <div className="hero-meta">
          <span><b>01</b> {isEnglish ? 'BUILDING' : 'CONSTRUYENDO'}</span>
          <span><b>02</b> {isEnglish ? 'LEARNING' : 'APRENDIENDO'}</span>
          <span><b>03</b> FULLSTACK</span>
        </div>
      </div>

      <div className="home-right">
        <div className="portrait-frame">
          <span className="portrait-index">EC // 001</span>
          <div className="portrait-media">
            <img src={profileImage} alt={isEnglish ? 'EC Dev portrait' : 'Retrato de EC Dev'} className="profile-img" />
            <MatrixRain />
            <span className="bullet-streak bullet-streak--upper" aria-hidden="true" />
            <span className="bullet-streak bullet-streak--lower" aria-hidden="true" />
            <span className="portrait-scanlines" aria-hidden="true" />
          </div>
          <span className="portrait-caption">{isEnglish ? 'HUMAN / DEVELOPER' : 'HUMANO / DESARROLLADOR'}</span>
        </div>
        <span className="hero-coordinate">34°36' S &nbsp; 58°23' W</span>
      </div>
    </section>
  );
}

export default Home;
