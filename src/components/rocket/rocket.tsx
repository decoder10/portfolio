import React, { FC } from 'react';

import styles from './rocket.module.scss';

const Rocket: FC = () => {
  return (
    <div className={styles.rocketWrap}>
      <div className={styles.rocket}>
        <div className={styles.rocketWindow}></div>
      </div>
      <div className={styles.rocketFlame} />

      <div className={styles.flag}>
        <div className={styles.colors} />
      </div>
    </div>
  );
};

export default Rocket;
