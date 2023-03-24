import React from 'react';
import { FileOutlined, HomeOutlined, ReadOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

export const MENU_ITEMS: MenuItem[] = [
  getItem('Dashboard', '1', <HomeOutlined />),
  getItem('Courses', '2', <ReadOutlined />),
  getItem('Database', '3', <FileOutlined />),
];
