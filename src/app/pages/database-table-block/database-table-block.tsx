/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  EllipsisOutlined,
  FilterOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Radio, Tooltip } from 'antd';
import { InformTable, UserPropsType } from '@components/ui-kit';
import { useGetStudentsQuery, useGetTeachersQuery } from '@store/database';

import './styles.scss';

export const DatabaseTableBlock: React.FC = () => {
  const { data: students, isSuccess } = useGetStudentsQuery('database');
  const { data: teachers } = useGetTeachersQuery('database');
  const [users, setUsers] = useState<UserPropsType[]>(students);
  const [dataForSort, setDataForSort] = useState(users);

  const sortByName = () => {
    const SortUsers = [...users].sort((a: UserPropsType, b: UserPropsType) => {
      return a.name > b.name ? 1 : -1;
    });

    setUsers(SortUsers);
  };

  const sortByAge = () => {
    const SortUsers = [...users].sort((a: UserPropsType, b: UserPropsType) => {
      return a.age > b.age ? 1 : -1;
    });

    setUsers(SortUsers);
  };

  const sortByID = () => {
    const SortUsers = [...users].sort((a: UserPropsType, b: UserPropsType) => {
      return a.userId > b.userId ? 1 : -1;
    });

    setUsers(SortUsers);
  };

  const filterMale = () => {
    setUsers(
      dataForSort.filter(item => item.gender.toLocaleLowerCase() === 'male'),
    );
  };

  const filterFemale = () => {
    setUsers(
      dataForSort.filter(item => item.gender.toLowerCase() === 'female'),
    );
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

  useEffect(() => {
    setUsers(students);
  }, [isSuccess]);

  useEffect(() => {
    setDataForSort(users);
  }, []);

  return (
    <div className="database-table-block">
      <div className="database-table-block__header">
        <div className="database-table-block__header__title">Database</div>
        <div className="database-table-block__header__btn-block">
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
          {/* <Button>
            Filter <FilterOutlined />
          </Button> */}
        </div>
      </div>
      <div className="database-table-block__btn-block">
        <Radio.Group className="database-table-block__btn-block__radio">
          <Radio.Button onClick={getStudents} value="student">
            Student
          </Radio.Button>
          <Radio.Button onClick={getTeachers} value="teacher">
            Teacher
          </Radio.Button>
        </Radio.Group>
        <Tooltip
          className="database-table__btn-block-block__right"
          title="search"
        >
          <Button shape="circle" icon={<EllipsisOutlined />} />
        </Tooltip>
      </div>

      <InformTable data={users} />
    </div>
  );
};
