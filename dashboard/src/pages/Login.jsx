import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import login from "../assets/login.webp";

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
            <div className="login_d">
                <div className="login_img">
                    <img src={login} width={600} />
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
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                        <img src={logo} style={{ width: "120px" }} />
                    </div>
                    <h1 style={{ marginBottom: "20px" }}>Login Admin</h1>
                    <Form.Item
                        style={{ width: "600px" }}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Email!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter your Email" />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "600px" }}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Login;
