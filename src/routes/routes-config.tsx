import React from 'react';

import NotFound from 'ui/not-found/not-found';

// const Home = React.lazy(() => import(/* webpackChunkName: "home" */ 'ui/home/home'));
// const About = React.lazy(() => import(/* webpackChunkName: "about" */ 'ui/about/about'));
// const Skills = React.lazy(() => import(/* webpackChunkName: "skills" */ 'ui/skills/skills'));
// const Experience = React.lazy(() => import(/* webpackChunkName: "experience" */ 'ui/experience/experience'));
// const Team = React.lazy(() => import(/* webpackChunkName: "team" */ 'ui/team/team'));
// const Contacts = React.lazy(() => import(/* webpackChunkName: "contacts" */ 'ui/contacts/contacts'));

const Home = React.lazy(() => {
  return import(/* webpackChunkName: "home" */ 'ui/home/home');
});

const About = React.lazy(() => {
  return import(/* webpackChunkName: "about" */ 'ui/about/about');
});

const Skills = React.lazy(() => {
  return import(/* webpackChunkName: "skills" */ 'ui/skills/skills');
});

const Experience = React.lazy(() => {
  return import(/* webpackChunkName: "experience" */ 'ui/experience/experience');
});

const Team = React.lazy(() => {
  return import(/* webpackChunkName: "team" */ 'ui/team/team');
});

const Contacts = React.lazy(() => {
  return import(/* webpackChunkName: "contacts" */ 'ui/contacts/contacts');
});

export const routeConfig: CustomRouteConfig[] = [
  {
    path: '/',
    title: 'home',
    seoTitle: 'Aram Mkrtchyan — Senior Front-End Engineer',
    description:
      'Portfolio of Aram Mkrtchyan, a senior front-end engineer building reliable React, React Native and TypeScript products.',
    element: <Home />,
    isMenuItem: true,
  },
  {
    path: '/about',
    title: 'about',
    seoTitle: 'About Aram Mkrtchyan — Front-End Engineer',
    description:
      'Learn about Aram Mkrtchyan and his experience building banking, digital wallet, admin and gaming products.',
    element: <About />,
    isMenuItem: true,
  },
  {
    path: '/skills',
    title: 'skills',
    seoTitle: 'Front-End Skills — Aram Mkrtchyan',
    description:
      'Explore Aram Mkrtchyan’s core front-end skills: React, React Native, TypeScript, JavaScript, HTML, CSS and Sass.',
    element: <Skills />,
    isMenuItem: true,
  },
  {
    path: '/experience',
    title: 'experience',
    seoTitle: 'Work Experience — Aram Mkrtchyan',
    description:
      'Professional experience of senior front-end engineer Aram Mkrtchyan across fintech, banking, gaming and product teams.',
    element: <Experience />,
    isMenuItem: true,
  },
  {
    path: '/team',
    title: 'team',
    seoTitle: 'Team — Aram Mkrtchyan',
    description: 'People Aram Mkrtchyan has collaborated with while building digital products.',
    element: <Team />,
    isMenuItem: false,
  },
  {
    path: '/contacts',
    title: 'contacts',
    seoTitle: 'Contact Aram Mkrtchyan',
    description:
      'Contact senior front-end engineer Aram Mkrtchyan by email, phone, LinkedIn, Stack Overflow or GitHub.',
    element: <Contacts />,
    isMenuItem: true,
  },
  {
    path: '*',
    title: 'notFound',
    seoTitle: 'Page not found — Aram Mkrtchyan',
    description: 'The requested page could not be found.',
    element: <NotFound />,
    isMenuItem: false,
  },
];
