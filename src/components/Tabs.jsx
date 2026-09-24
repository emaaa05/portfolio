import React, { useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Footer from './Footer';
import Skills from '../pages/Skills';
import '../styles/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');

  const labels = language === 'es'
    ? ['Inicio', 'Sobre mí', 'Tecnologías', 'Proyectos']
    : ['Home', 'About', 'Skills', 'Projects'];

  const toggleLanguage = () => {
    const translations = {
      'Inicio': 'Home', 'Sobre mí': 'About', 'Tecnologías': 'Skills', 'Proyectos': 'Projects',
      'Home': 'Inicio', 'About': 'Sobre mí', 'Skills': 'Tecnologías', 'Projects': 'Proyectos',
    };
    setActiveTab(translations[activeTab]);
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'Inicio': case 'Home': return <Home language={language} />;
      case 'Sobre mí': case 'About': return <About language={language} />;
      case 'Tecnologías': case 'Skills': return <Skills language={language} />;
      case 'Proyectos': case 'Projects': return <Projects language={language} />;
      default: return <Home language={language} />;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false); 
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        <nav className="tabs-nav">
          <div className="brand-lockup">
            <span className="brand-mark">EC</span>
            <span className="brand-copy">FULLSTACK · UTN</span>
          </div>

          <button
            className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
            {labels.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tabs-desktop-menu">
            {labels.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
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

          {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </nav>

        <div className="tabs-content">
          {renderTab()}
        </div>

        <Footer language={language} />
      </div>
    </div>
  );
};

export default Tabs;
