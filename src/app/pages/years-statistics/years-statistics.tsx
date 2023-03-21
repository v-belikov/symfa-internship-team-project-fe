import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, message, Progress, Space } from 'antd';
import { YEARS_OPTIONS } from './models';

import './styles.scss';

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menuProps = {
  YEARS_OPTIONS,
  onClick: handleMenuClick,
};

export const YearsStatistics: React.FC = () => {
  const MOCK_DATA: any[] = [
    { key: 1, year: 2020, percent: 20 },
    { key: 2, year: 2021, percent: 80 },
    { key: 3, year: 2022, percent: 40 },
    { key: 4, year: 2023, percent: 90 },
  ];

  return (
    <div className="years-statistics">
      <div className="years-statistics__header">
        <div className="years-statistics__header__title">Statistics</div>
        <Dropdown
          className="years-statistics__header__btn-block"
          menu={menuProps}
        >
          <Button>
            <Space>
              Yearly
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="years-statistics__content">
        <Space direction="vertical">
          {MOCK_DATA.map(item => {
            return (
              <div key={item.key} className="years-statistics__content__item">
                <p>{item.year}</p>
                <Progress percent={item.percent} size={[300, 40]} />
              </div>
            );
          })}
        </Space>
      </div>
    </div>
  );
};
