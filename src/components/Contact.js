import React from 'react';
import './styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
          <p><FontAwesomeIcon icon={faPhone} /> <strong>Contact:</strong> +91-7250236569</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> draj89378@gmail.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Current:</strong> Navi Mumbai, Maharashtra, India</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Permanent:</strong> Greater Noida Sector-03, U.P, India</p>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/deepak-raj-7250236569/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/DataVelocity" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/yodha.group/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
     
    </section>
  );
}

export default Contact;
