import React, { useCallback, useEffect, useState } from 'react';

import styles from './day-switcher.module.scss';

interface IProps {
  updateDayState(state: TDayState): void;
}

const DaySwitcher = (props: IProps) => {
  const { updateDayState } = props;

  const [state, setState] = useState('light');

  const updateDayNightStatus = useCallback(() => {
    const currentHour = new Date().getHours();

    const isDayTime = currentHour >= 6 && currentHour < 18;

    updateDayState(isDayTime ? 'light-theme' : 'dark-theme');
    setState(isDayTime ? 'light' : 'dark');
  }, [updateDayState]);

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
    <div className={styles.daySwitcher}>
      <input
        type="checkbox"
        id="toggle"
        checked={state !== 'light'}
        onChange={() => {
          setState(state === 'light' ? 'dark' : 'light');
          updateDayState(state === 'light' ? 'dark-theme' : 'light-theme');
          sessionStorage.setItem('dayState', state === 'light' ? 'dark' : 'light');
        }}
      />

      <label htmlFor="toggle" key="toggle-label">
        <span />
      </label>
    </div>
  );
};

export default DaySwitcher;
