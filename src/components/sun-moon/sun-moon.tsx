import React, { FC } from 'react';

import styles from './sun-moon.module.scss';

interface IProps {
  dayState: TDayState;
}

const SunMoon: FC<IProps> = props => {
  const { dayState } = props;

  const starsArray = Array.from({ length: 150 }, (_, index) => index + 1);

  return (
    <div className={styles.sunMoonWrap}>
      <div className={`${styles.circle} ${dayState === 'light-theme' ? styles.show : styles.hide}`}>
        <div className={styles.sun} />
        <div className={styles.moon} />
      </div>

      <div className={`${styles.starSkye} ${dayState === 'light-theme' ? styles.hide : styles.show}`}>
        {starsArray.map(item => {
          return <span className={`${styles.star} ${styles[`star${item}`]}`} key={item} />;
        })}
      </div>
    </div>
  );
};

export default SunMoon;
