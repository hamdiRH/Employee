import React, { useState } from "react";
import { Modal, Button,Icon } from "antd";
import { FormattedMessage } from "react-intl";
import messages from "../messages";
import AddForm from "../form";

const ModalForm = ({ edit = false, data ,addEmployment,updateEmployment }) => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      {edit ? (
        <span onClick={showModal} className="icon">  <FormattedMessage {...messages.Edit} /> <Icon type="edit" /></span>
      ) : (
        <Button onClick={showModal} > <span><FormattedMessage {...messages.AddNewEmployee} /></span> <Icon type="user-add" /> </Button>
      )}

      <Modal
        title={edit ? "Edit" : "Add new employee"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <AddForm data={data} edit={edit} addEmployment={addEmployment} updateEmployment={updateEmployment}/>
      </Modal>
    </div>
  );
};
export default ModalForm
