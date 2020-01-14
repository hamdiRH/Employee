import React, { useEffect } from "react";

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Radio,
  Button,
  message
} from "antd";
import { FormattedMessage } from "react-intl";
import messages from "../messages";
const RegistrationForm = ({
  form,
  addEmployment,
  data,
  edit,
  updateEmployment
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (edit) {
          updateEmployment(data.id, values);
          message.success("Employe updated");
        } else {
          addEmployment(values);
          message.success("Employe added");
        }
      }
    });
  };

  const isNumber = (rule, value, callback) => {
    if (isNaN(value)) {
      callback("Value msut be number!");
    } else {
      callback();
    }
  };

  const { getFieldDecorator } = form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };
  const education = [
    {
      value: "school",
      label: "school",
      children: [
        {
          value: "bachelor",
          label: "Bachelor",
          children: [
            {
              value: "computerScience",
              label: "Computer Science"
            }
          ]
        }
      ]
    },
    {
      value: "university",
      label: "university",
      children: [
        {
          value: "master",
          label: "Master",
          children: [
            {
              value: "mediaEngineering",
              label: "Media Engineering"
            }
          ]
        }
      ]
    }
  ];
  useEffect(() => {
    data &&
      form.setFieldsValue({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        birthDate: data.birthDate,
        hireDate: data.hireDate,
        departement: data.departement
      });
  }, [data,form]);
  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item
        label={
          <span>
            FullName &nbsp;
            <Tooltip title="What do you want others to call you?">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator("fullName", {
          rules: [{ required: true, message: "Please input your fullName!" }]
        })(<Input />)}
      </Form.Item>

      <Form.Item label="E-mail">
        {getFieldDecorator("email", {
          rules: [
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item label="phone" hasFeedback>
        {getFieldDecorator("phone", {
          rules: [
            {
              required: true,
              message: "Please input your phone!"
            },
            {
              validator: isNumber
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item label="birthDate" hasFeedback>
        {getFieldDecorator("birthDate", {
          rules: [{ required: true, message: "Please input your birthdate" }]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="hireDate" hasFeedback>
        {getFieldDecorator("hireDate", {
          rules: [{ required: true, message: "Please input your hireDate!" }]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="departement">
        {getFieldDecorator("departement")(
          <Radio.Group>
            <Radio value="engineering"><FormattedMessage {...messages.Engineering} /></Radio>
            <Radio value="Education"><FormattedMessage {...messages.Education} /></Radio>
            <Radio value="Marketing"><FormattedMessage {...messages.Marketing} /></Radio>
            <Radio value="Sales"><FormattedMessage {...messages.Sales} /></Radio>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item label="Education">
        {getFieldDecorator("education", {
          initialValue: ["school", "bachelor", "computerScience"],
          rules: [
            {
              type: "array",
              required: true,
              message: "Please select Employee's education!"
            }
          ]
        })(<Cascader options={education} />)}
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          {edit ? "Update" : "Register"}
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);
export default WrappedRegistrationForm;
