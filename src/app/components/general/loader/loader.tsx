import React from 'react';
import { Spin } from 'antd';

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};
