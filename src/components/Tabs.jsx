import React, { useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Footer from './Footer';
import Skills from '../pages/Skills';
import '../styles/tabs.css'; 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTab = () => {
    switch (activeTab) {
      case 'Home': return <Home />;
      case 'About': return <About />;
      case 'Skills': return <Skills />;
      case 'Projects': return <Projects />;
      default: return <Home />;
    }
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        <nav className="tabs-nav">
          {['Home', 'About', 'Skills', 'Projects'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
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
