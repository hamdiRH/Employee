import React, { useState } from "react";
import { Modal, Button,Icon } from "antd";
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
        <span onClick={showModal} className="icon">  Edit <Icon type="edit" /></span>
      ) : (
        <Button onClick={showModal} > <span>Add new employee</span> <Icon type="user-add" /> </Button>
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
