import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { getMenuState } from 'reducers/menu-state';

import alien from 'assets/images/alien.svg';
import cow from 'assets/images/cow.png';

import styles from './ufo.module.scss';

const Ufo: FC = () => {
  const menuState = useSelector(getMenuState);

  return (
    <>
      <div className={`${styles.ufoWrap} ${menuState ? styles.hide : ''}`}>
        <img src={alien} alt="" className={styles.ufoAlien} />
        <div className={styles.ufoGlass} />
        <div className={styles.ufoBody}>
          <div className={styles.ufoBodyFoot} />
          <div className={styles.ufoBodyFoot} />
        </div>
        <div className={styles.light} />
      </div>

      <img src={cow} alt="" className={`${styles.cow} ${menuState ? styles.hide : ''}`} />
    </>
  );
};

export default Ufo;
