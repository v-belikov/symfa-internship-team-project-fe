import { MenuProps } from 'antd';

export const items: MenuProps['items'] = [
  {
    label: '2020',
    key: '1',
  },
  {
    label: '2021',
    key: '2',
  },
  {
    label: '2022',
    key: '3',
    danger: true,
  },
  {
    label: '2023',
    key: '4',
    danger: true,
    disabled: true,
  },
];
