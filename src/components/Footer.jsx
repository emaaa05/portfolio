import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer({ language = 'es' }) {
  return (
    <section className="footer">
      <h2 className='footer-title'>{language === 'en' ? 'Get in touch' : 'Contacto'}</h2>
      <p className="footer-intro">
        {language === 'en'
          ? 'Open to trainee and junior fullstack opportunities.'
          : 'Disponible para oportunidades trainee y junior fullstack.'}
      </p>
      <div className="footer-links">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=emanuelcorradini@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          title={language === 'en' ? 'Send me an email with Gmail' : 'Enviarme un email con Gmail'}
        >
          <FaEnvelope />
        </a>
        <a href="https://github.com/emaaa05" target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/emanuel-corradini-8bb435229" target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
          <FaLinkedin />
        </a>
        <p className='footer-foot'>
          © {new Date().getFullYear()} Emanuel Corradini — {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </p>
      </div>
    </section>
  );
}

export default Footer;
