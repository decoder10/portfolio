import React from 'react';

// const Home = React.lazy(() => import(/* webpackChunkName: "home" */ 'ui/home/home'));
// const About = React.lazy(() => import(/* webpackChunkName: "about" */ 'ui/about/about'));
// const Skills = React.lazy(() => import(/* webpackChunkName: "skills" */ 'ui/skills/skills'));
// const Experience = React.lazy(() => import(/* webpackChunkName: "experience" */ 'ui/experience/experience'));
// const Team = React.lazy(() => import(/* webpackChunkName: "team" */ 'ui/team/team'));
// const Contacts = React.lazy(() => import(/* webpackChunkName: "contacts" */ 'ui/contacts/contacts'));

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import(/* webpackChunkName: "home" */ 'ui/home/home') as never), 500);
  });
});

const About = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import(/* webpackChunkName: "about" */ 'ui/about/about') as never), 500);
  });
});

const Skills = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import(/* webpackChunkName: "skills" */ 'ui/skills/skills') as never), 500);
  });
});

const Experience = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import(/* webpackChunkName: "experience" */ 'ui/experience/experience') as never), 500);
  });
});

const Team = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import(/* webpackChunkName: "team" */ 'ui/team/team') as never), 500);
  });
});

const Contacts = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import(/* webpackChunkName: "contacts" */ 'ui/contacts/contacts') as never), 500);
  });
});

export const routeConfig: CustomRouteConfig[] = [
  {
    path: '/',
    title: 'home',
    element: <Home />,
    isMenuItem: true,
  },
  {
    path: '/about',
    title: 'about',
    element: <About />,
    isMenuItem: true,
  },
  {
    path: '/skills',
    title: 'skills',
    element: <Skills />,
    isMenuItem: true,
  },
  {
    path: '/experience',
    title: 'experience',
    element: <Experience />,
    isMenuItem: true,
  },
  {
    path: '/team',
    title: 'team',
    element: <Team />,
    isMenuItem: true,
  },
  {
    path: '/contacts',
    title: 'contacts',
    element: <Contacts />,
    isMenuItem: true,
  },
];
