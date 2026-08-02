import React, { FC, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { getDayState } from 'reducers/day-state';

import styles from './main-loader.module.scss';

interface IProps {
  onComplete(): void;
}

const MainLoader: FC<IProps> = ({ onComplete }) => {
  const theme = useSelector(getDayState);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let revealTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;
    let windowReadyResolve: (() => void) | undefined;
    const handleWindowLoad = () => windowReadyResolve?.();

    const waitForWindow = new Promise<void>(resolve => {
      if (document.readyState === 'complete') {
        resolve();
        return;
      }

      windowReadyResolve = resolve;
      window.addEventListener('load', handleWindowLoad, { once: true });
    });

    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([waitForWindow, fontsReady]).then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!isMounted) {
            return;
          }

          onComplete();
          revealTimer = setTimeout(() => {
            setIsLeaving(true);
            removeTimer = setTimeout(() => setIsVisible(false), 320);
          }, 280);
        });
      });
    });

    return () => {
      isMounted = false;
      window.removeEventListener('load', handleWindowLoad);
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return isVisible ? (
    <div
      className={`${styles.mainLoader} ${styles[isLeaving ? 'leaving' : 'entering']} ${theme}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className={styles.loader} aria-hidden="true" />
    </div>
  ) : null;
};

export default MainLoader;
