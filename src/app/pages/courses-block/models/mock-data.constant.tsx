import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import graphic_icon from 'assets/images/cards/graphic-card-img.png';
import history_icon from 'assets/images/cards/history-card-img.png';

export const MOCK_DATA: any[] = [
  {
    id: 1,
    name: 'William Joe',
    avatar: <UserOutlined />,
    subject: 'History of graphic design',
    lesson: 15,
    hour: 15,
    progress: 0,
    icon: history_icon,
  },
  {
    id: 2,
    name: 'William Joe',
    avatar: <UserOutlined />,
    subject: 'History of graphic design',
    lesson: 125,
    hour: 5,
    progress: 55,
    icon: graphic_icon,
  },
  {
    id: 3,
    name: 'William Joe',
    avatar: <UserOutlined />,
    subject: 'Graphic Design',
    lesson: 15,
    hour: 25,
    progress: 25,
    icon: history_icon,
  },
  {
    id: 4,
    name: 'William Joe',
    avatar: <UserOutlined />,
    subject: 'Digital Panting',
    lesson: 15,
    hour: 15,
    progress: 35,
    icon: graphic_icon,
  },
  {
    id: 5,
    name: 'William Joe',
    avatar: <UserOutlined />,
    subject: 'Sketching for Designers',
    lesson: 15,
    hour: 15,
    progress: 100,
    icon: history_icon,
  },
];
