import HeaderComponent from "../../../components/layout/header";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import "./index.scss";

const LayoutAuth = ({ children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <Content className="container-content">
          <div className="site-layout-content">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAuth;
