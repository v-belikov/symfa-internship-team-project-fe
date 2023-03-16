import React from 'react';
import { Outlet } from 'react-router-dom';
import { Space } from 'antd';

import './styles.scss';

export const RegistrationLayout: React.FC = () => {
  return (
    <div className="registration-layout">
      <Space direction="vertical" size={16}>
        <Outlet />
      </Space>
    </div>
  );
};
