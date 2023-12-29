import React, { FC } from 'react';

import styles from './skills.module.scss';

const skills: string[] = ['html', 'css', 'sass', 'js', 'typescript', 'react'];

const Skills: FC = () => {
  return (
    <div className={styles.skills}>
      {skills.map(item => {
        return <img src={require(`assets/images/skills/${item}.svg`)} alt="" key={item} />;
      })}
    </div>
  );
};

export default Skills;
