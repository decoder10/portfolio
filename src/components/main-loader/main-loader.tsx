import React, { useEffect, useState } from 'react';

import styles from './main-loader.module.scss';

interface IProps {
  theme: TDayState;
  updateLoaderState(state: boolean): void;
}

const MainLoader = (props: IProps) => {
  const { theme, updateLoaderState } = props;

  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(false);
      updateLoaderState(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoaded ? (
    <div className={`${styles.mainLoader} ${theme}`}>
      <div className={styles.loader} />
    </div>
  ) : null;
};

export default MainLoader;
