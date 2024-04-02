// components/About.js
import React from 'react';
import myPhoto from './photo.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2 style={{ fontFamily: 'cursive, sans-serif' }}>Willkommen!</h2>
      <div>
      <img src={myPhoto} alt="My Profile" style={{ maxWidth: '20%', height: 'auto' }} />
      <p style={{ maxWidth: '60%', margin: '0 auto', color: 'black' }}>
      <span style={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive, sans-serif' }}>Ich bin Zhyldyz und absolviere derzeit eine Weiterbildung zum Cloud Computing und DevOps Engineer.</span>
<p style={{ fontFamily: 'cursive, sans-serif' }}>
    Meine Leidenschaft für Technologie und ständige Neugier treiben mich an, mein Wissen und meine Fähigkeiten in den Bereichen Cloud-Infrastruktur, Automatisierung, Containerisierung und Continuous Integration/Continuous Deployment (CI/CD) zu erweitern.
    Mein Ziel ist es, mich als Experte zu etablieren und innovative Lösungen zu entwickeln, um Unternehmen dabei zu unterstützen, ihre IT-Infrastruktur effizienter zu betreiben und ihre Entwicklungsprozesse zu verbessern.
</p>

        </p>
      </div>
    </section>
  );
}

export default About;
