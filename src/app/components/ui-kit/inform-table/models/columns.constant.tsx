import type { ColumnsType } from 'antd/es/table';
import { InformTableType } from '../inform-table';

export const COLUMNS: ColumnsType<InformTableType> = [
  {
    title: '',
    dataIndex: 'photo',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'ID',
    dataIndex: 'id',
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
