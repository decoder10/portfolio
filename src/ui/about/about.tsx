import React, { FC } from 'react';

import styles from './about.module.scss';

const About: FC = () => {
  return (
    <section className={styles.about}>
      <span>About me</span>
      <h1>Engineering thoughtful products, end to end.</h1>
      <p>
        I’m a senior front-end engineer with more than a decade of experience across banking, digital wallets and gaming
        platforms. I turn complex product requirements into clear, maintainable interfaces for web and mobile, with a
        strong focus on performance, accessibility and the details users feel.
      </p>
    </section>
  );
};

export default About;
