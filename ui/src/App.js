import React from 'react';
import { Typography, Space, Divider } from 'antd';

import './App.less';
import logo from './logo.svg';

const { Title } = Typography;

const App = () => (
  <>
    <section className="header">
      <Space align="start">
        <img width="40" height="40" src={logo} alt="Logo" />
        <Title level={2} style={{ marginBottom: 0 }}>
          Currency converter
        </Title>
      </Space>
    </section>
    <Divider style={{ marginBottom: 60 }}>Form</Divider>
    <section className="contentContainer">
      Container for the actual currency converter interface
    </section>
  </>
);

export default App;
