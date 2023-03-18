import React from 'react';
import { Radio, Space, Table } from 'antd';

export const DatabaseTable: React.FC = () => {
  return (
    <>
      <Radio.Group>
        <Radio.Button value="Student">Student</Radio.Button>
        <Radio.Button value="Teacher">Teacher</Radio.Button>
      </Radio.Group>
      <Space size={[0, 16]} style={{ width: '100%' }} direction="vertical">
        <Table
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
            },
            {
              title: 'ID',
              dataIndex: 'id',
            },
            {
              title: 'Class',
              dataIndex: 'class',
            },
            {
              title: 'Age',
              dataIndex: 'age',
            },
            {
              title: 'Gender',
              dataIndex: 'gender',
            },
            {
              title: 'Email',
              dataIndex: 'email',
            },
          ]}
          dataSource={[
            {
              key: '1',
              name: 'Ken Khoi',
              id: 'SC400122',
              class: 'Science 4',
              age: 40,
              gender: 'Male',
              email: 'kkhoi@gmail.com',
              imageId: 'SC400122',
            },
            {
              key: '2',
              name: 'Zach Sweger',
              id: 'SC400122',
              class: 'Science 4',
              age: 40,
              gender: 'Male',
              email: 'kkhoi@gmail.com',
              imageId: 'SC400122',
            },
            {
              key: '3',
              name: 'Brooklyn Simmins',
              id: 'SC400122',
              class: 'Science 4',
              age: 40,
              gender: 'Male',
              email: 'kkhoi@gmail.com',
              imageId: 'SC400122',
            },
          ]}
        />
      </Space>
    </>
  );
};
