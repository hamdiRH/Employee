import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Tabs, Row, Col } from "antd";
import { FormattedMessage } from "react-intl";
import profile from "../../assets/profile.png";
import messages from "./messages";
const { TabPane } = Tabs;
const Profile = ({
  employe ,
  fetchEmployments
}) => {
  useEffect(() => {
      console.log(employe)
    employe || fetchEmployments();
  }, [fetchEmployments,employe]);

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Profile" key="1">
        <Row type="flex">
          <Col span={6} className="antCol">
            <div>
              <img src={profile} alt="profile" className="logo-profile"></img>
            </div>
            <h1 className="bold ">
            <FormattedMessage {...messages.name} /> <span className="purple">{employe.fullName}</span>
            </h1>
            <h1 className="bold ">
            <FormattedMessage {...messages.email} /> <span className="purple">{employe.email}</span>
            </h1>
          </Col>

          <Col span={17} className="antCol">
            <h1 className="bold ">
            <FormattedMessage {...messages.fullname} /> <span className="purple">{employe.fullName}</span>
            </h1>
            <h1 className="bold ">
            <FormattedMessage {...messages.email} /> <span className="purple">{employe.email}</span>
            </h1>
            <h1 className="bold ">
            <FormattedMessage {...messages.phone} /> <span className="purple">{employe.phone}</span>
            </h1>
            <h1 className="bold ">
            <FormattedMessage {...messages.birthdate} /> <span className="purple">{employe.birthDate}</span>
            </h1>
            <h1 className="bold ">
            <FormattedMessage {...messages.title} /> <span className="purple">{employe.title}</span>
            </h1>
            <h1 className="bold ">
            <FormattedMessage {...messages.departement} /> <span className="purple">{employe.departement}</span>
            </h1>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Education" key="2">
      <h1 className="education"> <FormattedMessage {...messages.education} /></h1>

       {employe.education && employe.education.map((e,i)=> <Col span={20} className="antCol" key={i}>
          <h1 className="bold ">
          <FormattedMessage {...messages.degree} />
            <span className="purple">
              { e.degree}
            </span>
          </h1>
          <h1 className="bold ">
          <FormattedMessage {...messages.fieldOfStudy} />
            <span className="purple">
              {e.fieldOfStudy}
            </span>
          </h1>
          <h1 className="bold ">
          <FormattedMessage {...messages.from} />
            <span className="purple">
              {e.from}
            </span>
          </h1>
          <h1 className="bold ">
          <FormattedMessage {...messages.to} />
            <span className="purple">
              {e.to}
            </span>
          </h1>
        </Col>)}
      </TabPane>
    </Tabs>
  );
};

Profile.propTypes = {
  fetchEmployments: PropTypes.func.isRequired
};

export default Profile


