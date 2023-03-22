import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { CoursesBlock } from '@pages/courses-block';
import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <CoursesBlock /> }],
  },
]);
