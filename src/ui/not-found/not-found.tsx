import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './notFound.module.scss';

const NotFound: FC = () => {
  return (
    <section className={styles.notFound}>
      <span>404</span>
      <h1>This page drifted out of orbit.</h1>
      <p>The link may be outdated, but the portfolio is still right where you left it.</p>
      <Link to="/">Return home</Link>
    </section>
  );
};

export default NotFound;
