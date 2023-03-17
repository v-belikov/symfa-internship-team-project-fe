import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Progress } from 'antd';
import icon from '../../../assets/images/cards/history-card-img.png';
import mini_book from '../../../assets/images/cards/mini-book.svg';
import mini_watch from '../../../assets/images/cards/mini-watch.svg';

import './styles.scss';

export const Cards: React.FC = () => {
  return (
    <Card className="card">
      <div className="card__header">
        <img className="card__header__img" src={icon} alt="icon" />
        <Button className="card__header__btn" type="link">
          ...
        </Button>
      </div>

      <div className="card__title">History of graphic design</div>
      <div className="card__avatar-block">
        <Avatar className="card__avatar-block__img" icon={<UserOutlined />} />
        <div className="card__avatar-block__name">William Joe</div>
      </div>

      <div className="card__learning-block">
        <div className="card__learning-block__lessons">
          <div className="card__learning-block__lessons__count">
            <img src={mini_book} alt="mini_book" />
            <div>15 Lesson</div>
          </div>
          <div className="card__learning-block__lessons__last">
            <img src={mini_watch} alt="mini_book" />
            <div>40 Hours</div>
          </div>
        </div>
      </div>

      <div className="card__footer-block">
        <Progress percent={95} />
      </div>
    </Card>
  );
};
