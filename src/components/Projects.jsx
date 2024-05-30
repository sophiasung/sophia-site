'use client';
import styles from './Projects.module.scss';
import PrBar from '../components/PrBar.jsx';

function Projects({ id }) {

  return (
    <div id={id} className={styles.wrapper}>
      <PrBar/>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.line}></div>
      <div>
        WORK IN PROGRESS!
      </div>
    </div>
  );
}

export default Projects;
