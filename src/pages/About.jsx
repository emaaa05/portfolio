import '../styles/About.css';

function About({ language = 'es' }) {
  const isEnglish = language === 'en';

  return (
    <>
      <section className="about-section matrix-section" id="perfil">
        <div className="about-left">
          <p className="section-kicker">{isEnglish ? 'BACKGROUND' : 'TRAYECTORIA'}</p>
          <h2 className="about-title">{isEnglish ? 'Learning by building.' : 'Aprender haciendo.'}</h2>

          <p className="about-paragraph">
            {isEnglish ? <>I am studying <strong>Programming</strong> at the <strong>National Technological University</strong>. I am training as a <strong>fullstack</strong> developer, especially interested in building complete and maintainable systems.</> : <>Soy estudiante de la <strong>Tecnicatura Universitaria en Programación</strong> en la <strong>Universidad Tecnológica Nacional</strong>. Me estoy formando como desarrollador <strong>fullstack</strong>, con especial interés en construir sistemas completos y mantenibles.</>}
          </p>

          <p className="about-paragraph">
            {isEnglish ? 'I learn by building: every project is an opportunity to research, test a solution and leave it better documented than I found it.' : 'Aprendo construyendo: cada proyecto es una oportunidad para investigar, probar una solución y dejarla mejor documentada que como la encontré.'}
          </p>
        </div>

      </section>

      <section className="about-grid-section matrix-section">
        <div className="about-grid">
          <div className="about-item">
            <h4>{isEnglish ? 'Based in' : 'Base'}</h4>
            <p>Argentina · UTN</p>
          </div>
          <div className="about-item">
            <h4>{isEnglish ? 'Focus' : 'Enfoque'}</h4>
            <p>{isEnglish ? 'Fullstack with backend depth' : 'Fullstack con base backend'}</p>
          </div>
          <div className="about-item">
            <h4>{isEnglish ? 'Currently learning' : 'Ahora estudio'}</h4>
            <p>{isEnglish ? 'Architecture, data and systems' : 'Arquitectura, datos y sistemas'}</p>
          </div>
          <div className="about-item">
            <h4>{isEnglish ? 'Next step' : 'Próximo paso'}</h4>
            <p>{isEnglish ? 'Building with teams that share knowledge' : 'Construir en equipos que compartan conocimiento'}</p>
          </div>
        </div>
      </section>

      <section className="workflow-section matrix-section">
        <p className="section-kicker">{isEnglish ? 'WORKFLOW' : 'FORMA DE TRABAJO'}</p>
        <h2 className="about-title">{isEnglish ? 'From the problem to the product.' : 'Del problema al producto.'}</h2>
        <div className="workflow-grid">
          {[
            { es: 'Entender', en: 'Understand', textEs: 'Definir qué problema se quiere resolver y para quién.', textEn: 'Define the problem and who the product is for.' },
            { es: 'Diseñar', en: 'Design', textEs: 'Ordenar el dominio, los flujos y la estructura del sistema.', textEn: 'Shape the domain, flows and system structure.' },
            { es: 'Construir', en: 'Build', textEs: 'Conectar API, datos e interfaz en una solución mantenible.', textEn: 'Connect API, data and interface in a maintainable solution.' },
            { es: 'Mejorar', en: 'Improve', textEs: 'Probar, documentar y aprender de lo que se construyó.', textEn: 'Test, document and learn from what was built.' },
          ].map((step) => (
            <article className="workflow-step" key={step.es}>
              <h3>{isEnglish ? step.en : step.es}</h3>
              <p>{isEnglish ? step.textEn : step.textEs}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
