import React, { useCallback, useState } from 'react';
import { Button, Col, MenuProps, Radio, RadioChangeEvent, Row } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import FilterLogo from 'assets/images/courses/filter.svg';
import GridLogo from 'assets/images/courses/grid.svg';
import ListLogo from 'assets/images/courses/list.svg';
import SortLogo from 'assets/images/courses/sort.svg';
import {
  FilterSort,
  Loader,
  ProfileCard,
  ProfileCardList,
} from '@components/ui-kit';
import { config } from '@core/config';
import { useGetCoursesQuery, useGetTeachersQuery } from '@store/courses';
import { LessonsModal } from './components';
import { ICourse, ILesson } from './models';

import './styles.scss';

export const CoursesBlock: React.FC<any> = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');
  const [switchView, setSwitchView] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ILesson | null>(null);
  const [filter, setFilter] = useState<string>('');
  const [sorted, setSorted] = useState<string>('');

  const { data: teachers } = useGetTeachersQuery({});

  const clear = () => {
    setFilter('');
    setSorted('');
  };

  const onChangeFilter = (activeFilter: string) => {
    setFilter(activeFilter);
  };

  const onChangeSort = (activeSort: string) => {
    setSorted(activeSort);
  };

  const { data: courses, isLoading } = useGetCoursesQuery({
    teacher: filter,
    sort: sorted,
  });

  const teachersList = (): MenuProps['items'] => {
    return teachers?.map((item: string, index: number) => {
      return {
        key: index,
        label: <div onClick={() => onChangeFilter(item)}> {item}</div>,
      };
    });
  };

  const sortList: MenuProps['items'] = [
    {
      key: '1',
      label: <div onClick={() => onChangeSort('name')}>Course name</div>,
    },
  ];

  const hoursCalculation = (lessons: Array<ILesson>): number => {
    return lessons.reduce((acc: number, cur: ILesson) => {
      return acc + cur.duration;
    }, 0);
  };

  const onHandleChange = (e: RadioChangeEvent) => {
    setComponentSize(e.target.value);
    setSwitchView(!switchView);
  };

  const toggleVisibility = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);

  const onModalOpen = (item: ILesson): void => {
    setSelectedItem(item);
    toggleVisibility();
  };

  // Для подтверждения того что урок пройден
  const onModalOK = (): void => {
    setSelectedItem(null);
    toggleVisibility();
  };
  // Для отмены прохождения урока и закрытия модального окна
  const onModalCancel = (): void => {
    setSelectedItem(null);
    toggleVisibility();
  };

  const dropDownContent = (lessons: Array<ILesson>) => {
    return (
      <div className="lessons-content">
        {lessons.map((item: ILesson) => {
          return (
            <Button key={item.id} onClick={() => onModalOpen(item)}>
              {item.title}
            </Button>
          );
        })}
      </div>
    );
  };

  const createProfileCard = (list: Array<ICourse>) => {
    return list.map((item: ICourse) => {
      const props = {
        name: `${item.teacher.name} ${item.teacher.surname}`,
        avatar: `${config.API_URL}/${item.teacher.avatar.avatarPath}`,
        subject: item.title,
        icon: `${config.API_URL}/${item.logo}`,
        lesson: item.lessons.length,
        hour: hoursCalculation(item.lessons),
        content: dropDownContent(item.lessons),
        progress: 50,
      };

      return switchView ? (
        <Col key={item.id} span={25}>
          <ProfileCardList {...props} description={item.description} />
        </Col>
      ) : (
        <Col key={item.id} span={6}>
          <ProfileCard {...props} />
        </Col>
      );
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="courses">
      <LessonsModal
        open={isVisible}
        onOk={onModalOK}
        onCancel={onModalCancel}
        item={selectedItem}
      />
      <div className="courses__header">
        <Radio.Group
          className="courses__header__btn-block"
          value={componentSize}
          onChange={onHandleChange}
        >
          <Radio.Button value="small">
            <img src={GridLogo} alt="grid" />
          </Radio.Button>
          <Radio.Button value="large">
            <img src={ListLogo} alt="list" />
          </Radio.Button>
        </Radio.Group>
        <div className="filter-sort-wrapper">
          <FilterSort title="Sort" logo={SortLogo} items={sortList} />{' '}
          <FilterSort title="Filter" logo={FilterLogo} items={teachersList()} />{' '}
          <Button
            className="filter-sort-wrapper__clear-btn"
            onClick={() => clear()}
          >
            Clear
          </Button>
        </div>
      </div>
      <Row gutter={16} className="courses__cards-block">
        {createProfileCard(courses)}
      </Row>
    </div>
  );
};
