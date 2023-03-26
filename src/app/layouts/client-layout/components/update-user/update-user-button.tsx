import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover, Space } from 'antd';
import { config } from '@core/config';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import { useGetCurrentUserQuery } from '@store/users';
import { logout } from '@store/users/models/auth-slice';

import './styles.scss';

export const UpdateUserButton: React.FC = () => {
  const navigate = useNavigate();
  const selectedtoken = useAppSelector(state => state.user.token);
  const { data: loggedUser } = useGetCurrentUserQuery({ selectedtoken });

  const dispatch = useAppDispatch();

  const updateUser = () => {
    console.log(loggedUser);
    navigate('/auth/update');
  };

  const logoutUser = () => {
    dispatch(logout() as any);
    console.log('logout');
    navigate('/auth');
  };

  return (
    <div className="update-user">
      <Avatar
        size={64}
        src={
          <img
            src={`${config.API_URL}${loggedUser?.avatarPath}`}
            alt="avatar"
          />
        }
      />
      <span>{loggedUser?.name}</span>
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
