import React, {useState} from "react";
import { Table, Dropdown, Menu, Icon, Avatar, Popconfirm, message } from "antd";

import Modal from '../modal'

const TableData = ({ data,deleteEmployments,history,updateEmployment }) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const menu = (id, obj) => (
    <Menu>
      <Menu.Item key="0">
        <Modal edit={true} id={id} data={obj} updateEmployment={updateEmployment} />
      </Menu.Item>
      <Menu.Item key="1">
        <Popconfirm
          title="Are you sure delete this task?"
          onConfirm={() => {
            deleteEmployments(id);
            message.success("Click on Yes");
          }}
          onCancel={() => message.error("Click on No")}
          okText="Yes"
          cancelText="No"
        >
          <span className="icon" > Delete <Icon type="delete" className="m-reset"/></span>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "FullName",
      dataIndex: "fullName",
      key: "fullName",
      filteredValue: filteredInfo.fullName || null,
      onFilter: (value, record) => record.fullName.includes(value),
      sorter: (a, b) => a.fullName.length - b.fullName.length,
      sortOrder: sortedInfo.columnKey === "fullName" && sortedInfo.order,
      ellipsis: true,
      render: fullName => (
        <>
          <Avatar>{fullName[0].toUpperCase()}</Avatar>
          <span>{" " + fullName.toUpperCase()}</span>{" "}
        </>
      )
    },
    {
      title: "departement",
      dataIndex: "departement",
      key: "departement",
      filteredValue: filteredInfo.departement || null,
      onFilter: (value, record) => record.fullName.includes(value),
      sorter: (a, b) => a.departement.length - b.departement.length,
      sortOrder: sortedInfo.columnKey === "departement" && sortedInfo.order,
      ellipsis: true
    },
    {
      title: "birth Date",
      dataIndex: "birthDate",
      key: "birthDate",
      filteredValue: filteredInfo.birthDate || null,
      onFilter: (value, record) => record.birthDate.includes(value),
      sorter: (a, b) => a.birthDate.length - b.birthDate.length,
      sortOrder: sortedInfo.columnKey === "birthDate" && sortedInfo.order,
      ellipsis: true
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      filteredValue: filteredInfo.phone || null,
      onFilter: (value, record) => record.phone.includes(value),
      sorter: (a, b) => a.phone.length - b.phone.length,
      sortOrder: sortedInfo.columnKey === "phone" && sortedInfo.order,
      ellipsis: true
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filteredValue: filteredInfo.email || null,
      onFilter: (value, record) => record.email.includes(value),
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === "email" && sortedInfo.order,
      ellipsis: true
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id, obj) => {
        return (
          <Dropdown overlay={() => menu(id, obj)} trigger={["click"]}>
            <Icon
              type="small-dash"
              style={{ fontSize: "30px", color: "purple" }}
            />
          </Dropdown>
        );
      }
    },
    {
      title: "Profile",
      dataIndex: "id",
      key: "profile",
      render: id => {
        return <h1 onClick={() => history.push(`/profile/${id}`)}>Profile</h1>;
      }
    }
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={handleChange}
      rowKey={record => record.id}
    />
  );
};

export default TableData;
