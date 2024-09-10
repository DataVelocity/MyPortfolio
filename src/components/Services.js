import React from 'react';
import './styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faCode, faCogs } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section className="services">
      <h2>Services</h2>
      <div className="services-list">
        <div className="service-item">
          <FontAwesomeIcon icon={faLaptopCode} className="service-icon" />
          <h3>Web Development</h3>
          <p>Building responsive and dynamic websites using modern web technologies like React.js, HTML5, CSS3, and JavaScript.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faServer} className="service-icon" />
          <h3>Backend Development</h3>
          <p>Developing robust backend systems using Node.js, Express.js, and various databases like MySQL, MongoDB, and PostgreSQL.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faCode} className="service-icon" />
          <h3>API Development</h3>
          <p>Designing and implementing RESTful APIs to support mobile and web applications, ensuring high performance and scalability.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faCogs} className="service-icon" />
          <h3>DevOps</h3>
          <p>Implementing CI/CD pipelines, containerization with Docker, and automating workflows to enhance development processes.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
