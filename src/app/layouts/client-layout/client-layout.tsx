import React from 'react';
import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { CoursesBlock } from '@pages/courses-block';

import './styles.scss';

export const ClientLayout: React.FC = () => {
  return (
    <Layout className="client-layout">
      <Sider>
        <Menu className="client-layout-menu" />
      </Sider>

      <Layout className="client-layout-wrapper">
        <Header className="header" />
        <Layout className="content">
          <Content>
            <CoursesBlock />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
