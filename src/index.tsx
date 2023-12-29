import React from 'react';

import App from 'App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'assets/styles/portfolio.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
