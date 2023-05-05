import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Navigation } from '@pages/navigation/navigation';
import { UpdateUserButton } from './components/update-user';

import './styles.scss';

export const ClientLayout: React.FC = () => {
  return (
    <Layout className="client-layout">
      <Navigation />

      <Layout className="client-layout-wrapper">
        <Header className="header">
          <UpdateUserButton />
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
