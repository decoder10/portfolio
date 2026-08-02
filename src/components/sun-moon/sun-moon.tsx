import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { getDayState } from 'reducers/day-state';

import styles from './sun-moon.module.scss';

const SunMoon: FC = () => {
  const dayState = useSelector(getDayState);

  const starsArray = Array.from({ length: 150 }, (_, index) => index + 1);
  const spotArray = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <div className={styles.sunMoonWrap}>
      <div className={`${styles.circle} ${dayState === 'light-theme' ? styles.show : styles.hide}`}>
        <div className={styles.sun} />
        <div className={styles.moon}>
          {spotArray.map(item => (
            <span key={item} className={`${styles.spot} ${styles[`spot--${item}`]}`} />
          ))}
        </div>
      </div>

      {dayState === 'dark-theme' ? (
        <div className={`${styles.starSkye} ${styles.show}`}>
          {starsArray.map(item => {
            return <span className={`${styles.star} ${styles[`star${item}`]}`} key={item} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SunMoon;
