import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ClientLayout } from '@layouts/client-layout';
import { Login } from '@pages/login';
import { Registration } from '@pages/registration';
import { AuthLayout, MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
  {
    path: '/client',
    element: <ClientLayout />,
    children: [],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'register', element: <Registration /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);
