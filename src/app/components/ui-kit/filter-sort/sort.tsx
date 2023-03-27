import React from 'react';
import { Button, Dropdown } from 'antd';
import sort from 'assets/images/sort.svg';

export const Sort: React.FC<any> = ({ items }) => {
  return (
    <Dropdown className="filter-sort" menu={{ items }} placement="bottom">
      <Button>
        Sort <img src={sort} alt="sort" />
      </Button>
    </Dropdown>
  );
};
