import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover, Space } from 'antd';
import { config } from '@core/config';

import './styles.scss';

export const UpdateUserButton: React.FC = () => {
  // const navigate = useNavigate();

  const updateUser = () => {
    console.log('useredit');
    // navigate('/auth/update');
  };

  const logout = () => {
    console.log('logout');
  };

  return (
    <div className="update-user">
      <Avatar
        size={32}
        src={
          <img
            // src={`${config.API_URL}/${avatar.avatarPath}`}
            src={`${config.API_URL}/`}
            alt="avatar"
          />
        }
      />
      <span>name</span>
      <Popover
        placement="topRight"
        content={
          <Space direction="vertical">
            <Button type="text" onClick={() => updateUser()}>
              Edit profile
            </Button>
            <Button type="text" onClick={() => logout()}>
              Logout
            </Button>
          </Space>
        }
        trigger="click"
      >
        <DownOutlined />
      </Popover>
    </div>
  );
};
