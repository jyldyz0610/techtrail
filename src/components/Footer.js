// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
      
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://github.com/jyldyz0610?tab=repositories"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.linkedin.com/in/zhyldyz-anarkul/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="mailto:jyldyz0610@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li> {/* Gmail-Link */}
        </ul>
      </nav>
      <p>&copy; 2024 Zhyldyz</p>
    </footer>
  );
}

export default Footer;
