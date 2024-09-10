import React from 'react';
import './styles/Certificate.css';

function Certificate() {
  return (
    <section className="certificate">
      <h2>Certifications</h2>
      <div className="certificate-list">
        <div className="certificate-item">
          <div className="certificate-content">
            <h3>Java Full Stack Developer</h3>
            <p><strong>Capgemini</strong></p>
            <p><strong>Issued:</strong> May 2024</p>
            <p><strong>Expiration:</strong> N/A</p>
            <p><a href="https://www.credly.com/badges/your-certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a></p>
          </div>
        </div>

        <div className="certificate-item">
          <div className="certificate-content">
            <h3>AWS Certified Cloud Practitioner</h3>
            <p><strong>AWS</strong></p>
            <p><strong>Issued:</strong> Sep 15, 2023</p>
            <p><strong>Expiration:</strong> Sep 15, 2026</p>
            <p><a href="https://www.udemy.com/certificate/your-certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a></p>
          </div>
        </div>

        <div className="certificate-item">
          <div className="certificate-content">
            <h3>Node.js Developer</h3>
            <p><strong>Udemy</strong></p>
            <p><strong>Issued:</strong> 1 November 2023</p>
            <p><strong>Expiration:</strong> N/A</p>
            <p><a href="https://www.coursera.org/certificates/your-certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a></p>
          </div>
        </div>

        <div className="certificate-item">
          <div className="certificate-content">
            <h3>Data Structure and Algorithms</h3>
            <p><strong>GeeksforGeeks</strong></p>
            <p><strong>Issued:</strong> September 2022</p>
            <p><strong>Expiration:</strong> N/A</p>
            <p><a href="https://www.coursera.org/certificates/your-certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
