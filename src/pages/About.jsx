import profile from '../assets/perfil.jpeg';
import '../styles/about.css';

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-left">
          <h2 className="about-title">ABOUT ME</h2>

          <p className="about-paragraph">
            Hi! I'm a <strong>Front-End Developer</strong> focused on building beautiful and intuitive <strong>mobile apps</strong> using <strong>React Native</strong> 🚀.
          </p>

          <p className="about-paragraph">
            I enjoy transforming ideas into real, usable apps. I'm always learning, experimenting, and improving my skills to create better user experiences.
          </p>
        </div>

        <div className="about-right">
          <img src={profile} alt="Profile" className="about-img" />
        </div>
      </section>

      <section className="about-grid-section">
        <div className="about-grid">
          <div className="about-item">
            <h4> Location</h4>
            <p>Argentina</p>
          </div>
          <div className="about-item">
            <h4>Tech I Use</h4>
            <p>React Native, React Js, Expo</p>
          </div>
          <div className="about-item">
            <h4>Currently Learning</h4>
            <p>React Navigation, Context API, UI libraries</p>
          </div>
          <div className="about-item">
            <h4>Goals</h4>
            <p>Work remotely, build full apps, join a dev team</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
