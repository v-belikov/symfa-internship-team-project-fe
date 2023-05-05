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
import { Gender, Shift, Sort, SortOrder } from './models';

import './styles.scss';

export const DatabaseTable: React.FC = () => {
  const [typeUsers, setTypeOfUsers] = useState<Shift>(Shift.Students);
  const [sort, setSort] = useState<Sort>(Sort.Name);
  const [gender, setGender] = useState<Gender>(Gender.All);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [order, setOrder] = useState<SortOrder>(SortOrder.Increase);
  const [filterObject, setFilterObject] = useState({ sort, gender, order });
  const [users, setUsers] = useState<UserType[]>([]);
  const { data: students, isSuccess } = useGetStudentsQuery({ filterObject });
  const { data: teachers } = useGetTeachersQuery({ filterObject });

  useEffect(() => {
    setUsers(students);
  }, [isSuccess]);

  const sortMenuItems: MenuProps['items'] = [
    {
      label: (
        <button
          className="dropped-btn"
          type="button"
          onClick={() => setSort(Sort.Name)}
        >
          Sort by name
        </button>
      ),
      key: '0',
    },
    {
      label: (
        <button
          className="dropped-btn"
          type="button"
          onClick={() => setSort(Sort.Age)}
        >
          Sort by age
        </button>
      ),
      key: '1',
    },
    {
      label: (
        <button
          className="dropped-btn"
          type="button"
          onClick={() => setSort(Sort.Id)}
        >
          Sort by ID
        </button>
      ),
      key: '2',
    },
  ];

  const filterMenuItems: MenuProps['items'] = [
    {
      label: (
        <button
          className="dropped-btn"
          type="button"
          onClick={() => {
            setGender(Gender.Male);
          }}
        >
          Male
        </button>
      ),
      key: '0',
    },
    {
      label: (
        <button
          className="dropped-btn"
          type="button"
          onClick={() => setGender(Gender.Female)}
        >
          Female
        </button>
      ),
      key: '1',
    },
  ];

  const getTeachers = () => {
    console.log(teachers);
    setUsers(teachers);
  };

  const getStudents = () => {
    console.log(students);
    setUsers(students);
  };

  useEffect(() => {
    if (typeUsers === 'students') {
      getStudents();
    } else {
      getTeachers();
    }
  }, [typeUsers]);

  useEffect(() => {
    setFilterObject({ sort, gender, order });
  }, [sort, gender, order]);

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
          defaultValue={Shift.Students}
        >
          <Radio.Button
            onClick={() => setTypeOfUsers(Shift.Students)}
            value={Shift.Students}
          >
            Students
          </Radio.Button>
          <Radio.Button
            onClick={() => setTypeOfUsers(Shift.Teachers)}
            value={Shift.Teachers}
          >
            Teachers
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
