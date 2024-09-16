
import React from 'react';
import { Outlet } from "react-router-dom"
import { Layout, theme, Flex, Typography } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import MenuList from '@/components/menu/MenuList';
import { useAppCtx } from '@/hooks/useAppCtx';

const { Title } = Typography;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
};


const AdminLayout = () => {
  const { state: app } = useAppCtx()
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const MenuListComponent = React.useMemo(()=><MenuList />, [])

  return (
    <Layout hasSider>
      <Sider style={siderStyle} collapsed={app.collapsed} >
        <div>
          {/* TODO: 有空找图 */}
          <Flex align="center" justify="center">
            <Title level={4} style={{color: "white"}}>LOGO</Title>
          </Flex>
        </div>
        { MenuListComponent }
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </React.Suspense>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default React.memo(AdminLayout);


