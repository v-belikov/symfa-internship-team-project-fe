import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, message, Progress, Space } from 'antd';
import { MOCK_DATA, YEARS_OPTIONS } from './models';

import './styles.scss';

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menuProps = {
  items: YEARS_OPTIONS,
  onClick: handleMenuClick,
};

export const YearsStatistics: React.FC = () => {
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
