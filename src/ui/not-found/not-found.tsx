import React, { FC } from 'react';

import styles from './notFound.module.scss';

const NotFound: FC = () => {
  return (
    <section className={styles.notFound}>
      <p>404 Not Found</p>
    </section>
  );
};

export default NotFound;
