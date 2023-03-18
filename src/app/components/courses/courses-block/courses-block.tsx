import React, { useState } from 'react';
import { Divider, Radio, Space, Table } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

export const CoursesBlock: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');

  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={e => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        {/* <Radio.Button value="middle">Middle</Radio.Button> */}
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      {/* <ConfigProvider componentSize={componentSize}> */}
      <Space size={[0, 16]} style={{ width: '100%' }} direction="vertical">
        <Table
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
            },
            {
              title: 'Courses',
              dataIndex: 'courses',
            },
            {
              title: 'Lesson',
              dataIndex: 'lesson',
            },
            {
              title: 'Hours',
              dataIndex: 'hours',
            },
          ]}
          dataSource={[
            {
              key: '1',
              name: 'John Brown',
              courses: 'History of graphic design',
              lesson: 15,
              hours: 40,
            },
            {
              key: '2',
              name: 'Jim Green',
              courses: 'History of graphic design',
              lesson: 15,
              hours: 40,
            },
            {
              key: '3',
              name: 'Joe Black',
              courses: 'History of graphic design',
              lesson: 15,
              hours: 40,
            },
          ]}
        />
      </Space>
      {/* </ConfigProvider> */}
    </>
  );
};
