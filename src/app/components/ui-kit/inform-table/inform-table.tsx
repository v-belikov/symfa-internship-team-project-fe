import React from 'react';
import { Divider, Table } from 'antd';
import { COLUMNS, UserType } from './models';

import './styles.scss';

export const InformTable: React.FC<UserType[] | any> = ({ users }) => {
  console.log(users);

  return (
    <div className="inform-table">
      <Divider>Middle size table</Divider>
      <Table
        columns={COLUMNS}
        dataSource={users}
        rowKey={record => record.id}
        size="middle"
      />
    </div>
  );
};
