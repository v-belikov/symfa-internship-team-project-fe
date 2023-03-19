import React from 'react';
import { Outlet } from 'react-router-dom';
import { Space } from 'antd';

import './styles.scss';

export const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <Space direction="vertical" size={16}>
        <Outlet />
      </Space>
    </div>
  );
};
