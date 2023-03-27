import React from 'react';
import { Button, Dropdown } from 'antd';
import filter from 'assets/images/filter.svg';

import './style.scss';

export const Filter: React.FC<any> = ({ items }) => {
  return (
    <Dropdown className="filter-sort" menu={{ items }} placement="bottom">
      <Button>
        {' '}
        Filter <img src={filter} alt="filter" />
      </Button>
    </Dropdown>
  );
};
