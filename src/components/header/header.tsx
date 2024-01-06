import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { routeConfig } from 'routes/routes-config';

import styles from './header.module.scss';

interface IProps {
  dayState: TDayState;
}

const Header = (props: IProps) => {
  const { dayState } = props;

  const [menuState, setMenuState] = useState<boolean>(false);

  return (
    <>
      <header className={`${styles.mainHeader} ${menuState ? styles.active : ''}`}>
        <nav>
          {routeConfig.map(item => {
            const { path, title, isMenuItem } = item;

            return isMenuItem ? (
              <NavLink
                to={path || '/'}
                className={({ isActive }) =>
                  (isActive ? styles.active : '') +
                  ` ${styles.cloudWrap} ${dayState === 'dark-theme' ? styles.season : ''}`
                }
                style={{ animationDelay: `${Math.floor(Math.random() * 500)}ms` }}
                key={path}
                onClick={() => setMenuState(false)}
              >
                <span className={styles.bolt} />
                <span className={styles.cloud} />

                <p>{title}</p>
              </NavLink>
            ) : null;
          })}

          <a
            href={require('assets/images/cv.pdf')}
            download="Aram Mkrtchyan cv"
            className={`${styles.cloudWrap} ${dayState === 'dark-theme' ? styles.season : ''}`}
            onClick={() => setMenuState(false)}
          >
            <span className={styles.bolt} />
            <span className={styles.cloud} />

            <p>CV</p>
          </a>
        </nav>
      </header>

      <div className={styles.thunder} />
      <div className={styles.thunderSecond} />

      <button className={`${styles.menu} ${!menuState ? styles.active : ''}`} onClick={() => setMenuState(!menuState)}>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Header;
