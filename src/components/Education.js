import React from 'react';
import './styles/Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <div className="education-icon-container">
            <FontAwesomeIcon icon={faUniversity} className="education-icon" />
            <div className="tooltip">University Level Education</div>
          </div>
          <h3>B.Tech in Computer Science & Engineering</h3>
          <p><strong>Lovely Professional University</strong> - Punjab, India</p>
          <p><strong>July 2019 - June 2023</strong></p>
          <ul>
            <li>Relevant Outcomes: Java, DSA, Web Development, Database Systems.</li>
            <li>Graduated with Honors.</li>
            <li>Class Representative in College</li>
          </ul>
        </div>

        <div className="education-item">
          <div className="education-icon-container">
            <FontAwesomeIcon icon={faGraduationCap} className="education-icon" />
            <div className="tooltip">Intermediate Level Education</div>
          </div>
          <h3>Intermediate</h3>
          <p><strong>B.N.College, Bhagalpur</strong> - Bihar, India</p>
          <p><strong>May 2016 - May 2018</strong></p>
          <ul>
            <li>Relevant Course: Mathematics, Physics, Chemistry, English & Hindi</li>
            <li>+2 with Distinction.</li>
            <li>President of Cricket Club.</li>
          </ul>
        </div>

        <div className="education-item">
          <div className="education-icon-container">
            <FontAwesomeIcon icon={faSchool} className="education-icon" />
            <div className="tooltip">High School Education</div>
          </div>
          <h3>High School</h3>
          <p><strong>J.N.K.T High School, Khagaria</strong> - Bihar, India</p>
          <p><strong>March 2016</strong></p>
          <ul>
            <li>Relevant Course: Mathematics, Social Science, Hindi, English, & Sanskrit</li>
            <li>Passed with First Division.</li>
            <li>CM at School.</li>
          </ul>
        </div>
        {/* Add more education items as needed */}
      </div>
    </section>
  );
}

export default Education;
