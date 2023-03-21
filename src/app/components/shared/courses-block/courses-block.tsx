import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MenuOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Col, Radio, Row } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import graphic_icon from 'assets/images/cards/graphic-card-img.png';
import history_icon from 'assets/images/cards/history-card-img.png';
import { ProfileCard } from '@components/ui-kit';

import './styles.scss';

export const CoursesBlock: React.FC<any> = () => {
  const MOCK_DATA: any[] = [
    {
      id: 1,
      name: 'William Joe',
      avatar: <UserOutlined />,
      subject: 'History of graphic design',
      lesson: 15,
      hour: 15,
      progress: 0,
      icon: history_icon,
    },
    {
      id: 2,
      name: 'William Joe',
      avatar: <UserOutlined />,
      subject: 'History of graphic design',
      lesson: 125,
      hour: 5,
      progress: 55,
      icon: graphic_icon,
    },
    {
      id: 3,
      name: 'William Joe',
      avatar: <UserOutlined />,
      subject: 'Graphic Design',
      lesson: 15,
      hour: 25,
      progress: 25,
      icon: history_icon,
    },
    {
      id: 4,
      name: 'William Joe',
      avatar: <UserOutlined />,
      subject: 'Digital Panting',
      lesson: 15,
      hour: 15,
      progress: 35,
      icon: graphic_icon,
    },
    {
      id: 5,
      name: 'William Joe',
      avatar: <UserOutlined />,
      subject: 'Sketching for Designers',
      lesson: 15,
      hour: 15,
      progress: 100,
      icon: history_icon,
    },
  ];

  const [componentSize, setComponentSize] = useState<SizeType>('small');

  function onHandleChange(e: any) {
    setComponentSize(e.target.value);
  }

  return (
    <div className="courses">
      <Radio.Group
        className="courses__btn-block"
        value={componentSize}
        onChange={e => onHandleChange(e)}
      >
        <Radio.Button value="small">
          <MenuOutlined />
        </Radio.Button>
        <Radio.Button value="large">
          <AppstoreOutlined />
        </Radio.Button>
      </Radio.Group>

      <Row gutter={16} className="courses__cards-block">
        {MOCK_DATA.map(item => {
          return (
            <Col key={item.id} span={6}>
              <ProfileCard
                name={item.name}
                avatar={item.avatar}
                subject={item.subject}
                icon={item.icon}
                lesson={item.lesson}
                hour={item.hour}
                progress={item.progress}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
