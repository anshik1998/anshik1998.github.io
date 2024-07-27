import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './pages/Portfolio/Portfolio';
import Problems from './pages/Problems/components/Problems';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/problem-solving',
    element: <Problems />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);