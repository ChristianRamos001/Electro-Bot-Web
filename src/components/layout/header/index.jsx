import { Layout, Menu, Dropdown, Space, Avatar, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "./index.scss";
import { useHistory } from "react-router-dom";
import Auth from "../../../utils/auth";

const { Header } = Layout;

const HeaderComponent = () => {
  let history = useHistory();

  const logout = () => {
    Auth.deAuthenticateUser();
    history.push(`/login`);
  };

  return (
    <Header>
      <div className="logo">Cardio App</div>
      <div className="pipeline" />
      <Menu mode="horizontal" defaultSelectedKeys={["0"]}>
        <Menu.Item key="0" onClick={() => history.push(`/`)}>
          Pacientes
        </Menu.Item>
      </Menu>
      <div className="session">
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1" onClick={() => logout()}>
                Cerrar sesión
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
          placement="bottomRight"
          arrow
        >
          <Button type="link">
            <Space>
              <Avatar size={35} icon={<UserOutlined />} />
              Usuario
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderComponent;
