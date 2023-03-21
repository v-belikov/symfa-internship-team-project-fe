import React from 'react';
import { Divider, Table } from 'antd';
import { COLUMNS } from './models';

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

export const InformTable: React.FC<any> = ({ data }) => (
  <div className="inform-table">
    <Divider>Middle size table</Divider>
    <Table columns={COLUMNS} dataSource={data} size="middle" />
  </div>
);
