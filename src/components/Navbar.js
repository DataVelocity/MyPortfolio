import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/portfolio" className="nav-link" onClick={toggleMenu}>Portfolio</Link></li>
        <li><Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link></li>
        <li><Link to="/education" className="nav-link" onClick={toggleMenu}>Education</Link></li>
        <li><Link to="/experience" className="nav-link" onClick={toggleMenu}>Experience</Link></li>
        <li><Link to="/work" className="nav-link" onClick={toggleMenu}>Work</Link></li>
        <li><Link to="/certificate" className="nav-link" onClick={toggleMenu}>Certificate</Link></li>
        <li><Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles/Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li><Link to="/" className="nav-link">Home</Link></li>
//         <li><Link to="/about" className="nav-link">About</Link></li>
//         <li><Link to="/services" className="nav-link">Services</Link></li>
//         <li><Link to="/portfolio " className="nav-link">Portfolio</Link></li>
//         <li><Link to="/skills" className="nav-link">Skills</Link></li>
//         <li><Link to="/education" className="nav-link">Education</Link></li>
//         <li><Link to="/experience" className="nav-link">Experience</Link></li>
//         <li><Link to="/work" className="nav-link">Work</Link></li>
//         <li><Link to="/certificate" className="nav-link">Certificate</Link></li>
//         <li><Link to="/contact" className="nav-link">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;