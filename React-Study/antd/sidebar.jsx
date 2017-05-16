import {
  Menu,
  Icon
} from 'antd';
const SubMenu = Menu.SubMenu;
import React from 'react';

class Sider extends React.Component {
  state = {
    current: '1',
    openKeys: [],
  }
  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({
      current: e.key
    });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({
      openKeys: nextOpenKeys
    });
  }
  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }
  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
        className="sidebar-menu"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>数据管理</span></span>}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>内容管理</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>用户管理</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="setting" /><span>应用管理</span></span>}>
          <Menu.Item key="13">我的应用</Menu.Item>
          <Menu.Item key="14">申请应用</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="setting" /><span>设置管理</span></span>}>
          <Menu.Item key="17">个人信息设置</Menu.Item>
          <Menu.Item key="18">管理员设置</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;