import React, { useCallback, useState } from 'react';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Col, Radio, Row, Spin } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { ProfileCard } from '@components/ui-kit';
import { config } from '@core/config';
import { useGetCoursesQuery } from '@store/courses';
import { LessonsModal } from './components';
import { ICourse, ILesson } from './models';

import './styles.scss';

export const CoursesBlock: React.FC<any> = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ILesson | null>(null);
  const { data = [], isLoading } = useGetCoursesQuery(null);

  function onHandleChange(e: any) {
    setComponentSize(e.target.value);
  }

  const toggleVisibility = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);

  const onModalOpen = (item: ILesson) => {
    setSelectedItem(item);
    toggleVisibility();
  };

  const onModalCancel = () => {
    setSelectedItem(null);
    toggleVisibility();
  };

  const hoursCalculation = (lessons: Array<ILesson>) => {
    return lessons.reduce((acc: number, cur: ILesson) => {
      const hours = acc + cur.duration;

      return hours;
    }, 0);
  };

  const dropDownContent = (lessons: Array<ILesson>): any => {
    return (
      <div className="lessons-content">
        {lessons.map((item: ILesson) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return <Button onClick={onModalOpen}>{item.title}</Button>;
        })}
      </div>
    );
  };

  if (isLoading) {
    return <Spin tip="Loading" size="large" />;
  }

  return (
    <div className="courses">
      <LessonsModal
        open={isVisible}
        onOk={toggleVisibility}
        onCancel={onModalCancel}
        item={selectedItem}
      />

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
                content={dropDownContent(item.lessons)}
                progress={99}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
