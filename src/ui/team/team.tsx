import React, { FC } from 'react';

import { MemoImage } from 'components/image/image';

import { team } from 'ui/team/team-config';

import styles from './team.module.scss';

const Team: FC = () => {
  return (
    <section className={styles.team}>
      <ul>
        {team.map(item => {
          const { image, name, linkedin, position } = item;

          return (
            <li key={name}>
              <a href={linkedin} target="_blank">
                <MemoImage
                  url={require(`assets/images/team/${image}.jpg`)}
                  classes={styles.imageWrap}
                  loadedClass={styles.loaded || ''}
                />
                <h1>{name}</h1>
                <p>{position}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Team;
