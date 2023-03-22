import React, { useState } from 'react';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import { Radio, Row, Spin } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useGetCoursesQuery } from '@store/courses';

import './styles.scss';

export const CoursesBlock: React.FC<any> = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');
  const { data = [], isLoading } = useGetCoursesQuery(null);

  function onHandleChange(e: any) {
    setComponentSize(e.target.value);
  }

  // {MOCK_DATA.map(item => {
  //   return (
  //     <Col key={item.id} span={6}>
  //       <ProfileCard
  //         name={item.name}
  //         avatar={item.avatar}
  //         subject={item.subject}
  //         icon={item.icon}
  //         lesson={item.lesson}
  //         hour={item.hour}
  //         progress={item.progress}
  //       />
  //     </Col>
  //   );
  // })}

  if (isLoading) {
    return <Spin tip="Loading" size="large" />;
  }

  console.log(data);

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
        data
      </Row>
    </div>
  );
};
