import React from 'react';
import { Input, Space } from 'antd';

import './styles.scss';

const { Search: AntSearch } = Input;

const onSearch = (value: string) => console.log(value);

export const Search: React.FC = () => {
  return (
    <Space className="search-component" direction="vertical">
      <AntSearch
        placeholder="Search"
        allowClear
        size="large"
        onSearch={onSearch}
      />
    </Space>
  );
};
