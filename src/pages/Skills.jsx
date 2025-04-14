import { DiReact, DiJavascript1, DiFirebase, DiGithubBadge } from 'react-icons/di';
import { SiExpo } from 'react-icons/si';
import '../styles/skills.css';

const skills = [
  { name: 'React Native', icon: <DiReact size={50} color="#61DBFB" /> },
  { name: 'Expo', icon: <SiExpo size={40} color="#000" /> },
  { name: 'JavaScript', icon: <DiJavascript1 size={50} color="#f0db4f" /> },
  { name: 'Firebase', icon: <DiFirebase size={50} color="#FFA611" /> },
  { name: 'GitHub', icon: <DiGithubBadge size={50} color="#000" /> },
];

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills </h2>
      <p className="skills-description">
        These are the main technologies I work with:
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
