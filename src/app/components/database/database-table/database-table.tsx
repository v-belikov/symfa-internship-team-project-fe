/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  EllipsisOutlined,
  FilterOutlined,
  OrderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, List, Radio, Tooltip } from 'antd';

import './styles.scss';

const data = [
  {
    name: 'Ken Khoi',
    id: 'SC400121',
    class: 'Science 4',
    age: '17',
    gender: 'Male',
    email: 'kkhoi@gmail.com',
  },
  {
    name: 'Ken Khoi',
    id: 'SC400122',
    class: 'Science 4',
    age: '17',
    gender: 'Male',
    email: 'kkhoi@gmail.com',
  },
  {
    name: 'Ken Khoi',
    id: 'SC400123',
    class: 'Science 4',
    age: '17',
    gender: 'Male',
    email: 'kkhoi@gmail.com',
  },
];

export const DatabaseTable: React.FC = () => {
  return (
    <div className="database-table">
      <div className="database-table__header">
        <div className="database-table__header__title">Database</div>
        <div className="database-table__header__btn-block">
          <Button>
            Sort <OrderedListOutlined />
          </Button>
          <Button>
            Filter <FilterOutlined />
          </Button>
        </div>
      </div>
      <div className="database-table__btn-block">
        <Radio.Group className="database-table__btn-block__radio">
          <Radio.Button value="student">Student</Radio.Button>
          <Radio.Button value="teacher">Teacher</Radio.Button>
        </Radio.Group>
        <Tooltip className="database-table__btn-block__right" title="search">
          <Button shape="circle" icon={<EllipsisOutlined />} />
        </Tooltip>
      </div>

      <div className="database-table__title">
        <p className="database-table__title__item">Name</p>
        <p className="database-table__title__item__id">ID</p>
        <p className="database-table__title__item">Class</p>
        <p className="database-table__title__item">Age</p>
        <p className="database-table__title__item">Gender</p>
        <p className="database-table__title__item">Email</p>
      </div>
      <List
        className="database-table__list"
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item className="database-table__item" key={item.id}>
            <List.Item.Meta
              className="database-table__item__content"
              avatar={<Avatar icon={<UserOutlined />} />}
              description={
                <div className="database-table__item__content__description">
                  <div>{item.name}</div>
                  <div>{item.id}</div>
                  <div>{item.class}</div>
                  <div>{item.age}</div>
                  <div>{item.gender}</div>
                  <div>{item.email}</div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
