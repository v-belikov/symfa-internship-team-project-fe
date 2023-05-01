import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { EducationBtnBlock } from '@pages/education-btn-block';
import { UpdateUserButton } from './components/update-user';

import './styles.scss';

export const ClientLayout: React.FC = () => {
  return (
    <Layout className="client-layout">
      <EducationBtnBlock />

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
