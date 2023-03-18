import React from 'react';
import { Input, Space } from 'antd';

import './styles.scss';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export const SearchComponent: React.FC = () => {
  return (
    <Space className="search-component" direction="vertical">
      <Search
        placeholder="Search"
        allowClear
        // enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </Space>
  );
};
