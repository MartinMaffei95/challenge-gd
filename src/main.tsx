import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './pages/AppRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
