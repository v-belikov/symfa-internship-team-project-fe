import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ClientLayout } from '@layouts/client-layout';
import { Courses } from '@pages/courses';
import { DashboardBlock } from '@pages/dashboard-block';
import { DatabaseTableBlock } from '@pages/database-table-block';
import { Login } from '@pages/login';
import { Registration } from '@pages/registration';
import { UpdateUser } from '@pages/update-user';
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
    children: [
      { index: true, element: <DashboardBlock /> },
      { path: 'courses', element: <Courses /> },
      { path: 'database', element: <DatabaseTableBlock /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'update', element: <UpdateUser /> },
      { path: 'register', element: <Registration /> },
    ],
  },
]);
