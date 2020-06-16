import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import Hospitals from "./Hospitals";
import Sidenav from './Sidenav';
import Topnav from './Topnav';

const { Content } = Layout;

// WRITE CSS TO MOVE SIDENAV IN AND OUT BASED ON DEVICE SIZE

export default function Main(props:object) {
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Topnav />
      <Layout>
        <Sidenav />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
          <Hospitals />
          </Content>
        </Layout>
      </Layout>
    </Layout>);
}

