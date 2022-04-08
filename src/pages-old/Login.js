import React, { Component } from "react";
import LoginScreen from "../components/LoginScreen";
import Layout from "../layout/Layout";
import Meta from "../components/common/Meta";

class Login extends Component {
  render() {
    return (
      <Layout>
        <Meta />
        <LoginScreen />
      </Layout>
    );
  }
}
export default Login;
