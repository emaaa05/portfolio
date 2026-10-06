import { useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Footer from './Footer';
import Skills from '../pages/Skills';
import MatrixAccess from './MatrixAccess';
import '../styles/Tabs.css';

const Tabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [hasAccess, setHasAccess] = useState(false);

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  if (!hasAccess) {
    return (
      <MatrixAccess
        language={language}
        onLanguageToggle={toggleLanguage}
        onUnlock={() => setHasAccess(true)}
      />
    );
  }

  const navItems = language === 'es'
    ? [{ id: 'perfil', label: 'Perfil' }, { id: 'tecnologias', label: 'Stack' }, { id: 'proyectos', label: 'Proyectos' }, { id: 'contacto', label: 'Contacto' }]
    : [{ id: 'perfil', label: 'About' }, { id: 'tecnologias', label: 'Stack' }, { id: 'proyectos', label: 'Projects' }, { id: 'contacto', label: 'Contact' }];

  const closeMenu = () => setIsMenuOpen(false);
  const renderNavItems = () => navItems.map(({ id, label }) => (
    <a key={id} href={`#${id}`} className="tab-button" onClick={closeMenu}>
      {label}
    </a>
  ));

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        <nav className="tabs-nav">
          <a className="brand-lockup" href="#inicio" onClick={closeMenu} aria-label="EC Dev, inicio">
            <span className="brand-mark">EC</span>
            <span className="brand-copy">FULLSTACK <span>/</span> UTN</span>
          </a>

          <button
            className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={language === 'es' ? 'Abrir navegación' : 'Open navigation'}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
            {renderNavItems()}
          </div>

          <div className="tabs-desktop-menu">
            {renderNavItems()}
          </div>

          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            <span className={language === 'es' ? 'selected' : ''}>ES</span>
            <span>/</span>
            <span className={language === 'en' ? 'selected' : ''}>EN</span>
          </button>

          {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </nav>

        <div className="tabs-content">
          <Home language={language} />
          <About language={language} />
          <Skills language={language} />
          <Projects language={language} />
        </div>

        <Footer language={language} />
      </div>
    </div>
  );
};

export default Tabs;
