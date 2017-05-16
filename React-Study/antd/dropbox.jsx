import {
  Menu,
  Dropdown,
  Icon
} from 'antd';
import React from 'react';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">开发文档</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">联系我们</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">登出</Menu.Item>
  </Menu>
);

function Login() {
  return (
    <div>
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
      Teren <Icon type="down" />
    </a>
  </Dropdown>
</div>
  )
}

export default Login;