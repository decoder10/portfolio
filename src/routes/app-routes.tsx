import { FC } from 'react';
import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { routeConfig } from './routes-config';

const AppRoutes: FC = () => {

  return (
    <Routes>
      {routeConfig.map(item => {
        const { title, path, element } = item;

        return <Route key={title} path={path} element={element} />;
      })}

    </Routes>
  );
};

export default AppRoutes;
