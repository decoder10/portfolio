import React, { FC } from 'react';

import styles from './home.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <h1>Hello I'm Aram</h1>
      <h2>Front End Developer (Web / Mobile)</h2>
      <p>Nice to meet you</p>
    </div>
  );
};

export default Home;
