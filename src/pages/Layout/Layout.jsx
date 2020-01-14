import React from "react";
import { Layout } from "antd";
import Sider from "./Sider";
import Header from "./Header";
import Footer from "./Footer";

const { Content } = Layout;
const layout = props => {
  const { children } = props;
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Content className="layout-content">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
export default layout;
