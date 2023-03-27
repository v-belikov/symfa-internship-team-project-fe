import React from 'react';
import { Button, Card, Popover, Progress } from 'antd';
import mini_book from 'assets/images/cards/mini-book.svg';
import mini_watch from 'assets/images/cards/mini-watch.svg';

import './styles.scss';

export const ProfileCardList: React.FC<any> = ({
  name,
  avatar,
  subject,
  icon,
  lesson,
  hour,
  description,
  progress,
  content,
}) => {
  return (
    <Card>
      <div className="profile-card__header">
        <img className="profile-card__header__img" src={icon} alt="icon" />
        <div className="profile-card__title">{subject}</div>
        <Popover
          title="Lesson(s):"
          trigger="click"
          placement="bottom"
          content={content}
        >
          <Button className="profile-card__header__btn" type="link">
            ...
          </Button>
        </Popover>
      </div>

      <div className="profile-card__description"> {description} </div>

      <div className="profile-card__learning-block">
        <div className="profile-card__learning-block__lessons">
          <div className="profile-card__avatar-block">
            <img
              className="profile-card__header__img"
              src={avatar}
              alt="icon"
            />
            <div className="profile-card__avatar-block__name">{name}</div>
          </div>
          <div className="profile-card__learning-block__lessons__count">
            <img src={mini_book} alt="mini_book" />
            <div>{lesson} Lesson</div>
          </div>
          <div className="profile-card__learning-block__lessons__last">
            <img src={mini_watch} alt="mini_book" />
            <div>{hour} Hours</div>
          </div>
          <div className="profile-card__footer-block">
            <Progress type="circle" size={40} percent={progress} />
          </div>
        </div>
      </div>
    </Card>
  );
};
