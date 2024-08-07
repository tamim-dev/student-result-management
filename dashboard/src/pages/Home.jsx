import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, Select, Space, message } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const optionsDepartment = [
  { value: "BBA", label: "BBA" },
  { value: "TMS", label: "TMS" },
  { value: "THM", label: "THM" },
  { value: "MBA", label: "MBA" },
  { value: "BFA", label: "BFA" },
  { value: "CSE/MCSE", label: "CSE / MCSE" },
  { value: "BSED/MSED", label: "BSED / MSED" },
];
const optionsSemester = [
  { value: "1st", label: "1st" },
  { value: "2nd", label: "2nd" },
  { value: "3rd", label: "3rd" },
  { value: "4th", label: "4th" },
  { value: "5th", label: "5th" },
  { value: "6th", label: "6th" },
  { value: "7th", label: "7th" },
  { value: "8th", label: "8th" },
];
const optionsSection = [
  { value: "2016-2017", label: "2016-2017" },
  { value: "2017-2018", label: "2017-2018" },
  { value: "2018-2019", label: "2018-2019" },
  { value: "2019-2020", label: "2019-2020" },
  { value: "2020-2021", label: "2020-2021" },
  { value: "2021-2022", label: "2021-2022" },
  { value: "2022-2023", label: "2022-2023" },
  { value: "2023-2024", label: "2023-2024" },
];
const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Add student result",
    });
  };

  const onFinish = async (values) => {
    let data = {
      department: values.department,
      session: values.session,
      semester: values.semester,
      roll: values.roll,
      name: values.name,
      fathername: values.fathername,
      mothername: values.mothername,
      gpa: values.gpa,
      subjects: values.subject,
    };

    let user_data = await axios.post("http://localhost:8000/addresult", data);

    if (user_data.data.success) {
      success();
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h1 style={{ marginBottom: "20px" }}>Add student result</h1>

        <Form.Item
          style={{ width: "600px" }}
          label="Roll"
          name="roll"
          rules={[
            {
              required: true,
              message: "Please input your Role",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          style={{ width: "600px" }}
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ width: "600px" }}
          label="Father Name"
          name="fathername"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ width: "600px" }}
          label="Mother Name"
          name="mothername"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ width: "600px" }}
          label="GPA"
          name="gpa"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          style={{ width: "600px" }}
          name="department"
          label="Department"
          rules={[
            {
              required: true,
              message: "Please select Department",
            },
          ]}
        >
          <Select
            options={optionsDepartment}
            placeholder="Select Department"
          ></Select>
        </Form.Item>
        <Form.Item
          style={{ width: "600px" }}
          name="semester"
          label="Semester"
          rules={[
            {
              required: true,
              message: "Please select Semester",
            },
          ]}
        >
          <Select
            options={optionsSemester}
            placeholder="Select Semester"
          ></Select>
        </Form.Item>
        <Form.Item
          style={{ width: "600px" }}
          name="session"
          label="Session"
          rules={[
            {
              required: true,
              message: "Select session",
            },
          ]}
        >
          <Select
            options={optionsSection}
            placeholder="Select session"
          ></Select>
        </Form.Item>

        <Form.List name="subject">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "subjectname"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing first name",
                      },
                    ]}
                  >
                    <Input placeholder="Subject Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "subjectcode"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing last name",
                      },
                    ]}
                  >
                    <Input placeholder="Subject Code " type="number" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "score"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing last name",
                      },
                    ]}
                  >
                    <Input placeholder="Score" type="number" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "gpa"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing last name",
                      },
                    ]}
                  >
                    <Input placeholder="GPA " />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Subject
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Home;
