import React from 'react';
import { Link } from 'react-router-dom';
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
  const MOCK_DATA: any = {
    profile_photo: <UserOutlined />,
    name: 'Robert Fox',
    students_count: 4,
    age: 17,
    gender: 'Male',
    birthday: '2 January 2003',
    description:
      'Science is everywhere. A student rides to school on a bus, and in that instance alone, there are many examples of technology.',
    address: '6391 Eigin St. Celina, Delaware 10299',
    phone: 9876543210,
    mail: 'mailto@mailto.com',
  };

  return (
    <div className="profile">
      <div className="profile__title-block">
        <Avatar size={164} icon={MOCK_DATA.profile_photo} />
        <div className="profile__title-block__name">{MOCK_DATA.name}</div>
        <div className="profile__title-block__students-count">
          Science {MOCK_DATA.students_count} Student
        </div>
        <div className="profile__title-block__contact-block">
          <Link to={`mailto:${MOCK_DATA.mail}`}>
            <Tooltip title={MOCK_DATA.mail}>
              <Button shape="circle" icon={<MessageOutlined />} />
            </Tooltip>
          </Link>

          <Link to={`tel:${MOCK_DATA.phone}`}>
            <Tooltip title={MOCK_DATA.phone}>
              <Button shape="circle" icon={<PhoneOutlined />} />
            </Tooltip>
          </Link>

          <Link to={`tel:${MOCK_DATA.phone}`}>
            <Tooltip title={MOCK_DATA.phone}>
              <Button shape="circle" icon={<FileTextOutlined />} />
            </Tooltip>
          </Link>
        </div>
      </div>

      <div className="profile__content">
        <div className="profile__content__about-block">
          <div className="profile__content__about-block__title">About</div>
          <div className="profile__content__about-block__description">
            {MOCK_DATA.description}
          </div>
        </div>

        <div className="profile__content__age-block">
          <div className="profile__content__age-block__age">
            <div className="profile__content__age-block__age__title">Age</div>
            <div className="profile__content__age-block__age__main">
              {MOCK_DATA.age}
            </div>
          </div>
          <div className="profile__content__age-block__gender">
            <div className="profile__content__age-block__gender__title">
              Gender
            </div>
            <div className="profile__content__age-block__gender__main">
              {MOCK_DATA.gender}
            </div>
          </div>
        </div>

        <div className="profile__content__date-block">
          <div className="profile__content__date-block__date">
            <div className="profile__content__date-block__date__title">
              Date of birth
            </div>
            <div className="profile__content__date-block__date__main">
              {MOCK_DATA.birthday}
            </div>
          </div>
          <div className="profile__content__date-block__address">
            <div className="profile__content__date-block__address__title">
              Address
            </div>
            <div className="profile__content__date-block__address__main">
              {MOCK_DATA.address}
            </div>
          </div>
        </div>
      </div>

      <div className="profile__footer">
        <div className="profile__footer__title">People form the same class</div>
        <Avatar.Group className="profile__footer__avatar-group" maxCount={2}>
          <Avatar className="profile__footer__avatar-group__second-avatar">
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              className="profile__footer__avatar-group__first-hidden-avatar"
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            className="profile__footer__avatar-group__second-hidden-avatar"
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
    </div>
  );
};
