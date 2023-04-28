import React from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover, Space } from 'antd';
import { config } from '@core/config';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import { logout } from '@store/users/models/auth-slice';

import './styles.scss';

export const UpdateUserButton: React.FC = () => {
  const navigate = useNavigate();

  const selectedUser = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();

  const updateUser = () => {
    navigate('/auth/update');
  };

  const logoutUser = () => {
    dispatch(logout() as any);
    navigate('/auth');
  };

  return (
    <div className="update-user">
      <Avatar
        size={64}
        src={
          <img
            src={`${config.API_URL}${selectedUser?.avatar?.avatarPath}`}
            alt="avatar"
          />
        }
      />
      <span>{selectedUser?.name}</span>
      <Popover
        placement="topRight"
        content={
          <Space direction="vertical">
            <Button type="text" onClick={updateUser}>
              Edit profile
            </Button>
            <Button type="text" onClick={logoutUser}>
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
