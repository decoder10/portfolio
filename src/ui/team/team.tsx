import React, { FC } from 'react';

import { team } from 'ui/team/team-config';

import styles from './team.module.scss';

const Team: FC = () => {
  return (
    <div className={styles.team}>
      <ul>
        {team.map(item => {
          const { image, name, linkedin, position } = item;

          return (
            <li key={name}>
              <a href={linkedin} target="_blank">
                <img src={require(`assets/images/team/${image}.jpg`)} alt="" />
                <h1>{name}</h1>
                <p>{position}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Team;
