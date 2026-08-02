import React, { useCallback, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import AppRoutes from 'routes/app-routes';

import { getDayState } from 'reducers/day-state';

import Birds from 'components/birds/birds';
import Clouds from 'components/clouds/clouds';
import DaySwitcher from 'components/day-switcher/day-switcher';
import Header from 'components/header/header';
import MainLoader from 'components/main-loader/main-loader';
import Rocket from 'components/rocket/rocket';
import SunMoon from 'components/sun-moon/sun-moon';
import Ufo from 'components/ufo/ufo';

function App() {
  const theme = useSelector(getDayState);
  const [isAppReady, setIsAppReady] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(() => document.visibilityState === 'visible');
  const handleAppReady = useCallback(() => setIsAppReady(true), []);

  useEffect(() => {
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

    themeColor?.setAttribute('content', theme === 'dark-theme' ? '#14272b' : '#b8cdec');
    document.documentElement.style.colorScheme = theme === 'dark-theme' ? 'dark' : 'light';
  }, [theme]);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(document.visibilityState === 'visible');

    document.addEventListener('visibilitychange', updateVisibility);

    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  return (
    <>
      <a className="skip-link" href="#page-content">
        Skip to main content
      </a>

      <MainLoader onComplete={handleAppReady} />

      <main
        className={`main ${theme} ${isAppReady ? 'visible' : ''} ${isPageVisible ? '' : 'animations-paused'}`}
        key="main-wrap"
      >
        <div
          className={`secondary-background ${
            theme === 'light-theme' ? 'day-sky-background' : 'night-sky-background'
          } show`}
          aria-hidden="true"
        />

        <img src={require('assets/images/me.png')} alt="Aram Mkrtchyan" className="me" />

        <Clouds />

        <SunMoon />

        {theme === 'dark-theme' ? <Rocket /> : null}

        <DaySwitcher />

        <a
          href="https://terminal.arams.website/"
          className="terminal-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Aram's terminal portfolio"
          title="Terminal portfolio"
        >
          &#60;&#95;
        </a>

        <div className="content-wrap" id="page-content">
          <Header />

          <Birds />

          <div
            className={`main-background ${theme === 'light-theme' ? 'day-background' : 'night-background'} show`}
            aria-hidden="true"
          />

          <React.Suspense
            fallback={
              <div className="lazy-loading">
                <div className="loader" />
              </div>
            }
          >
            <AppRoutes />
          </React.Suspense>
        </div>

        {theme === 'light-theme' ? <Ufo /> : null}

        <p className="copy">© {new Date().getFullYear()} Aram Mkrtchyan</p>
      </main>
    </>
  );
}

export default App;
