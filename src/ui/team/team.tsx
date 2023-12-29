import React, { FC } from 'react';

import { team } from 'ui/team/team-config';

import styles from './team.module.scss';

const Team: FC = () => {
  return (
    <div className={styles.team}>
      {team.map(item => {
        const { image, name, linkedin, position } = item;

        return (
          <a href={linkedin} target="_blank" key={name}>
            <img src={require(`assets/images/team/${image}.jpg`)} alt="" />
            <h1>{name}</h1>
            <p>{position}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Team;
