/* eslint-disable no-restricted-imports */
import React from 'react';
import { Card } from 'antd';
import students_img from '../../../../assets/images/cards/total_students.png';

import './styles.scss';

export const DashboardCard: React.FC = () => {
  return (
    <Card className="dashboard-card">
      <img
        className="dashboard-card__img"
        src={students_img}
        alt="students_img"
      />
      <div className="dashboard-card__title">Total Students</div>
      <div className="dashboard-card__count">1220</div>
    </Card>
  );
};
