import {
  Layout,
  Menu,
  Breadcrumb,
  Icon
} from 'antd';
const {
  Header,
  Content,
  Footer,
  Sider
} = Layout;
const SubMenu = Menu.SubMenu;
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Row,
  Col
} from 'antd';
import Login from './dropbox';
import Former from './admin_creation';

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <div className="baas-app">
          <Layout className="app-baas" style={{ height: '100vh'}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="sider"
        >
          <div className="logo" style={{color: 'rgba(255, 255, 255, 0.67)',height: 64}}>
            Hydrogen BaaS
          </div>

    <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span className="nav-text">数据管理</span></span>}
            >
              <Menu.Item key="1">Tom</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">内容管理</span></span>}
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="team" /><span className="nav-text">应用管理</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="7">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={<span><Icon type="team" /><span className="nav-text">用户管理</span></span>}
            >
              <Menu.Item key="8">Team 1</Menu.Item>
              <Menu.Item key="9">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={<span><Icon type="team" /><span className="nav-text">设置管理</span></span>}
            >
              <Menu.Item key="10">Team 1</Menu.Item>
              <Menu.Item key="11">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              title={<span><Icon type="team" /><span className="nav-text">数据管理</span></span>}
            >
              <Menu.Item key="12">Team 1</Menu.Item>
              <Menu.Item key="13">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
              <Row>
                <Col span={20} style={{paddingLeft: 16}}>我的小程序</Col>
                <Col span={4} className="login" style={{textAlign:'right',paddingRight:32}}>
                  <Login />
                </Col>
              </Row>
          </Header>
          <Content style={{ margin: '20px 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }} id="components-form-demo-normal-login ">
              <h2 style={{textAlign: 'center'}}>please perfect personal info </h2>
              <Former />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            copyright ©2009-2017 Created by iFanr
          </Footer>
        </Layout>
      </Layout>    
      </div>

    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));