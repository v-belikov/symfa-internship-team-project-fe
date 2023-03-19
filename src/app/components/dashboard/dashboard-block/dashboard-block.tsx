/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { DashboardCard } from '../dashboard-card';

import './styles.scss';

export const DashboardBlock: React.FC = () => {
  const data = [1, 2, 3, 4, 5];

  return (
    <div className="dashboard-block">
      {data.map(item => {
        return (
          <div className="dashboard-block__item" key={item}>
            <DashboardCard />
          </div>
        );
      })}
    </div>
  );
};
