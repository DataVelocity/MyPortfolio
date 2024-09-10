import React from 'react';
import './styles/Experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      
      <div className="experience-timeline">
        <div className="timeline-item">
          {/* <img src="/path-to-your-company-logo.png" alt="Company Logo" className="company-logo" /> */}
          <div className="experience-header">
            <h3>Software Engineer Intern</h3>
            <p><strong>Capgemini Technology Services India Pvt.Ltd.</strong> - Mumbai, India</p>
            <p><strong>February 2023 - May 2023</strong></p>
          </div>
          <ul>
            <li>Developed and maintained features for the company's web application using React.js and Node.js.</li>
            <li>Collaborated with the development team to improve application performance and user experience.</li>
            <li>Assisted in debugging and troubleshooting application issues.</li>
          </ul>
          <div className="technologies-used">
            <p><strong>Technologies Used:</strong> React.js, Node.js, MongoDB</p>
          </div>
        </div>

        <div className="timeline-item">
          {/* <img src="/path-to-your-company-logo.png" alt="Company Logo" className="company-logo" /> */}
          <div className="experience-header">
            <h3>Java Full Stack Developer with React.js</h3>
            <p><strong>Capgemini Technology Services India Pvt.Ltd.</strong> - Mumbai, India</p>
            <p><strong>August 2023 - Present</strong></p>
          </div>
          <ul>
            <li>Contributed to the development of scalable and maintainable code for various projects.</li>
            <li>Worked on both front-end and back-end development tasks, utilizing technologies like React.js and Express.js.</li>
            <li>Participated in code reviews and provided feedback to improve code quality.</li>
          </ul>
          <div className="technologies-used">
            <p><strong>Technologies Used:</strong> React.js, Express.js, PostgreSQL</p>
          </div>
        </div>
      </div>

      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ⬆️
      </button>
    </section>
  );
}

export default Experience;
