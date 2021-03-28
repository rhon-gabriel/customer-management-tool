import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./AppContainer.module.scss";
import { Layout } from "antd";

import Customer from "../Customer/Customer";
import Header from "../Header/Header";

const AppContainer = () => {
  return (
    <Layout className="container">
      <Layout.Header
        style={{
          backgroundColor: "#f9f9f9",
        }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content style={{ backgroundColor: "#f9f9f9" }}>
        <Switch>
          <Route path="/customer/:customerId" component={Customer} />
        </Switch>
      </Layout.Content>
    </Layout>
  );
};

export default AppContainer;
