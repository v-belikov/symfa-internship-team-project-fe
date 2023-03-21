import React from 'react';
import {
  EllipsisOutlined,
  FilterOutlined,
  OrderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Radio, Tooltip } from 'antd';
import { InformTable, InformTableType } from '@components/ui-kit';

import './styles.scss';

export const DatabaseTableBlock: React.FC = () => {
  const MOCK_DATA: InformTableType[] = [
    {
      key: '1',
      id: '1',
      photo: <UserOutlined />,
      name: 'John Brown',
      age: 32,
      class: 'Science 4',
      gender: 'Male',
      email: 'kkhoi@gmail.com',
    },
    {
      key: '2',
      id: '2',
      photo: <UserOutlined />,
      name: 'Jim Green',
      age: 42,
      class: 'Science 4',
      gender: 'Male',
      email: 'kkhoi@gmail.com',
    },
    {
      key: '3',
      id: '3',
      photo: <UserOutlined />,
      name: 'Joe Black',
      age: 32,
      class: 'Science 4',
      gender: 'Male',
      email: 'kkhoi@gmail.com',
    },
  ];

  return (
    <div className="database-table-block">
      <div className="database-table-block__header">
        <div className="database-table-block__header__title">Database</div>
        <div className="database-table-block__header__btn-block">
          <Button>
            Sort <OrderedListOutlined />
          </Button>
          <Button>
            Filter <FilterOutlined />
          </Button>
        </div>
      </div>
      <div className="database-table-block__btn-block">
        <Radio.Group className="database-table-block__btn-block__radio">
          <Radio.Button value="student">Student</Radio.Button>
          <Radio.Button value="teacher">Teacher</Radio.Button>
        </Radio.Group>
        <Tooltip
          className="database-table__btn-block-block__right"
          title="search"
        >
          <Button shape="circle" icon={<EllipsisOutlined />} />
        </Tooltip>
      </div>

      <InformTable data={MOCK_DATA} />
    </div>
  );
};
