import React, { FC } from 'react';

import styles from './birds.module.scss';

const Birds: FC = () => {
  const birdsArray = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className={styles.birdsContainer}>
      <div className={`${styles.birds} ${styles.front}`}>
        {birdsArray.map(item => {
          return (
            <div className={`${styles.bird} ${styles[`bird${item}`]}`} key={item}>
              <div className={styles.birdBody}></div>
              <div className={styles.wing1}>
                <div className={styles.wing2}>
                  <div className={styles.wing3}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`${styles.birds} ${styles.back}`}>
        {birdsArray.map(item => {
          return (
            <div className={`${styles.bird} ${styles[`bird${item}`]}`} key={item}>
              <div className={styles.birdBody}></div>
              <div className={styles.wing1}>
                <div className={styles.wing2}>
                  <div className={styles.wing3}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Birds;
