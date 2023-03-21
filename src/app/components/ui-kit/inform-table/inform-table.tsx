import React from 'react';
import { Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import './styles.scss';

export interface InformTableType {
  key: React.Key;
  name: string;
  photo: any;
  id: string;
  class: string;
  gender: string;
  age: number;
  email: string;
}

const columns: ColumnsType<InformTableType> = [
  {
    title: '',
    dataIndex: 'photo',
  },
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
];

export const InformTable: React.FC<any> = ({ data }) => (
  <div className="inform-table">
    <Divider>Middle size table</Divider>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>
);
