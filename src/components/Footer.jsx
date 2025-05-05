import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <section className="footer">
      <h2 className='footer-title'>Contact Me </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
        <a href="mailto:emanuelcorradini@gmail.com" className="icon-link" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/emaaa05" target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/emanuel-corradini-8bb435229" target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
          <FaLinkedin />
        </a>
        <p className='footer-foot'>
          © {new Date().getFullYear()} Emanuel Corradini — All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
