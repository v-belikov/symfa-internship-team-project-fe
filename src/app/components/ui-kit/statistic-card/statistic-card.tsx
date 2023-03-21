import React from 'react';
import { Card, Progress, Space } from 'antd';

import './styles.scss';

export const StatisticCard: React.FC<any> = ({ percent }) => {
  return (
    <Card className="statistic-card">
      <div className="statistic-card__title">Course Activites</div>
      <div className="statistic-card__progress">
        <Space wrap>
          <Progress type="circle" percent={percent} />
        </Space>
      </div>

      <div className="statistic-card__footer">
        <div className="statistic-card__footer__progress">
          <div className="statistic-card__footer__progress__text">progress</div>
        </div>

        <div className="statistic-card__footer__in-progress">
          <p className="statistic-card__footer__in-progress__text">
            in progress
          </p>
        </div>
      </div>
    </Card>
  );
};
