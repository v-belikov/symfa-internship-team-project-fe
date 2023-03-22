import { MenuProps } from 'antd';

export const YEARS_OPTIONS: MenuProps['items'] = [
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

export const MOCK_DATA: any[] = [
  { key: 1, year: 2020, percent: 20 },
  { key: 2, year: 2021, percent: 80 },
  { key: 3, year: 2022, percent: 40 },
  { key: 4, year: 2023, percent: 90 },
];
