/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  AntDesignOutlined,
  FileTextOutlined,
  MessageOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Tooltip } from 'antd';

import './styles.scss';

export const ProfileBlock: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile__title-block">
        <Avatar size={164} icon={<UserOutlined />} />
        <div className="profile__title-block__name">Robert Fox</div>
        <div className="profile__title-block__students-count">
          Science 4 Student
        </div>
        <div className="profile__title-block__contact-block">
          <Button shape="circle" icon={<MessageOutlined />} />
          <Button shape="circle" icon={<PhoneOutlined />} />
          <Button shape="circle" icon={<FileTextOutlined />} />
        </div>
      </div>

      <div className="profile__content">
        <div className="profile__content__about-block">
          <div className="profile__content__about-block__title">About</div>
          <div className="profile__content__about-block__description">
            Science is everywhere. A student rides to school on a bus, and in
            that instance alone, there are many examples of technology.
          </div>
        </div>

        <div className="profile__content__age-block">
          <div className="profile__content__age-block__age">
            <div className="profile__content__age-block__age__title">Age</div>
            <div className="profile__content__age-block__age__main">17</div>
          </div>
          <div className="profile__content__age-block__gender">
            <div className="profile__content__age-block__gender__title">
              Gender
            </div>
            <div className="profile__content__age-block__gender__main">
              Male
            </div>
          </div>
        </div>

        <div className="profile__content__date-block">
          <div className="profile__content__date-block__date">
            <div className="profile__content__date-block__date__title">
              Date of birth
            </div>
            <div className="profile__content__date-block__date__main">
              2 January 2003
            </div>
          </div>
          <div className="profile__content__date-block__address">
            <div className="profile__content__date-block__address__title">
              Address
            </div>
            <div className="profile__content__date-block__address__main">
              6391 Eigin St. Celina, Delaware 10299
            </div>
          </div>
        </div>
      </div>

      <div className="profile__footer">
        <div className="profile__footer__title">People form the same class</div>
        <Avatar.Group
          maxCount={2}
          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          <Avatar src="https://joesch.moe/api/v1/random?key=2" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: '#1890ff' }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
    </div>
  );
};
