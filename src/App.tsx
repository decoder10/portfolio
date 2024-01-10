import React, { useState } from 'react';

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

function App() {
  const theme = useSelector(getDayState);

  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  return (
    <>
      <MainLoader updateLoaderState={state => setIsLoaded(state)} />

      <main className={`main ${theme} ${!isLoaded ? 'visible' : ''}`} key="main-wrap">
        <div className={`secondary-background day-sky-background ${theme === 'light-theme' ? 'show' : ''}`} />
        <div className={`secondary-background night-sky-background ${theme === 'dark-theme' ? 'show' : ''}`} />

        <img src={require('assets/images/me.png')} alt="Aram Mkrtchyan" className="me" />

        <Clouds />

        <SunMoon />

        {theme === 'dark-theme' ? <Rocket /> : null}

        <DaySwitcher />

        <div className="content-wrap">
          <Header />

          <Birds />

          <div className={`main-background day-background ${theme === 'light-theme' ? 'show' : ''}`} />
          <div className={`main-background night-background ${theme === 'dark-theme' ? 'show' : ''}`} />

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

        <p className="copy">© 2023 Aram Mkrtchyan</p>
      </main>
    </>
  );
}

export default App;
