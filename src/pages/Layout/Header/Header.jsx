import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import messages from "../messages";

const Header = () => {
  const { Header } = Layout;

  return (
    <Header className="layout-header">
      <Link to="/">
        <h1 className="layout-header-title">
        <FormattedMessage {...messages.header} />
          </h1>
      </Link>
    </Header>
  );
};
export default Header;
