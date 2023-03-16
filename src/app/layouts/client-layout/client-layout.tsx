import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';
import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

import './styles.scss';

export const ClientLayout: React.FC = () => {
  return (
    <StyleProvider hashPriority="high">
      <Layout className="client-layout">
        <Sider>
          <Menu className="client-layout-menu">
            <Outlet />
          </Menu>
        </Sider>

        <Layout className="client-layout-wrapper">
          <Header className="header" />
          <Layout className="content">
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </StyleProvider>
  );
};
