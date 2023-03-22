import React, { useState } from 'react';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import { Col, Radio, Row, Spin } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { ProfileCard } from '@components/ui-kit';
import { config } from '@core/config';
import { useGetCoursesQuery } from '@store/courses';
import { ICourse, ILesson } from './models';

import './styles.scss';

export const CoursesBlock: React.FC<any> = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');
  const { data = [], isLoading } = useGetCoursesQuery(null);

  function onHandleChange(e: any) {
    setComponentSize(e.target.value);
  }

  const hoursCalculation = (lessons: Array<ILesson>) => {
    return lessons.reduce((acc: number, cur: ILesson) => {
      const hours = acc + cur.duration;

      return hours;
    }, 0);
  };

  if (isLoading) {
    return <Spin tip="Loading" size="large" />;
  }

  return (
    <div className="courses">
      <Radio.Group
        className="courses__btn-block"
        value={componentSize}
        onChange={e => onHandleChange(e)}
      >
        <Radio.Button value="small">
          <AppstoreOutlined />
        </Radio.Button>
        <Radio.Button value="large">
          <MenuOutlined />
        </Radio.Button>
      </Radio.Group>

      <Row gutter={16} className="courses__cards-block">
        {data.map((item: ICourse) => {
          return (
            <Col key={item.id} span={6}>
              <ProfileCard
                name={`${item.teacher.name} ${item.teacher.surname}`}
                avatar={`${config.API_URL}/${item.teacher.avatar.avatarPath}`}
                subject={item.title}
                icon={`${config.API_URL}/${item.logo.logoPath}`}
                lesson={item.lessons.length}
                hour={hoursCalculation(item.lessons)}
                progress={99}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
