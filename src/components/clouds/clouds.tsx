import React, { FC } from 'react';

import styles from './clouds.module.scss';

const Clouds: FC = () => {
  const cloudsArray = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className={styles.clouds}>
      <div className={styles.rightMove}>
        {cloudsArray.map(item => {
          return <div className={styles.cloud} />;
        })}
      </div>

      <div className={styles.leftMove}>
        {cloudsArray.map(item => {
          return <div className={styles.cloud} />;
        })}
      </div>
    </div>
  );
};

export default Clouds;
