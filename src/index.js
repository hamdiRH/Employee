import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./redux/store";
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
