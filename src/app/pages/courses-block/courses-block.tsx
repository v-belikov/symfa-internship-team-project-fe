import React, { useState } from 'react';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import { Col, Radio, Row } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { ProfileCard } from '@components/ui-kit';
import { MOCK_DATA } from './models';

import './styles.scss';

export const CoursesBlock: React.FC<any> = () => {
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
