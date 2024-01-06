import React, { FC } from 'react';

import { MemoImage } from 'components/image/image';

import { contacts } from 'ui/contacts/contacts-config';

import styles from './contacts.module.scss';

const Contacts: FC = () => {
  return (
    <section className={styles.contacts}>
      {contacts.map(item => {
        const { path, image } = item;

        return (
          <a href={path} target="_blank" key={image}>
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
