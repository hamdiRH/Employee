import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl";
import messages from "../messages";
import logo from '../../../assets/logo.png'

const Sider = () => {
    const { Sider } = Layout;

    return (
        <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span className="nav-text"><FormattedMessage {...messages.home} /></span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/">
              <Icon type="user" />
              <span className="nav-text"><FormattedMessage {...messages.em} /></span>
            </Link>
          </Menu.Item>
      
        </Menu>
      </Sider>
    )
}

export default Sider