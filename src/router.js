import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Description from "./pages/Profile";
import NotFoundPage from "./pages/NotFoundPage";

const Router = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/profile/:id" component={Description} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
};

export default Router;
