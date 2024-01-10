import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { getMenuState } from 'reducers/menu-state';

import styles from './rocket.module.scss';

const Rocket: FC = () => {
  const menuState = useSelector(getMenuState);

  return (
    <div className={`${styles.rocketWrap} ${menuState ? styles.hide : ''}`}>
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
