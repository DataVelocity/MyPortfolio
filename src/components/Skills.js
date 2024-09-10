import React from 'react';
import './styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <h3><FontAwesomeIcon icon={faCode} /> Programming Languages</h3>
          <div className="skill-bar">
            <div className="bar" style={{ width: '80%' }}>Java</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '70%' }}>JavaScript</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '60%' }}>Python</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '50%' }}>C++</div>
          </div>
        </div>
        <div className="skill-item">
          <h3><FontAwesomeIcon icon={faLaptopCode} /> Web Development</h3>
          <div className="skill-bar">
            <div className="bar" style={{ width: '85%' }}>React.js</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '80%' }}>HTML & CSS</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '75%' }}>Node.js</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '70%' }}>RESTful APIs</div>
          </div>
        </div>
        <div className="skill-item">
          <h3><FontAwesomeIcon icon={faDatabase} /> Databases</h3>
          <div className="skill-bar">
            <div className="bar" style={{ width: '80%' }}>MySQL</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '70%' }}>MongoDB</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '65%' }}>PostgreSQL</div>
          </div>
        </div>
        <div className="skill-item">
          <h3><FontAwesomeIcon icon={faTools} /> Tools & Technologies</h3>
          <div className="skill-bar">
            <div className="bar" style={{ width: '90%' }}>Git & GitHub</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '80%' }}>Docker</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '70%' }}>Jenkins</div>
          </div>
          <div className="skill-bar">
            <div className="bar" style={{ width: '85%' }}>Visual Studio Code</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
