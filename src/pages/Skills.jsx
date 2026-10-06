import { DiReact, DiJavascript1, DiFirebase, DiGithubBadge, DiNodejs, DiPython } from 'react-icons/di';
import { SiExpo, SiExpress, SiPostgresql, SiCplusplus } from 'react-icons/si';
import '../styles/Skills.css';

const skills = [
  { name: 'React Native', icon: <DiReact size={50} color="#61DBFB" /> },
  { name: 'Node.js', icon: <DiNodejs size={50} color="#4f8f3a" /> },
  { name: 'Express', icon: <SiExpress size={42} color="#102a43" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={45} color="#336791" /> },
  { name: 'C++', icon: <SiCplusplus size={50} color="#00599C" /> },
  { name: 'C#', icon: <span className="text-tech-icon">C#</span> },
  { name: 'Python', icon: <DiPython size={50} color="#3776AB" /> },
  { name: 'Expo', icon: <SiExpo size={40} color="#000" /> },
  { name: 'JavaScript', icon: <DiJavascript1 size={50} color="#f0db4f" /> },
  { name: 'Firebase', icon: <DiFirebase size={50} color="#FFA611" /> },
  { name: 'GitHub', icon: <DiGithubBadge size={50} color="#000" /> },
];

function Skills({ language = 'es' }) {
  const isEnglish = language === 'en';

  return (
    <section className="skills-section matrix-section" id="tecnologias">
      <p className="section-kicker">{isEnglish ? 'TOOLBOX' : 'CAJA DE HERRAMIENTAS'}</p>
      <h2 className="skills-title">{isEnglish ? 'Technologies I use to build.' : 'Tecnologías que uso para construir.'}</h2>
      <p className="skills-description">
        {isEnglish ? 'A growing stack chosen to solve concrete problems.' : 'Un stack en movimiento, elegido para resolver problemas concretos.'}
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
