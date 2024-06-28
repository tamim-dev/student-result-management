import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Login = () => {
    let navigate = useNavigate();

    const onFinish = async (values) => {
        let data = {
            email: values.email,
            password: values.password,
        };

        let user_data = await axios.post("http://localhost:8000/login", data);
        console.log(user_data);
        if (user_data.data.success) {
            navigate("/home");
        }
    };

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <img src={logo} style={{ width: "100px" }} />
            </div>
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <h1>Login Admin</h1>
                <Form.Item
                    style={{ width: "600px" }}
                    label="Email"
                    name="email"
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
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login;
