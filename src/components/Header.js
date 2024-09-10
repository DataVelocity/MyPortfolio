import React from 'react';
import './styles/Header.css';
// import picture from "../assets/pic1.jpg";
// import myPicture from '../assets/pic.jpg'; 
function Header() {
  return (
    <header className="header">
      {/* <img src={picture} alt="Deepak Raj" className="profile-picture" /> */}
      {/* <img src={myPicture} alt="Deepak Raj" className="profile-picture" /> */}
      <h1>Deepak Raj</h1>
      <p className="tags"><b>Developer</b> || <b>Team Lead</b></p>
    </header>
  );
}

export default Header;
