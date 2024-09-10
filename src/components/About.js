import React from 'react';
import './styles/About.css';
import myPicture from "../assets/pic.jpg";

function About() {
  return (
    <section className="about">
      <img src={myPicture} alt="Deepak Raj" className="profile-img" />
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <p>
          Hello! I'm <strong>Deepak Raj</strong>, a passionate and forward-thinking 💡 Software Engineer with a strong drive for continuous learning and growth 📚. Specializing in full-stack development with expertise in <span className="highlight">Java based Spring Framework ☕</span>, <span className="highlight">React 🔄</span>, and cutting-edge technologies 💻, I am committed to creating innovative, scalable solutions that meet evolving business needs 🌐. My experience at <strong>Capgemini Technology</strong> has not only deepened my technical skills but also fueled my enthusiasm for tackling complex challenges 🧩 and collaborating within dynamic, agile teams 🤖. I am eager to leverage my knowledge and adaptability to contribute to impactful projects 🚀 and deliver exceptional user experiences 🌟.
        </p>
        <p>
          With a solid background in Computer Science and practical experience with modern web technologies, I excel in turning complex problems into elegant, intuitive designs.
        </p>
        <p>
          In my current role at <strong>Capgemini Technology</strong>, I focus on developing scalable web applications using <span className="highlight">Java, React.js, Angular, Node.js</span>, and other technologies. I thrive in challenging environments that foster professional growth and innovation.
        </p>
        <p>
          Outside of work, I contribute to open-source projects, explore new technologies, and stay updated with the latest industry trends. Let's connect and create something amazing together!
        </p>
        <a href="mailto:draj89378@gmail.com" className="call-to-action">Get in Touch</a>
      </div>
    </section>
  );
}

export default About;
