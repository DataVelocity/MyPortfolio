import React from 'react';
import './styles/Home.css';

function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>
      <div className="content">
        <h1>Java Developer</h1>
        <p>
          I'm a <strong>Mumbai</strong> based <strong>Java Full Stack with React.js Developer</strong>, currently working at <strong>Capgemini Technology India</strong> where I help to build modern web applications.
        </p>
        <p>
          In my free time, you can catch me <strong>at the gym, watching podcasts, playing outdoor games, and motivating others</strong>.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/deepak-raj-7250236569/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/DataVelocity" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/yodha.group/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="buttons">
        <a href="/Deepak Raj ResumeV4.0.pdf" className="btn btn-primary" download>
          {/* <a href="/resume.pdf" className="btn btn-primary" download> */}
            <i className="fas fa-download"></i> Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
