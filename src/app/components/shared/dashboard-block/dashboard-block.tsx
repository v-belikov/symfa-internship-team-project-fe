import React from 'react';
import students_img from 'assets/images/cards/total_students.png';
import { InfoCard } from '@components/ui-kit/info-card';

import './styles.scss';

export const DashboardBlock: React.FC = () => {
  const MOCK_DATA: any[] = [
    {
      id: 1,
      title: 'Total Students',
      count: 1120,
      color: 'success',
      img: students_img,
    },
    {
      id: 2,
      title: 'Total Teacher',
      count: 120,
      color: 'info',
      img: students_img,
    },
    {
      id: 3,
      title: 'Faculty Room',
      count: 1180,
      color: 'warning',
      img: students_img,
    },
  ];

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
