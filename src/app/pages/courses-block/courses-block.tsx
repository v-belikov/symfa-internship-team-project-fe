import React, { useCallback, useEffect, useState } from 'react';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Col, MenuProps, Radio, Row } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import {
  Filter,
  Loader,
  ProfileCard,
  ProfileCardList,
  Sort,
} from '@components/ui-kit';
import { config } from '@core/config';
import { useGetCoursesQuery } from '@store/courses';
import { LessonsModal } from './components';
import { ICourse, ILesson } from './models';

import './styles.scss';

export const CoursesBlock: React.FC<any> = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');
  const [switchView, setSwitchView] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ILesson | null>(null);
  const { data = [], isLoading } = useGetCoursesQuery(null);
  const [filtered, setFiltered] = useState(data);
  const [sorted, setSorted] = useState(data);
  const [activeAction, setActiveAction] = useState<string>('');

  const clear = () => {
    setFiltered(data);
    setSorted(data);
  };

  useEffect(() => {
    clear();
  }, [data]);

  const sortedList = (filteredList: Array<ICourse>) => {
    setSorted(
      [...filteredList].sort((x: ICourse, y: ICourse) =>
        x.title.localeCompare(y.title),
      ),
    );
    setActiveAction('sorted');
  };

  const courseFilter = (trigger: string): void => {
    if (!trigger) {
      setFiltered(data);
    } else {
      const newData = data.filter(
        (item: ICourse) =>
          `${item.teacher.name} ${item.teacher.surname}` === trigger,
      );

      if (activeAction === 'sorted') {
        sortedList(newData);
      } else {
        setActiveAction('filtered');
      }

      setFiltered(newData);
    }
  };

  const teachersList = (): MenuProps['items'] => {
    return data.map((item: ICourse, index: number) => {
      const fullName = `${item.teacher.name} ${item.teacher.surname}`;

      return {
        key: index,
        label: <div onClick={() => courseFilter(fullName)}> {fullName}</div>,
      };
    });
  };

  const sortList: MenuProps['items'] = [
    {
      key: '1',
      label: <div onClick={() => sortedList(filtered)}>Course name</div>,
    },
  ];

  const hoursCalculation = (lessons: Array<ILesson>): number => {
    return lessons.reduce((acc: number, cur: ILesson) => {
      const hours = acc + cur.duration;

      return hours;
    }, 0);
  };

  function onHandleChange(e: any) {
    setComponentSize(e.target.value);
    setSwitchView(!switchView);
  }

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
        icon: `${config.API_URL}/${item.logo.logoPath}`,
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

  const filteredSortedList = () => {
    switch (activeAction) {
      case 'filtered':
        return createProfileCard(filtered);
      case 'sorted':
        return createProfileCard(sorted);
      default:
        return createProfileCard(data);
    }
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
          onChange={e => onHandleChange(e)}
        >
          <Radio.Button value="small">
            <AppstoreOutlined />
          </Radio.Button>
          <Radio.Button value="large">
            <MenuOutlined />
          </Radio.Button>
        </Radio.Group>
        <div className="filter-sort-wrapper">
          <Sort items={sortList} /> <Filter items={teachersList()} />{' '}
          <Button
            className="filter-sort-wrapper__clear-btn"
            onClick={() => clear()}
          >
            Clear
          </Button>
        </div>
      </div>
      <Row gutter={16} className="courses__cards-block">
        {filteredSortedList()}
      </Row>
    </div>
  );
};
