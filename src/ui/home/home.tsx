import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './home.module.scss';

const Home: FC = () => {
  return (
    <section className={styles.home}>
      <p className={styles.eyebrow}>Hello, I’m Aram Mkrtchyan</p>
      <h1>Senior Front-End Engineer</h1>
      <p className={styles.intro}>
        I design and build fast, resilient web and mobile products with React, React Native and TypeScript.
      </p>

      <div className={styles.actions}>
        <Link to="/experience" className={styles.primaryAction}>
          Explore my work
        </Link>
        <Link to="/contacts" className={styles.secondaryAction}>
          Let’s talk
        </Link>
      </div>

      <ul className={styles.highlights} aria-label="Career highlights">
        <li>
          <strong>10+</strong>
          <span>years of experience</span>
        </li>
        <li>
          <strong>Web + Mobile</strong>
          <span>product engineering</span>
        </li>
        <li>
          <strong>Fintech</strong>
          <span>banking &amp; platforms</span>
        </li>
      </ul>
    </section>
  );
};

export default Home;
