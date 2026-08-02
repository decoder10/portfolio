import { FC, useEffect } from 'react';
import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { routeConfig } from './routes-config';

const AppRoutes: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = routeConfig.find(item => item.path === pathname) || routeConfig.find(item => item.path === '*');
    const canonicalUrl = `https://arams.website${pathname === '/' ? '/' : pathname}`;
    const title = route?.seoTitle || 'Aram Mkrtchyan — Senior Front-End Engineer';
    const pageDescription = route?.description || 'Portfolio of senior front-end engineer Aram Mkrtchyan.';

    const setMetaContent = (selector: string, content: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
    };

    document.title = title;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    setMetaContent('meta[name="description"]', pageDescription);
    setMetaContent('meta[name="robots"]', route?.path === '*' ? 'noindex, follow' : 'index, follow');
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', pageDescription);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', pageDescription);
    canonical?.setAttribute('href', canonicalUrl);
  }, [pathname]);

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
