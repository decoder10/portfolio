import React, { FC } from 'react';

import { MemoImage } from 'components/image/image';

import styles from './skills.module.scss';

const skills: string[] = ['html', 'css', 'sass', 'js', 'typescript', 'react'];

const Skills: FC = () => {
  return (
    <div className={styles.skills}>
      {skills.map(item => {
        return (
          <MemoImage
            url={require(`assets/images/skills/${item}.svg`)}
            classes={styles.imageWrap}
            loadedClass={styles.loaded || ''}
          />
        );
      })}
    </div>
  );
};

export default Skills;
