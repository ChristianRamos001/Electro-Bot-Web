import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { authService } from "../../../services/auth";
import "./login.scss";
import { useHistory } from "react-router-dom";
import Auth from "../../../utils/auth";

const FormLoginComponent = () => {
  let history = useHistory();

  const [loading, setLoading] = useState(false);

  const onFinish = (attributes) => {
    setLoading(true);
    authService
      .login(attributes)
      .then((response) => {
        const { token } = response;
        setLoading(false);
        if (!["", null, undefined].includes(token)) {
          Auth.authenticateUser(token);
          history.push(`/`);
        } else {
          message.error({
              content: "La credencial ingresada son incorrecta.",
              key: 'alert_key',
              duration: 5
          }).then(() => {});
          history.push(`/login`);
        }
      })
      .catch(() => {
        history.push(`/login`);
      });
  };

  return (
    <div className="container">
      <div className="title-login">¡Bienvenido a Cardio App!</div>
      <div>
        <Form name="form" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor, introduzca su nombre de usuario.",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuario"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor, introduzca su contraseña.",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="form-submit"
              loading={loading}
            >
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormLoginComponent;
