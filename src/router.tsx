import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ClientLayout, MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <ClientLayout /> }],
  },
]);
