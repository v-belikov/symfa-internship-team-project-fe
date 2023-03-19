import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { CoursesBlock } from '@components/courses';
import { DatabaseTable } from '@components/database';

export const MainLayout: FC = () => {
  return (
    <>
      <DatabaseTable />
      <Outlet />
      <CoursesBlock />
    </>
  );
};
