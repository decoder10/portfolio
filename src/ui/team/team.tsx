import React, { FC } from 'react';

import { MemoImage } from 'components/image/image';

import { team } from 'ui/team/team-config';

import styles from './team.module.scss';

const Team: FC = () => {
  return (
    <section className={styles.team}>
      <div className={styles.heading}>
        <span>Collaboration</span>
        <h1>Great products are built together.</h1>
      </div>
      <ul>
        {team.map(item => {
          const { image, name, linkedin, position } = item;

          return (
            <li key={name}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <MemoImage
                  url={require(`assets/images/team/${image}.jpg`)}
                  classes={styles.imageWrap}
                  loadedClass={styles.loaded || ''}
                />
                <h2>{name}</h2>
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
