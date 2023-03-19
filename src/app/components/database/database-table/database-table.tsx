/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, List, Radio } from 'antd';

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
      <Radio.Group className="database-table__btn-block">
        <Radio.Button value="student">Student</Radio.Button>
        <Radio.Button value="teacher">Teacher</Radio.Button>
      </Radio.Group>
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
