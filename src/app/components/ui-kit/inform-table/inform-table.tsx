import React from 'react';
import { Divider, Table } from 'antd';
import { COLUMNS } from './models';

import './styles.scss';

export interface InformTableType {
  key: React.Key;
  name: string;
  photo: any;
  userId: string;
  class: string;
  gender: string;
  age: number;
  email: string;
}

export type UserPropsType = {
  id: string;
  name: string;
  surname: string;
  avatar: any;
  userId: string;
  gender: string;
  age: number;
  email: string;
};

export const InformTable: React.FC<any> = ({ data }) => {
  return (
    <div className="inform-table">
      <Divider>Middle size table</Divider>
      <Table
        columns={COLUMNS}
        dataSource={data}
        rowKey={record => record.userId}
        size="middle"
      />
    </div>
  );
};
