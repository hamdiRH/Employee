import React from 'react'
import { Layout } from 'antd';
import { FormattedMessage } from "react-intl";
import messages from "../messages";
const Footer = () => {
    const { Footer } = Layout;

    return (



        <Footer className="layout-footer" >
             <FormattedMessage {...messages.footer} />
            </Footer>

    )
}

export default Footer