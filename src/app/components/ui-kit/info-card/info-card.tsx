import React from 'react';
import { Alert } from 'antd';

import './styles.scss';

export const InfoCard: React.FC<any> = ({ title, count, color, img }) => {
  return (
    <Alert
      className="info-card"
      type={color}
      action={
        <div className="info-card__content">
          <img className="info-card__content__img" src={img} alt="{img}" />
          <div className="info-card__content__title">{title}</div>
          <div className="info-card__content__count">{count}</div>
        </div>
      }
    />
  );
};
