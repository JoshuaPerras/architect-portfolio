import React from 'react';
import '../assets/styles/Header.css';

const Header = () => (
  <header className="header">
    <h1>Architectural Innovations</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
