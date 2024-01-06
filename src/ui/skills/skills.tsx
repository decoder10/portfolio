import React, { FC } from 'react';

import { MemoImage } from 'components/image/image';

import styles from './skills.module.scss';

const skills: { name: string; image: string }[] = [
  { name: 'HTML', image: 'html' },
  { name: 'CSS', image: 'css' },
  { name: 'SASS', image: 'sass' },
  { name: 'JavaScript', image: 'js' },
  { name: 'TypeScript', image: 'typescript' },
  { name: 'React / React Native', image: 'react' },
];

const Skills: FC = () => {
  return (
    <section className={styles.skills}>
      <ul>
        {skills.map(item => {
          const { image, name } = item;

          return (
            <li key={name}>
              <MemoImage
                url={require(`assets/images/skills/${image}.svg`)}
                classes={styles.imageWrap}
                loadedClass={styles.loaded || ''}
              />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
