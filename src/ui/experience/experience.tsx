import React, { FC } from 'react';

import { experience } from 'ui/experience/experience-config';

import styles from './experience.module.scss';

const Experience: FC = () => {
  return (
    <section className={styles.experience}>
      <ul>
        {experience.map(item => {
          const { date, employer, list, position } = item;

          return (
            <li key={employer}>
              <p>{position}</p>
              <p>
                {employer} &nbsp;&nbsp; {date}
              </p>

              {list ? (
                <ul>
                  {list.map(listItem => (
                    <li key={listItem}>{listItem}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
