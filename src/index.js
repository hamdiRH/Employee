import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "antd/dist/antd.css";
import "./style.scss";

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router>
        <App />
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
