import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Space, Table, Tag } from "antd";
import logo from "../assets/logo.svg";

const Result = () => {
    const location = useLocation();
    const user_data = location.state?.user_data;
    let [subject, setSubject] = useState([]);

    useEffect(() => {
        let data = [];

        user_data.subjects.map((item, index) => {
            console.log("kk", item);
            data.push({
                ...item,
            });
        });
        setSubject(data);
    }, []);

    const columns = [
        {
            title: "Code",
            dataIndex: "subjectcode",
        },
        {
            title: "Subject",
            dataIndex: "subjectname",
        },
        {
            title: "GPA",
            dataIndex: "gpa",
        },
        {
            title: "Score",
            dataIndex: "score",
        },
    ];

    return (
        <section style={{ padding: "0 20px" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#ec7241",
                    padding: "20px",
                }}
            >
                <img style={{ width: "100px" }} src={logo} />
                <h1 style={{ color: "white" }}>New Model Degree College</h1>
            </div>

            <h2 style={{ textAlign: "center", margin: "20px 0" }}>
                Student Result Portal
            </h2>
            <h4>Roll No: {user_data.roll}</h4>
            <h4>Name: {user_data.name}</h4>
            <h4>Father Name: {user_data.fathername}</h4>
            <h4>Mother Name: {user_data.mothername}</h4>
            <h4>Department: {user_data.department}</h4>
            <h4>GPA: {user_data.gpa}</h4>
            <h4>Semester: {user_data.semester}</h4>
            <h4>Session: {user_data.session}</h4>
            <Table
                style={{ marginTop: "20px" }}
                columns={columns}
                dataSource={subject}
                pagination={false}
            />
        </section>
    );
};

export default Result;
