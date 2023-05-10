import React from 'react';
import { Button, Dropdown } from 'antd';

export const FilterSort: React.FC<any> = ({ items, title, logo }) => {
  return (
    <Dropdown className="filter-sort" menu={{ items }} placement="bottom">
      <Button>
        {title} <img src={logo} alt="sort" />
      </Button>
    </Dropdown>
  );
};
