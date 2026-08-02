import React, { FC } from 'react';

import { MemoImage } from 'components/image/image';

import { contacts } from 'ui/contacts/contacts-config';

import styles from './contacts.module.scss';

const Contacts: FC = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.heading}>
        <span>Contact</span>
        <h1>Let’s build something useful.</h1>
        <p>I’m always happy to discuss thoughtful products, strong teams and ambitious front-end work.</p>
      </div>
      {contacts.map(item => {
        const { path, image } = item;
        const label = image === 'email' ? 'Email Aram' : image === 'phone' ? 'Call Aram' : `Aram on ${image}`;

        return (
          <a href={path} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} key={image}>
            <MemoImage
              url={require(`assets/images/contacts/${image}.svg`)}
              classes={styles.imageWrap}
              loadedClass={styles.loaded || ''}
            />
          </a>
        );
      })}
    </section>
  );
};

export default Contacts;
