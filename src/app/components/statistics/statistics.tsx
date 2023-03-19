/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, message, Progress, Space } from 'antd';

import './styles.scss';

const items: MenuProps['items'] = [
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

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

export const Statistics: React.FC = () => {
  return (
    <div className="statistics">
      <div className="statistics__header">
        <div className="statistics__header__title">Statistics</div>
        <Dropdown className="statistics__header__btn-block" menu={menuProps}>
          <Button>
            <Space>
              Yearly
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="statistics__content">
        <Space direction="vertical">
          {items.map(item => {
            return (
              <div key={item?.key} className="statistics__content__item">
                <p>{item?.key}</p>
                <Progress percent={50} size={[300, 40]} />
              </div>
            );
          })}
        </Space>
      </div>
    </div>
  );
};
