import React from 'react';
import { Card, Progress, Space } from 'antd';

import './styles.scss';

export const CourseActivitesCard: React.FC = () => {
  return (
    <Card className="course-activites-card">
      <div className="course-activites-card__title">Course Activites</div>
      <div className="course-activites-card__progress">
        <Space wrap>
          <Progress type="circle" percent={90} />
        </Space>
      </div>

      <div className="course-activites-card__footer">
        <div className="course-activites-card__footer__progress">
          <div className="course-activites-card__footer__progress__text">
            progress
          </div>
        </div>

        <div className="course-activites-card__footer__in-progress">
          <p className="course-activites-card__footer__in-progress__text">
            in progress
          </p>
        </div>
      </div>
    </Card>
  );
};
