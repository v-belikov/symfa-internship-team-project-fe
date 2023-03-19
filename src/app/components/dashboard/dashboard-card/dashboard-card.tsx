/* eslint-disable no-restricted-imports */
import React from 'react';
import { Alert } from 'antd';
import students_img from '../../../../assets/images/cards/total_students.png';

import './styles.scss';

export const DashboardCard: React.FC = () => {
  return (
    <>
      {' '}
      <Alert
        className="dashboard-card"
        type="success"
        action={
          <div className="dashboard-card__content">
            <img
              className="dashboard-card__content__img"
              src={students_img}
              alt="students_img"
            />
            <div className="dashboard-card__content__title">Total Students</div>
            <div className="dashboard-card__content__count">1220</div>
          </div>
        }
      />
    </>
  );
};
