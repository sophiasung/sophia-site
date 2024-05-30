'use client';
import React, { useEffect, useRef } from 'react';
import styles from './About.module.scss';
import image from '../assets/kitty.jpeg';

function About({ id }) {

  const resumeLink = 'https://docs.google.com/document/d/1q68lqV0-lO5jTauJ0hN1AILSumZ8AbTHlM2NY96ilgI/view';

  return (
    <div id={id} className={styles.wrapper}>
      <div className={styles.background}></div>
      <h1 className={styles.title}>About. About. About. About. About. About.</h1>
      <div className={styles.content}>
        <img className={styles.sophiapic} src={image} alt="Picture of Me" />
        <p className={styles.blurb}>
          <p className={styles.hi}>Hi, I'm Sophia! </p>
          I'm currently a junior at UC Berkeley majoring in Economics and minoring in Data Science. In addition to my academic pursuits, I'm deeply involved in web design and development.

          
          <br></br>
          <br></br>
          I'm originally from the suburbs of Chicago, but I now reside in the Bay Area.
          In my free time I enjoy watching movies, exploring different types of music, creating art, and immersing myself in nature, adventures, and new environments, always eager to learn something different every day.
          <br></br>
          <br></br>
          Thanks for stopping by :3
        </p>
      </div>
      <div className={styles.resumeDownload}>
      </div>
    </div>
  );
}

export default About;
