import React from 'react';
import { Outlet } from 'react-router-dom';
import { Avatar, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { config } from '@core/config';

import './styles.scss';

export const ClientLayout: React.FC = () => {
  const userEdit = () => {
    console.log('useredit');
  };

  return (
    <Layout className="client-layout">
      <Sider>
        <Menu className="client-layout-menu" />
      </Sider>

      <Layout className="client-layout-wrapper">
        <Header className="header">
          <div className="header__userEdit" onClick={() => userEdit()}>
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
          </div>
        </Header>
        <Layout className="content">
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
