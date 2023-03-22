import React from 'react';
import { InfoCard } from '@components/ui-kit/info-card';
import { MOCK_DATA } from './models';

import './styles.scss';

export const DashboardBlock: React.FC = () => {
  return (
    <div className="dashboard-block">
      {MOCK_DATA.map(item => {
        return (
          <div className="dashboard-block__item" key={item.id}>
            <InfoCard
              title={item.title}
              count={item.count}
              color={item.color}
              img={item.img}
            />
          </div>
        );
      })}
    </div>
  );
};
