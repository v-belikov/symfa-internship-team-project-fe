import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { InformTableType } from '@components/ui-kit';

export const MOCK_DATA: InformTableType[] = [
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
