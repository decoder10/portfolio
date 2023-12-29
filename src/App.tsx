import React, { useState } from 'react';

import AppRoutes from 'routes/app-routes';

import Birds from 'components/birds/birds';
import DaySwitcher from 'components/day-switcher/day-switcher';
import Header from 'components/header/header';
import MainLoader from 'components/main-loader/main-loader';
import SunMoon from 'components/sun-moon/sun-moon';

function App() {
  const [theme, setTheme] = useState<TDayState>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  return (
    <>
      <MainLoader theme={theme} updateLoaderState={state => setIsLoaded(state)} />

      <main className={`main ${theme} ${!isLoaded ? 'visible' : ''}`} key="main-wrap">
        <div className={`secondary-background day-sky-background ${theme === 'light-theme' ? 'show' : ''}`} />
        <div className={`secondary-background night-sky-background ${theme === 'dark-theme' ? 'show' : ''}`} />

        <img src={require('assets/images/me.png')} alt="" className="me" />

        <Header dayState={theme} />

        <section className="pages-wrap">
          <React.Suspense
            fallback={
              <div className="lazy-loading">
                <p>Loading...</p>
              </div>
            }
          >
            <AppRoutes />
          </React.Suspense>

          <Birds />

          <div className={`main-background day-background ${theme === 'light-theme' ? 'show' : ''}`} />
          <div className={`main-background night-background ${theme === 'dark-theme' ? 'show' : ''}`} />
        </section>

        {theme ? <SunMoon dayState={theme} /> : null}

        <DaySwitcher updateDayState={(state: TDayState) => setTheme(state)} />

        <p className="copy">© 2023 Aram MKrtchyan</p>
      </main>
    </>
  );
}

export default App;
