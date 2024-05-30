'use client';
import React from 'react';
import styles from './PrBar.module.scss';

function PrBar() {
  const handleResumeClick = () => {
    // Opens the resume link in a new tab
    window.open("https://docs.google.com/document/d/1q68lqV0-lO5jTauJ0hN1AILSumZ8AbTHlM2NY96ilgI/edit?usp=sharing", "_blank", "noopener,noreferrer");
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
      <div className={styles.navItemsLeft}>
      <button className={styles.home} onClick={() => scrollToSection('home')}>SS<sup>TM</sup></button>
        <button className={styles.about} onClick={() => scrollToSection('about')}>ABOUT</button>
        <button className={styles.projects} onClick={() => scrollToSection('projects')}>PROJECTS</button>
      </div>
      <div className={styles.navItemsRight}>
      <button onClick={handleResumeClick} className={styles.resume}>RESUME</button>
        <button className={styles.contact} onClick={() => scrollToSection('contact')}>CONTACT ME</button>
      </div>
      </div>
    </nav>
  );
}

export default PrBar;
