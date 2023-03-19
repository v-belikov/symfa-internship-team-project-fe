/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { MenuOutlined, TableOutlined } from '@ant-design/icons';
import { Col, Radio, Row } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { CoursesCard } from '../courses-cards';

import './styles.scss';

export const CoursesBlock: React.FC = () => {
  const data = [1, 2, 3, 4, 5];
  const [componentSize, setComponentSize] = useState<SizeType>('small');

  return (
    <div className="courses">
      <Radio.Group
        className="courses__btn-block"
        value={componentSize}
        onChange={e => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">
          <MenuOutlined />
        </Radio.Button>
        <Radio.Button value="large">
          <TableOutlined />
        </Radio.Button>
      </Radio.Group>

      <Row gutter={16} className="courses__cards-block">
        {data.map(item => {
          return (
            <Col key={item} span={6}>
              <CoursesCard />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
