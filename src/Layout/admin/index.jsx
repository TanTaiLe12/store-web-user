import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { MdCategory } from 'react-icons/md';
import { LayoutAdminStyled } from '../styled';
import {
  AiFillDashboard,
  AiFillProduct,
  AiOutlineUser,
  AiTwotoneMedicineBox,
} from 'react-icons/ai';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const LayoutAdmin = ({ children, isAuth = false }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <LayoutAdminStyled $isAuth={!isAuth}>
      {isAuth ? (
        <>{children}</>
      ) : (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">STORE</div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <AiFillDashboard size={20} />,
                  label: 'Dashboard',
                },
                {
                  key: '2',
                  icon: <AiFillProduct size={20} />,
                  label: 'Product',
                },
                {
                  key: '3',
                  icon: <MdCategory size={20} />,
                  label: 'Category',
                },
                {
                  key: '4',
                  icon: <AiTwotoneMedicineBox size={20} />,
                  label: 'Order',
                },
                {
                  key: '5',
                  icon: <AiOutlineUser size={20} />,
                  label: 'User',
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      )}
    </LayoutAdminStyled>
  );
};
export default LayoutAdmin;
