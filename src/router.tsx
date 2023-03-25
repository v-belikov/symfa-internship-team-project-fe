import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ClientLayout } from '@layouts/client-layout';
import { CoursesBlock } from '@pages/courses-block';
import { DashboardBlock } from '@pages/dashboard-block';
import { DatabaseTableBlock } from '@pages/database-table-block';
import { Login } from '@pages/login';
import { Registration } from '@pages/registration';
import { UserEdit } from '@pages/user-edit';
import { AuthLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/client',
    element: <ClientLayout />,
    children: [
      { index: true, element: <DashboardBlock /> },
      { path: 'courses', element: <CoursesBlock /> },
      { path: 'database', element: <DatabaseTableBlock /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'useredit', element: <UserEdit /> },
      { path: 'register', element: <Registration /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);
