import React from 'react';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ 'ui/home/home'));
const About = React.lazy(() => import(/* webpackChunkName: "about" */ 'ui/about/about'));
const Skills = React.lazy(() => import(/* webpackChunkName: "skills" */ 'ui/skills/skills'));
const Experience = React.lazy(() => import(/* webpackChunkName: "experience" */ 'ui/experience/experience'));
const Team = React.lazy(() => import(/* webpackChunkName: "team" */ 'ui/team/team'));
const Contacts = React.lazy(() => import(/* webpackChunkName: "contacts" */ 'ui/contacts/contacts'));

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
