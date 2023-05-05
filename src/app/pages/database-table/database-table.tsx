import React, { useEffect, useState } from 'react';
import {
  EllipsisOutlined,
  FilterOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Radio, Tooltip } from 'antd';
import { InformTable } from '@components/ui-kit';
import { UserType } from '@components/ui-kit/inform-table/models';
import { useGetStudentsQuery, useGetTeachersQuery } from '@store/database';

import './styles.scss';

export const DatabaseTable: React.FC = () => {
  const { data: students, isSuccess } = useGetStudentsQuery({ data: 'string' });
  const { data: teachers } = useGetTeachersQuery('database');
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    setUsers(students);
  }, [isSuccess]);

  const sortByName = async () => {
    console.log('sortByName');
  };

  const sortByAge = () => {
    console.log('sortByAge');
  };

  const sortByID = () => {
    console.log('sortByID');
  };

  const filterMale = () => {
    console.log('filterMale');
  };

  const filterFemale = () => {
    console.log('filterFemale');
  };

  const sortMenuItems: MenuProps['items'] = [
    {
      label: (
        <button className="dropped-btn" type="button" onClick={sortByName}>
          Sort by name
        </button>
      ),
      key: '0',
    },
    {
      label: (
        <button className="dropped-btn" type="button" onClick={sortByAge}>
          Sort by age
        </button>
      ),
      key: '1',
    },
    {
      label: (
        <button className="dropped-btn" type="button" onClick={sortByID}>
          Sort by ID
        </button>
      ),
      key: '2',
    },
  ];

  const filterMenuItems: MenuProps['items'] = [
    {
      label: (
        <button className="dropped-btn" type="button" onClick={filterMale}>
          Male
        </button>
      ),
      key: '0',
    },
    {
      label: (
        <button className="dropped-btn" type="button" onClick={filterFemale}>
          Female
        </button>
      ),
      key: '1',
    },
  ];

  const getTeachers = () => {
    setUsers(teachers);
  };

  const getStudents = () => {
    setUsers(students);
  };

  return (
    <div className="database-table">
      <div className="database-table__header">
        <div className="database-table__header__title">Database</div>
        <div className="database-table__header__btn">
          <Dropdown menu={{ items: sortMenuItems }}>
            <Button>
              Sort
              <OrderedListOutlined />
            </Button>
          </Dropdown>

          <Dropdown menu={{ items: filterMenuItems }}>
            <Button>
              Filter
              <FilterOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="database-table__btn-block">
        <Radio.Group
          className="database-table__btn-block__radio"
          defaultValue="student"
        >
          <Radio.Button onClick={getStudents} value="student">
            Student
          </Radio.Button>
          <Radio.Button onClick={getTeachers} value="teacher">
            Teacher
          </Radio.Button>
        </Radio.Group>
        <Tooltip className="database-table__btn-block__right" title="search">
          <Button shape="circle" icon={<EllipsisOutlined />} />
        </Tooltip>
      </div>

      <InformTable users={users} />
    </div>
  );
};
