/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { config } from '@core/config';
import { IAvatar, UserType } from './inform-table.interface';

export const COLUMNS: ColumnsType<UserType> = [
  {
    title: '',
    dataIndex: 'avatar',
    render: (avatar: IAvatar) => {
      return (
        <Avatar
          size={32}
          src={
            <img src={`${config.API_URL}/${avatar.avatarPath}`} alt="avatar" />
          }
        />
      );
    },
  },
  {
    title: 'Name',
    dataIndex: '',
    render: (user: UserType) => <div>{`${user.name} ${user.surname}`}</div>,
  },
  {
    title: 'ID',
    dataIndex: 'userId',
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
