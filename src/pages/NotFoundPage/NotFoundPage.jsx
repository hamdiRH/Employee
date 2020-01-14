import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

import { Icon } from "antd";
const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "30px" }}>
        {" "}
        <FormattedMessage {...messages.header} />
      </h1>
      <Link to="/">
        <span style={{ fontWeight: "500", fontSize: "18px" }}>
          <Icon type="home" /> <FormattedMessage {...messages.home} />
        </span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
