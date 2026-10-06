import './Footer.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer({ language = 'es' }) {
  return (
    <section className="footer matrix-section" id="contacto">
      <h2 className='footer-title'>{language === 'en' ? 'Get in touch' : 'Contacto'}</h2>
      <p className="footer-intro">
        {language === 'en'
          ? 'Open to trainee and junior fullstack opportunities.'
          : 'Disponible para oportunidades trainee y junior fullstack.'}
      </p>
      <div className="footer-links">
        <a href="https://github.com/emaaa05" target="_blank" rel="noopener noreferrer" className="icon-link contact-link" title="GitHub">
          <FaGithub />
          <span>{language === 'en' ? 'View GitHub profile' : 'Ver perfil de GitHub'}</span>
        </a>
        <a href="https://www.linkedin.com/in/emanuel-corradini-8bb435229/" target="_blank" rel="noopener noreferrer" className="icon-link contact-link" title="LinkedIn">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=emanuelcorradini@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link contact-link" title={language === 'en' ? 'Send an email with Gmail' : 'Enviar un email con Gmail'}>
          <FaEnvelope />
          <span>Gmail</span>
        </a>
        <p className='footer-foot'>
          © {new Date().getFullYear()} EC Dev — {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </p>
      </div>
    </section>
  );
}

export default Footer;
