import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { getDayState } from 'reducers/day-state';

import styles from './main-loader.module.scss';

interface IProps {
  updateLoaderState(state: boolean): void;
}

const MainLoader = (props: IProps) => {
  const { updateLoaderState } = props;

  const theme = useSelector(getDayState);

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
