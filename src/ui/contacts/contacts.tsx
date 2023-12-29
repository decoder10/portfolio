import React, { FC } from 'react';

import { contacts } from 'ui/contacts/contacts-config';

import styles from './contacts.module.scss';

const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      {contacts.map(item => {
        const { path, image } = item;

        return (
          <a href={path} target="_blank" key={image}>
            <img src={require(`assets/images/contacts/${image}.svg`)} alt="" />
          </a>
        );
      })}
    </div>
  );
};

export default Contacts;
