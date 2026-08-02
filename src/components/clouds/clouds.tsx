import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { getDayState } from 'reducers/day-state';

import styles from './clouds.module.scss';

const Clouds: FC = () => {
  const dayState = useSelector(getDayState);
  const isStorm = dayState === 'dark-theme';
  const farClouds = Array.from({ length: 8 }, (_, index) => index + 1);
  const nearClouds = Array.from({ length: 7 }, (_, index) => index + 1);

  return (
    <div className={`${styles.clouds} ${isStorm ? styles.storm : ''}`} aria-hidden="true">
      <div className={styles.farLayer}>
        {farClouds.map(item => (
          <span className={styles.cloud} key={`far-${item}`} />
        ))}
      </div>

      <div className={styles.nearLayer}>
        {nearClouds.map(item => (
          <span className={styles.cloud} key={`near-${item}`}>
            {isStorm ? <i className={styles.rain} /> : null}
            {isStorm && item % 2 === 0 ? <i className={styles.bolt} /> : null}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Clouds;
