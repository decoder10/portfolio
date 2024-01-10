import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getDayState, setDayStateAction } from 'reducers/day-state';

import styles from './day-switcher.module.scss';

const DaySwitcher = () => {
  const dayState = useSelector(getDayState);
  const dispatch = useDispatch();

  const updateDayNightStatus = useCallback(() => {
    const currentHour = new Date().getHours();

    const isDayTime = currentHour >= 6 && currentHour < 18;

    dispatch(setDayStateAction(isDayTime ? 'light-theme' : 'dark-theme'));
  }, [dispatch]);

  useEffect(() => {
    updateDayNightStatus();

    const intervalId = setInterval(() => {
      if (!sessionStorage.getItem('dayState')) {
        updateDayNightStatus();
      }
    }, 60 * 1000);

    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.daySwitcher}>
        <input
          type="checkbox"
          id="toggle"
          checked={dayState !== 'light-theme'}
          onChange={() => {
            dispatch(setDayStateAction(dayState === 'light-theme' ? 'dark-theme' : 'light-theme'));
            sessionStorage.setItem('dayState', dayState === 'light-theme' ? 'dark-theme' : 'light-theme');
          }}
        />

        <label htmlFor="toggle" key="toggle-label">
          <span />
        </label>
      </div>

      <button
        className={styles.switcher}
        onClick={() => {
          dispatch(setDayStateAction(dayState === 'light-theme' ? 'dark-theme' : 'light-theme'));
          sessionStorage.setItem('dayState', dayState === 'light-theme' ? 'dark-theme' : 'light-theme');
        }}
      />
    </>
  );
};

export default DaySwitcher;
