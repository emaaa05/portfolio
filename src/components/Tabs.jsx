import React, { useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Footer from './Footer';
import Skills from '../pages/Skills';
import '../styles/tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderTab = () => {
    switch (activeTab) {
      case 'Home': return <Home />;
      case 'About': return <About />;
      case 'Skills': return <Skills />;
      case 'Projects': return <Projects />;
      default: return <Home />;
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

            {!isMenuOpen && (
              <button
                className="hamburger-icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            )}

          <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
            {['Home', 'About', 'Skills', 'Projects'].map(tab => (
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
            {['Home', 'About', 'Skills', 'Projects'].map(tab => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </nav>

        <div className="tabs-content">
          {renderTab()}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Tabs;
