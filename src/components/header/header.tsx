import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { routeConfig } from 'routes/routes-config';

import { getDayState } from 'reducers/day-state';
import { getMenuState, setMenuStateAction } from 'reducers/menu-state';

import styles from './header.module.scss';

const Header = () => {
  const dayState = useSelector(getDayState);

  const menuState = useSelector(getMenuState);
  const dispatch = useDispatch();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuState) {
      return undefined;
    }

    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(setMenuStateAction(false));
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', closeMenu);

    return () => document.removeEventListener('keydown', closeMenu);
  }, [dispatch, menuState]);

  return (
    <>
      <header id="primary-navigation" className={`${styles.mainHeader} ${menuState ? styles.active : ''}`}>
        <nav aria-label="Primary navigation">
          {routeConfig.map((item, index) => {
            const { path, title, isMenuItem } = item;

            return isMenuItem ? (
              <NavLink
                to={path || '/'}
                className={({ isActive }) =>
                  (isActive ? styles.active : '') +
                  ` ${styles.cloudWrap} ${dayState === 'dark-theme' ? styles.season : ''}`
                }
                style={{ animationDelay: `${index * 80}ms` }}
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
        ref={menuButtonRef}
        type="button"
        className={`${styles.menu} ${!menuState ? styles.active : ''}`}
        aria-label={menuState ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuState}
        aria-controls="primary-navigation"
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
