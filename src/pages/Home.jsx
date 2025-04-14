import React from 'react';
import '../styles/home.css';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/dev.jpg';
import devImage from '../assets/dev2.jpg';

function Home() {
  return (
    <>
      <section className="home-section">
        <div className="home-left">
          <p className="greeting">Greetings!</p>
          <h1 className="name">I'M EMANUEL CORRADINI</h1>
          <h2 className="role">
            <Typewriter
              words={['React Native Developer |']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h2>
        </div>

        <div className="home-right">
          <img src={profileImage} alt="Ema profile" className="profile-img" />
        </div>
      </section>

      <section className="about-section">
        <div className="about-left">
          <h2 className="about-title">LET ME INTRODUCE MYSELF</h2>
          <p className="about-text">
            I'm a React Native Developer passionate about building mobile apps for iOS and Android platforms.
          </p>
          <p className="about-text">
            I specialize in creating clean and user-friendly interfaces using React Native, React, and JavaScript.
          </p>
          <p className="about-text">
            I'm always eager to learn and explore new technologies. I enjoy working on real-world projects that challenge my skills and help me grow as a developer.
          </p>
        </div>

        <div className="about-right">
          <img src={devImage} alt="Ema about" className="about-img" />
        </div>
      </section>
    </>
  );
}

export default Home;
