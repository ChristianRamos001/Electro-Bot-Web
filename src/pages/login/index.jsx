import "./login.scss";
import { Helmet } from "react-helmet";
import FormLoginComponent from "../../components/form/login";
import { Layout } from "antd";

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Cardio | Login</title>
      </Helmet>
      <Layout className="Login">
        <section className="login-section">
          <FormLoginComponent />
        </section>
      </Layout>
    </div>
  );
};

export default LoginPage;
