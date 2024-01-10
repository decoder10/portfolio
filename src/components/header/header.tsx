import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { routeConfig } from 'routes/routes-config';

import { getMenuState, setMenuStateAction } from 'reducers/menu-state';

import styles from './header.module.scss';

interface IProps {
  dayState: TDayState;
}

const Header = (props: IProps) => {
  const { dayState } = props;

  const menuState = useSelector(getMenuState);
  const dispatch = useDispatch();

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
                onClick={() => dispatch(setMenuStateAction(false))}
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
            onClick={() => dispatch(setMenuStateAction(false))}
          >
            <span className={styles.bolt} />
            <span className={styles.cloud} />

            <p>CV</p>
          </a>
        </nav>
      </header>

      <button
        className={`${styles.menu} ${!menuState ? styles.active : ''}`}
        onClick={() => dispatch(setMenuStateAction(!menuState))}
      >
        <span></span>
        <span></span>
      </button>

      {dayState === 'dark-theme' ? (
        <div className={`${styles.thunderGroup} ${menuState ? styles.active : ''}`}>
          <div className={styles.thunder} />
          <div className={styles.thunderSecond} />
        </div>
      ) : null}
    </>
  );
};

export default Header;
